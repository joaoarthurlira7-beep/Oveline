import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Final Fold / Footer */}
      <footer className="site-footer" id="contato">
        <div className="footer-top">
          <div className="footer-icon-pin">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p className="footer-address-main">
            Rua das Acácias, 1234 - Bairro Jardim Botânico<br />
            Porto Alegre, RS - 90000-000
          </p>
          <Link href="#" className="btn-footer-cta">AGENDAR VISITA GRATUITA</Link>
        </div>

        <div className="footer-bottom">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <svg height="30" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#FDFCF9', display: 'block' }}>
                <path d="M 5 24 C 12 24, 14 12, 19 12 C 24 12, 26 22, 32 22 C 38 22, 40 12, 45 12 C 50 12, 52 24, 59 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="6" r="3" fill="currentColor" />
              </svg>
              <span className="footer-logo-text">Ovelin</span>
            </div>
            <p className="footer-desc">
              Redefina seu movimento. Transforme seu estilo. Moda fitness premium focada em alta performance e design exclusivo.
            </p>
          </div>

          <div className="footer-col nav-col">
            <h4 className="footer-title">Navegação</h4>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/#sobre">Sobre Nós</Link></li>
              <li><Link href="/#beneficios">Benefícios</Link></li>
              <li><Link href="#">Planos</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-title">Contato</h4>
            <ul>
              <li><i className="fa-solid fa-location-dot"></i> <span>Rua das Acácias, 1234<br />Jardim Botânico, Porto Alegre - RS</span></li>
              <li><i className="fa-solid fa-phone"></i> <span>(51) 99999-8888</span></li>
              <li><i className="fa-regular fa-envelope"></i> <span>contato@ovelin.com.br</span></li>
            </ul>
          </div>

          <div className="footer-col social-col">
            <h4 className="footer-title">Siga-nos</h4>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="#" className="float-whatsapp" title="Fale conosco no WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
