
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

interface Usuario {
  nome: string;
  email: string;
}

interface UsuarioSalvo extends Usuario {
  senha: string;
}

interface AuthType {
  usuario: Usuario | null;
  carrinho: ItemCarrinho[];
  cadastrar: (nome: string, email: string, senha: string) => boolean;
  login: (email: string, senha: string) => boolean;
  logout: () => void;
  adicionar: (produto: Produto) => void;
  remover: (id: number) => void;
  alterarQuantidade: (id: number, quantidade: number) => void;
  limparCarrinho: () => void;
}

const AuthContext = createContext<AuthType | undefined>(undefined);

const USUARIOS = 'univblog_usuarios';
const SESSAO = 'univblog_sessao';
const CARRINHO = 'univblog_carrinho';

function ler<T>(chave: string, padrao: T): T {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) as T : padrao;
  } catch {
    return padrao;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [usuario, setUsuario] = useState<Usuario | null>(
    () => ler<Usuario | null>(SESSAO, null)
  );

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>(
    () => ler<ItemCarrinho[]>(CARRINHO, [])
  );

  useEffect(() => {
    if (usuario) {
      localStorage.setItem(SESSAO, JSON.stringify(usuario));
    } else {
      localStorage.removeItem(SESSAO);
    }
  }, [usuario]);

  useEffect(() => {
    localStorage.setItem(CARRINHO, JSON.stringify(carrinho));
  }, [carrinho]);

  const cadastrar = (
    nome: string,
    email: string,
    senha: string
  ): boolean => {
    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim().toLowerCase();

    if (!nomeLimpo || !emailLimpo || senha.length < 6) {
      return false;
    }

    const usuarios = ler<UsuarioSalvo[]>(USUARIOS, []);

    if (usuarios.some((u) => u.email === emailLimpo)) {
      return false;
    }

    const novo: UsuarioSalvo = {
      nome: nomeLimpo,
      email: emailLimpo,
      senha,
    };

    localStorage.setItem(USUARIOS, JSON.stringify([...usuarios, novo]));
    setUsuario({ nome: novo.nome, email: novo.email });

    return true;
  };

  const login = (email: string, senha: string): boolean => {
    const emailLimpo = email.trim().toLowerCase();
    const usuarios = ler<UsuarioSalvo[]>(USUARIOS, []);

    const encontrado = usuarios.find(
      (u) => u.email === emailLimpo && u.senha === senha
    );

    if (!encontrado) return false;

    setUsuario({
      nome: encontrado.nome,
      email: encontrado.email,
    });

    return true;
  };

  const logout = () => setUsuario(null);

  const adicionar = (produto: Produto) => {
    setCarrinho((atual) => {
      const existente = atual.find(
        (item) => item.produto.id === produto.id
      );

      if (existente) {
        return atual.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...atual, { produto, quantidade: 1 }];
    });
  };

  const remover = (id: number) => {
    setCarrinho((atual) =>
      atual.filter((item) => item.produto.id !== id)
    );
  };

  const alterarQuantidade = (id: number, quantidade: number) => {
    if (quantidade <= 0) {
      remover(id);
      return;
    }

    setCarrinho((atual) =>
      atual.map((item) =>
        item.produto.id === id
          ? { ...item, quantidade }
          : item
      )
    );
  };

  const limparCarrinho = () => setCarrinho([]);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carrinho,
        cadastrar,
        login,
        logout,
        adicionar,
        remover,
        alterarQuantidade,
        limparCarrinho,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return contexto;
}
