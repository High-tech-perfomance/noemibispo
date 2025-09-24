function PAGINA() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo à Nossa Landing Page Incrível!</h1>
          <p>Temos a solução perfeita para você.</p>
          <button className="cta-button">Saiba Mais</button>
        </div>
        <div className="hero-image-container">
          {/* Espaço para a foto */}
          <img
            src="https://via.placeholder.com/600x400?text=Sua+Imagem+Aqui" // Substitua por sua URL de imagem
            alt="Imagem de destaque"
            className="hero-image"
          />
        </div>
      </header>

      <section className="features-section">
        <h2>O Que Oferecemos</h2>
        <div className="feature-boxes">
          <div className="feature-box">
            <h3>Recurso 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="feature-box">
            <h3>Recurso 2</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="feature-box">
            <h3>Recurso 3</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="feature-box">
            <h3>Recurso 4</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Sobre Nós</h2>
        <div className="about-content">
          <p>
            Somos uma equipe dedicada a oferecer as melhores soluções para
            nossos clientes. Com anos de experiência, garantimos qualidade e
            inovação em tudo o que fazemos.
          </p>
          <p>
            Nosso compromisso é com a sua satisfação. Venha fazer parte da
            nossa jornada!
          </p>
        </div>
      </section>

      <footer className="footer-section">
        <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}