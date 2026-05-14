export default function HomeSections() {
  return (
    <>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">+500</div>
          <div className="stat-label">Clientes Satisfeitos</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99%</div>
          <div className="stat-label">De Aprovação</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5 Anos</div>
          <div className="stat-label">De Experiência</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">+15h</div>
          <div className="stat-label">Horas Personalizadas</div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="differentials-section" id="beneficios">
        <div className="diff-subtitle">NOSSOS DIFERENCIAIS</div>
        <h2 className="diff-title">A Experiência Ovelin</h2>

        <div className="diff-grid">
          <div className="diff-card">
            <div className="diff-icon"><i className="fa-solid fa-shirt"></i></div>
            <h3 className="diff-card-title">Tecidos Tecnológicos</h3>
            <p className="diff-card-text">Respirabilidade e secagem rápida para o máximo conforto durante treinos intensos.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon"><i className="fa-solid fa-scissors"></i></div>
            <h3 className="diff-card-title">Modelagem Anatômica</h3>
            <p className="diff-card-text">Ajuste perfeito que valoriza o corpo e permite total amplitude de movimento.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <h3 className="diff-card-title">Durabilidade Premium</h3>
            <p className="diff-card-text">Materiais de alta resistência que mantêm a forma e a cor após várias lavagens.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon diff-icon-dark"><i className="fa-solid fa-gem"></i></div>
            <h3 className="diff-card-title">Design Exclusivo</h3>
            <p className="diff-card-text">Estilo sofisticado para você transitar perfeitamente do treino para o dia a dia.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon"><i className="fa-solid fa-dumbbell"></i></div>
            <h3 className="diff-card-title">Sustentação Ideal</h3>
            <p className="diff-card-text">Suporte estratégico para exercícios de alto impacto com conforto absoluto.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon"><i className="fa-solid fa-temperature-half"></i></div>
            <h3 className="diff-card-title">Conforto Térmico</h3>
            <p className="diff-card-text">Regulação inteligente de temperatura para treinos perfeitos em qualquer clima.</p>
          </div>
        </div>

        <a href="#" className="btn-differentials">EXPERIMENTE A DIFERENÇA</a>
      </section>

      {/* About Section */}
      <section className="about-section" id="sobre">
        <div className="about-image">
          <video autoPlay loop muted playsInline>
            <source src="/assets/videos/about.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about-content">
          <div className="about-subtitle">NOSSA ESSÊNCIA</div>
          <h2 className="about-title">Onde o movimento se<br />encontra com a consciência.</h2>
          <p className="about-text">
            A <strong>Ovelin</strong> nasceu da visão de criar roupas fitness com design funcional e estético. Desde nossa fundação, nos empenhamos em oferecer peças que transcendem o vestuário comum.
          </p>
          <ul className="about-list">
            <li><i className="fa-regular fa-circle-check"></i> Design Exclusivo</li>
            <li><i className="fa-regular fa-circle-check"></i> Materiais de Alta Resistência</li>
            <li><i className="fa-regular fa-circle-check"></i> Modelagem Perfeita</li>
          </ul>
          <a href="#" className="btn-about">CONHEÇA NOSSA COLEÇÃO</a>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="especialistas">
        <div className="team-subtitle">POR TRÁS DA MARCA</div>
        <h2 className="team-title">A Equipe Ovelin</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/images/team/ana-clara.jpeg" alt="Ana Clara Ferreira" />
            </div>
            <h3 className="team-name">Ana Clara Ferreira</h3>
            <div className="team-role">FUNDADORA & CEO</div>
            <p className="team-desc">A mente criativa por trás da Ovelin. Ana Clara une design e alta performance.</p>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/images/team/joao-arthur.jpeg" alt="João Arthur" />
            </div>
            <h3 className="team-name">João Arthur</h3>
            <div className="team-role">HEAD DE MARKETING</div>
            <p className="team-desc">O estrategista que conecta a nossa essência ao mundo.</p>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/images/team/victor-rocha.jpeg" alt="Victor Rocha" />
            </div>
            <h3 className="team-name">Victor Rocha</h3>
            <div className="team-role">GERENTE DE OPERAÇÕES</div>
            <p className="team-desc">A engrenagem do nosso padrão de excelência.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="faq-subtitle">TIRE SUAS DÚVIDAS</div>
        <h2 className="faq-title">Perguntas Frequentes</h2>

        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              Os tecidos ficam transparentes durante o treino?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Como funciona a política de trocas e devoluções?
              <i className="fa-solid fa-chevron-down faq-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
