import Image from 'next/image';
import Link from 'next/link';
import ProductReviews from '../components/ProductReviews';
import LiveChatWidget from '../components/LiveChatWidget';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSections from '../components/HomeSections';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle anim-el">
            <i className="fa-solid fa-crown"></i> LOJA PREMIUM
          </div>
          <h1 className="anim-el">Redefina Seu Movimento.<br/><em>Transforme</em> Seu Estilo.</h1>
          <p className="hero-desc anim-el">
            Descubra a experiência premium da Ovelin, onde o design encontra a performance. Roupas exclusivas projetadas para potencializar seu movimento.
          </p>
          <div className="hero-buttons anim-el">
            <Link href="#produtos" className="btn-primary">Ver Produtos</Link>
            <Link href="/login" className="btn-outline">Entrar na Conta</Link>
          </div>
        </div>

        <div className="hero-image">
          <video autoPlay loop muted playsInline>
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Product Section Fetched From Database */}
      <section className="product-section" id="produtos">
        <div className="section-header">
          <h2>DROP NIGHT CALLS</h2>
          <a href="#" className="see-all">Ver todos</a>
        </div>
        
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.imageUrl} alt={product.name} />
                <button className="add-to-cart-btn"><i className="fa-solid fa-cart-plus"></i></button>
              </div>
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <div className="product-rating">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <div className="product-category">IT'S LIT</div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">R$ {parseFloat(product.price).toFixed(2).replace('.', ',')} <span>no Pix</span></div>
            </div>
          ))}
        </div>

        {/* Avaliações embutidas */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
          <ProductReviews productId={products[0]?.id || "123"} />
        </div>
      </section>

      {/* Resto das Seções (Estatísticas, Diferenciais, etc) */}
      <HomeSections />

      {/* Widget Flutuante Integrado */}
      <LiveChatWidget />

      <Footer />
    </>
  );
}
