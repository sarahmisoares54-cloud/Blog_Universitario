import './Home.css';
import { Link } from 'react-router-dom';




const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo-container">
          <div className="star-icon">★</div>
          <h1>UNIV.BLOG</h1>
        </div>
        
        <nav className="nav-menu">
          <button className="nav-btn active">HOME</button>
          <button className="nav-btn">SOBRE NÓS</button>
          <Link to="/sobre">Ir para a página Sobre</Link>
          <button className="nav-btn">SOS ALUNO</button>
          <button className="nav-btn">FÓRUM</button>
        </nav>
        
        <div className="user-profile">
          <span>AU</span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="content-wrapper">
          
          {/* Coluna da Esquerda (Textos) */}
          <section className="text-section">
            <h2 className="pre-title">SUA VIDA NA</h2>
            <div className="content-card">
              <h3 className="card-title">UNIVERSIDADE...</h3>
              <div className="card-text">
                <p>
                  Será uma fase cheia de descobertas, desafios e, claro, muitos momentos inesquecíveis.
                </p>
                <p>
                  Não se resume apenas a assistir às aulas, fazer trabalhos e estudar para provas, mas também envolve conhecer pessoas novas, fazer amizades, participar de atividades e aprender coisas que vão muito além dos livros.
                </p>
                <p>
                  É um período em que começamos a ter mais responsabilidade e liberdade para fazer nossas próprias escolhas, enquanto descobrimos melhor quem somos e o que queremos para o futuro.
                </p>
                <p>
                  Entre correria, trabalhos de última hora, risadas e alguns momentos de estresse, a universidade acaba sendo uma experiência que contribui tanto para nossa formação profissional quanto para nosso crescimento pessoal.
                </p>
              </div>
              <div className="card-button-placeholder"></div>
            </div>
          </section>

          {/* Coluna da Direita (Imagem) */}
          <section className="image-section">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" 
              alt="Estudante olhando para a sala de aula" 
              className="hero-image"
            />
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;

