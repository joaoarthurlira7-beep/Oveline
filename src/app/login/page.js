'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only used for signup
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (isLogin) {
      // Login Flow
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
        setLoading(false);
      } else {
        router.push('/profile');
      }
    } else {
      // Custom Registration API route would be called here.
      // Since this is a UI demo, we'll pretend it calls an API then signs in.
      // In a real scenario, you create an API route like /api/auth/register
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Erro ao criar conta');
        }

        // Automatic login after registration
        await signIn('credentials', { redirect: false, email, password });
        router.push('/profile');
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-poppins">
      
      {/* LEFT SIDE - Illustration / Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#2A0033] flex-col justify-center items-center text-white overflow-hidden p-12">
        {/* Decorative Circles */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#FF0080] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#40004d] rounded-full blur-[100px] opacity-70"></div>
        
        <div className="relative z-10 text-center max-w-lg">
          <svg className="mx-auto mb-8 text-[#FF0080]" height="60" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 5 24 C 12 24, 14 12, 19 12 C 24 12, 26 22, 32 22 C 38 22, 40 12, 45 12 C 50 12, 52 24, 59 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="6" r="4" fill="currentColor" />
          </svg>
          <h1 className="text-5xl font-bold font-comfortaa mb-6 leading-tight">
            A New Era<br/><span className="text-[#FF0080]">Drops</span>
          </h1>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            Faça login para acessar suas compras, favoritar produtos e participar de uma experiência premium em moda fitness.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-comfortaa text-center">
            {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}
          </h2>
          <p className="text-gray-500 text-sm mb-8 text-center">
            {isLogin ? 'Faça login para continuar' : 'Junte-se à revolução fitness Ovelin'}
          </p>

          {/* Social Logins */}
          <div className="space-y-3 mb-8">
            <button
              onClick={() => signIn('google')}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              <i className="fa-brands fa-google text-red-500 text-lg"></i>
              Continuar com o Google
            </button>
            <button
              onClick={() => signIn('apple')}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              <i className="fa-brands fa-apple text-gray-900 text-xl"></i>
              Continuar com a Apple
            </button>
          </div>

          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-wider">ou</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 text-center">
              {error}
            </div>
          )}

          {/* Credentials Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF0080] focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF0080] focus:border-transparent transition-all outline-none"
                placeholder="nome@exemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF0080] focus:border-transparent transition-all outline-none"
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#FF0080] focus:ring-[#FF0080] h-4 w-4" />
                  <span className="text-gray-600">Lembrar-me</span>
                </label>
                <a href="#" className="text-[#FF0080] hover:underline font-medium">Esqueceu a senha?</a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2A0033] hover:bg-[#40004d] text-white font-medium py-3 rounded-lg transition-colors flex justify-center items-center gap-2 mt-4"
            >
              {loading ? (
                <i className="fa-solid fa-circle-notch fa-spin"></i>
              ) : (
                isLogin ? 'Entrar' : 'Criar Conta'
              )}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Não tem uma conta?" : "Já possui uma conta?"}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="ml-1 text-[#FF0080] hover:underline font-semibold"
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
