
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useAuth } from './AuthContext';
import type { Produto } from './AuthContext';
import './App.css';

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Caderno universitário',
    descricao: 'Caderno de 200 páginas',
    preco: 32,
    imagem: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    nome: 'Esquadro',
    descricao: 'Material para desenho técnico',
    preco: 15.6,
    imagem: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    nome: 'Lapiseira',
    descricao: 'Lapiseira para estudos',
    preco: 4.1,
    imagem: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    nome: 'Agenda',
    descricao: 'Organize sua rotina',
    preco: 25.2,
    imagem: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    nome: 'Caixa de lápis',
    descricao: 'Lápis para o dia a dia',
    preco: 12.3,
    imagem: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
  },
];

const moeda = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const SosAluno: React.FC = () => {
  const { usuario, adicionar, carrinho } = useAuth();
  const navigate = useNavigate();

  const comprar = (produto: Produto) => {
    if (!usuario) {
      navigate('/login?redirect=/sos-aluno');
      return;
    }

    adicionar(produto);
    navigate('/carrinho');
  };

  const quantidade = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <div className="app-page">
      <Header />

      <main className="shop-page">
        <section className="shop-hero-banner">
          <div className="shop-banner-copy">
            <p>TUDO PARA SUA ROTINA UNIVERSITÁRIA</p>
            <h1>SOS ALUNO</h1>
            <span>Materiais para acompanhar sua jornada acadêmica.</span>
          </div>
        </section>

        <div className="shop-subtitle">
          TUDO QUE VOCÊ PRECISA, A GENTE TEM
        </div>

        <section className="shop-content">
          <div className="shop-heading">
            <div>
              <h2>Materiais universitários</h2>
              <p>Escolha seus materiais para estudar e se organizar.</p>
            </div>

            {usuario && (
              <Link to="/carrinho" className="gold-button">
                🛒 Carrinho ({quantidade})
              </Link>
            )}
          </div>

          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.id}>
                <img
                  className="product-image"
                  src={produto.imagem}
                  alt={produto.nome}
                />

                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>

                <button
                  className="price-button"
                  type="button"
                  onClick={() => comprar(produto)}
                >
                  {moeda(produto.preco)}
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SosAluno;
