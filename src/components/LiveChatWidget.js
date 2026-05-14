'use client';

import { useState } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como podemos ajudar você hoje?", sender: "agent", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Pré-chat
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStartChat = (e) => {
    e.preventDefault();
    if (name && email) {
      setIsStarted(true);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add User Message
    setMessages([...messages, { 
      id: Date.now(), 
      text: inputValue, 
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputValue('');

    // Simulate Auto-Reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Recebemos sua mensagem. Nossos atendentes estão ocupados no momento, mas responderemos em breve!",
        sender: 'system',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-poppins">
      
      {/* Botão de Abrir */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FF0080] text-white w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(255,0,128,0.4)] hover:scale-110 transition-transform flex items-center justify-center text-2xl"
        >
          <i className="fa-solid fa-message"></i>
        </button>
      )}

      {/* Janela de Chat */}
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Chat Header */}
          <div className="bg-[#2A0033] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-comfortaa font-bold">O</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#2A0033] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm">Ovelin Support</h3>
                <p className="text-xs text-white/70">Online - Respondemos na hora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
            {!isStarted ? (
              // Formulário de Pré-Chat
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mt-4">
                <p className="text-sm text-gray-600 mb-4 text-center">Por favor, preencha os dados abaixo para iniciar o atendimento.</p>
                <form onSubmit={handleStartChat} className="space-y-3">
                  <input type="text" required placeholder="Seu Nome" value={name} onChange={e => setName(e.target.value)} className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-[#FF0080]" />
                  <input type="email" required placeholder="Seu E-mail" value={email} onChange={e => setEmail(e.target.value)} className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-[#FF0080]" />
                  <input type="text" placeholder="Nº do Pedido (Opcional)" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg outline-none focus:border-[#FF0080]" />
                  <button type="submit" className="w-full bg-[#FF0080] text-white font-medium py-2 rounded-lg text-sm hover:bg-[#e60073] transition-colors mt-2">
                    Iniciar Chat
                  </button>
                </form>
              </div>
            ) : (
              // Área de Mensagens
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] p-3 text-sm rounded-2xl ${
                      msg.sender === 'user' ? 'bg-[#FF0080] text-white rounded-tr-none' : 
                      msg.sender === 'system' ? 'bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs italic rounded-tl-none' : 
                      'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 mx-1">{msg.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat Footer */}
          {isStarted && (
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem..." 
                  className="flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full outline-none focus:bg-white focus:border-[#FF0080] transition-colors"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-[#2A0033] text-white rounded-full flex items-center justify-center hover:bg-[#40004d] disabled:opacity-50 transition-colors"
                >
                  <i className="fa-solid fa-paper-plane text-sm"></i>
                </button>
              </form>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
