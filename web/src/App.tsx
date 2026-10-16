
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import Header from './Header';

import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Cadastro from './Cadastro';
import SosAluno from './SosAluno';
import Carrinho from './Carrinho';

import './App.css';

const Forum: React.FC = () => (
  <div className="app-page">
    <Header />
    <main className="simple-page">
      <section className="simple-card">
        <h1>FÓRUM</h1>
        <p>Em breve, um espaço para compartilhar experiências universitárias.</p>
        <Link to="/" className="gold-button">Voltar para Home</Link>
      </section>
    </main>
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sos-aluno" element={<SosAluno />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
