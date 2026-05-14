'use client';

import { useState } from 'react';

export default function ProductReviews({ productId, reviews = [], averageRating = 4.8, totalReviews = 124 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewBody, setReviewBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Avaliação enviada com sucesso para moderação!');
      setRating(0);
      setReviewBody('');
    }, 1000);
  };

  return (
    <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 font-poppins">
      <h2 className="text-2xl font-comfortaa font-bold text-gray-900 mb-8">Avaliações do Produto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Resumo de Avaliações */}
        <div className="md:col-span-1">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center md:justify-start text-[#FF0080] text-xl mb-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <p className="text-sm text-gray-500">Baseado em {totalReviews} avaliações</p>
          </div>
          
          {/* Breakdown Bars */}
          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={star} className="flex items-center text-sm">
                <span className="w-8 text-gray-600">{star} <i className="fa-solid fa-star text-xs text-yellow-400"></i></span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full mx-3 overflow-hidden">
                  <div className="h-full bg-[#FF0080]" style={{ width: `${100 - i * 20}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de Avaliação */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Escreva uma Avaliação</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 text-2xl text-gray-300">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className={`transition-colors ${(hoverRating || rating) >= star ? 'text-[#FF0080]' : 'hover:text-[#FF0080]'}`}
                >
                  <i className="fa-solid fa-star"></i>
                </button>
              ))}
            </div>
            
            <textarea
              required
              rows="4"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF0080] focus:border-transparent outline-none resize-none"
              placeholder="O que você achou do produto? O tamanho serviu bem? O material é confortável?"
            ></textarea>

            <div className="flex justify-between items-center">
              <label className="cursor-pointer text-[#FF0080] font-medium text-sm flex items-center gap-2 hover:bg-pink-50 py-2 px-4 rounded-lg transition-colors border border-dashed border-[#FF0080]">
                <i className="fa-solid fa-camera"></i> Adicionar Foto
                <input type="file" className="hidden" accept="image/*" />
              </label>
              <button 
                type="submit" 
                disabled={!rating || !reviewBody || isSubmitting}
                className="bg-[#2A0033] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#40004d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Publicar Avaliação'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Lista de Comentários */}
      <div className="mt-12 space-y-8 border-t border-gray-100 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">Avaliações Recentes</h3>
          <select className="border border-gray-200 rounded-lg text-sm px-3 py-1 outline-none">
            <option>Mais Recentes</option>
            <option>Maior Nota</option>
            <option>Menor Nota</option>
          </select>
        </div>

        {/* Avaliação Dummy */}
        <div className="border-b border-gray-50 pb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900">Ana Clara</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                  <i className="fa-solid fa-circle-check mr-1"></i> Compra Verificada
                </span>
              </div>
              <div className="flex text-[#FF0080] text-sm gap-1">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
            </div>
            <span className="text-xs text-gray-400">Há 2 dias</span>
          </div>
          <h4 className="font-bold text-gray-800 mt-2">Tecido incrível e veste super bem!</h4>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Comprei o conjunto M e serviu perfeitamente. O tecido não fica transparente nos agachamentos e a sustentação do top é maravilhosa. Já quero de outras cores!
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>Essa avaliação foi útil?</span>
            <button className="hover:text-[#FF0080]"><i className="fa-solid fa-thumbs-up"></i> Sim (12)</button>
            <button className="hover:text-red-500"><i className="fa-solid fa-thumbs-down"></i> Não (0)</button>
          </div>
        </div>
      </div>
    </div>
  );
}
