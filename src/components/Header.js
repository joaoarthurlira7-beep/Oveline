'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <>
      <header className="main-header">
        <div className="logo">
          <svg height="40" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--primary-black)', display: 'block' }}>
            <path d="M 5 24 C 12 24, 14 12, 19 12 C 24 12, 26 22, 32 22 C 38 22, 40 12, 45 12 C 50 12, 52 24, 59 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="6" r="3" fill="currentColor" />
          </svg>
          <span className="logo-text">ovelin</span>
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/#sobre">Sobre nós</Link></li>
            <li><Link href="/#beneficios">Benefícios</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="icon-link"><i className="fa-regular fa-user"></i></Link>
          <button className="icon-link"><i className="fa-solid fa-cart-shopping"></i></button>
          <button 
            className="icon-link" 
            aria-label="Menu" 
            onClick={() => setIsDrawerOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} 
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Side Drawer */}
      <aside className={`side-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <svg height="30" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--accent-drawer)', display: 'block' }}>
              <path d="M 5 24 C 12 24, 14 12, 19 12 C 24 12, 26 22, 32 22 C 38 22, 40 12, 45 12 C 50 12, 52 24, 59 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="32" cy="6" r="3" fill="currentColor" />
            </svg>
            <span className="logo-text-drawer">Ovelin</span>
          </div>
          <button className="drawer-close" onClick={() => setIsDrawerOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="drawer-nav">
          <ul className="drawer-list">
            <li className="drawer-item">
              <Link href="/" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                <i className="fa-solid fa-house drawer-icon"></i>
                <span className="text">Início</span>
              </Link>
            </li>
            <li className="drawer-item">
              <Link href="/profile" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                <i className="fa-solid fa-box drawer-icon"></i>
                <span className="text">Meus Pedidos</span>
              </Link>
            </li>
            <li className="drawer-item has-submenu">
              <button 
                className={`drawer-link drawer-accordion-btn ${openSubmenu ? 'active' : ''}`}
                onClick={() => setOpenSubmenu(!openSubmenu)}
              >
                <i className="fa-solid fa-tag drawer-icon"></i>
                <span className="text">Produtos</span>
                <i className="fa-solid fa-chevron-down accordion-arrow"></i>
              </button>
              <ul className="drawer-sub-list" style={{ display: openSubmenu ? 'block' : 'none', paddingLeft: '3rem', paddingTop: '10px' }}>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Macacão</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Conjuntos</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Shorts</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Calças</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Camisas</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Croppeds</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Camisetas</Link></li>
                <li className="mb-3"><Link href="#" className="text-white hover:text-[#FF0080]">Regatas</Link></li>
                <li><Link href="#" className="text-white hover:text-[#FF0080]">Topps</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
