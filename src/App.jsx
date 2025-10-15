import { InstagramIcon, LinkedinIcon, WhatsappIcon } from './components/Icons';
import './App.css';
import personImage from './assets/user.png';
import ShinyText from './components/ShinyText';
// import MagicBento from './components/MagicBento';

function App() {
  return (
    <div className="page-container">
      <main className="dashboard">
        <div className="card card-top-bar">
          <ShinyText 
            text="Noemi Bispo" 
            disabled={false} 
            speed={5} 
            className='title-text' 
          />
        </div>

        <div className="card card-left-column"><div className="social-links-container">
            <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
            <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="card card-bottom-left"></div>

        <div className="card card-center">
          <div className="carousel-container">
            <div className="carousel-track">
              <span>VOZ</span><span>VOZ</span><span>VOZ</span><span>VOZ</span><span>VOZ</span>
              <span>VOZ</span><span>VOZ</span><span>VOZ</span><span>VOZ</span><span>VOZ</span>
            </div>
          </div>
          
          <div className="card-background"></div>

          <img 
            src={personImage} 
            alt="Noemi Bispo" 
            className="person-image" 
          />
        </div>

        <div className="card card-bottom-center"></div>

        <div className="card card-right-column">
          {/* não consegui instalar esse efeito ainda */}
          {/* <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          /> */}
        </div>
      </main>
    </div>
  );
}

export default App;