import React from 'react';
import './Sobre.css';

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="star-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <h1 className="logo-text">UNIV.BLOG</h1>
        </div>
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#sobre" className="nav-link active">SOBRE NÓS</a>
          <a href="#sos" className="nav-link">SOS ALUNO</a>
          <a href="#forum" className="nav-link">FÓRUM</a>
        </nav>
        
        <div className="user-avatar">
          AU
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-overlay">
          
          {/* Coluna Esquerda - Texto */}
          <div className="left-column">
            <h2 className="section-title">BASICAMENTE</h2>
            <div className="info-card">
              <p className="highlight-text">
                <strong>Somos um blog feito por universitários, para universitários.</strong>
              </p>
              <p>
                Aqui, a vida acadêmica vai muito além da sala de aula. Falamos sobre faculdade, estudos, carreira, oportunidades, experiências, desafios e tudo aquilo que faz parte da jornada universitária.
              </p>
              <p>
                <strong>Nosso objetivo</strong> é criar um espaço de informação, troca e identificação, onde estudantes possam encontrar conteúdos úteis, descobrir novas oportunidades e também se reconhecer nas histórias e experiências de outros universitários.
              </p>
              <p>
                <strong>Acreditamos</strong> que a universidade é uma fase de descobertas — e que ninguém precisa passar por ela sozinho.
              </p>
              <p>
                <strong>Este é o nosso espaço para aprender, compartilhar e crescer juntos.</strong>
              </p>
              <div className="action-button"></div>
            </div>
          </div>

          {/* Coluna Direita - Imagem */}
          <div className="right-column">
             <div className="image-frame">
                <div className="image-overlay-text">
                    <span className="text-sobre">SOBRE</span>
                    <span className="text-nos">NÓS</span>
                </div>
             </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default AboutPage;

