import './App.css';
import chairImage from './assets/gg.jpg'; // Supondo que você salve a imagem em src/assets

function App() {
  return (
    <div className="page-container">
      <main className="dashboard">
        {/* Bloco 1: Superior Esquerdo (com ícone) */}
        <div className="card card-top-left">
          <h2>Fono Noemi de Oliveira</h2>
          <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 011.06-1.06l1.592 1.591a.75.75 0 11-1.06 1.06l-1.592-1.591zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 011.06 1.06l-1.592 1.592a.75.75 0 01-1.06-1.061l1.592-1.591zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6.106 17.894a.75.75 0 011.06-1.06l1.592 1.591a.75.75 0 11-1.06 1.06l-1.592-1.591zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm3.106-4.894a.75.75 0 011.06 1.06L5.606 9.75a.75.75 0 01-1.06-1.06l1.56-1.56z" />
          </svg>
        </div>

        {/* Bloco 2: Meio Superior */}
        <div className="card card-top-middle"></div>

        {/* Bloco 3: Esquerdo Inferior */}
        <div className="card card-bottom-left">
        </div>

        {/* Bloco 4: Meio Inferior (cor clara) */}
        <div className="card card-bottom-middle card-light"></div>

        {/* Bloco 5: Coluna Direita (imagem, linhas e social) */}
        <div className="card card-right-column">
          <div className="image-container">
            <img src={chairImage} alt="Poltrona de design" />
            <span className="expand-icon">↗</span>
          </div>
          <div className="info-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="social-links">
            <span>◎</span>
            <span>X</span>
            <span>in</span>
            <span>❐</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;