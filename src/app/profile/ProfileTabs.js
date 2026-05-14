'use client';

import { useState } from 'react';

export default function ProfileTabs({ user }) {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden min-h-[500px]">
      {/* Navegação das Abas */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
            activeTab === 'orders'
              ? 'border-b-2 border-[#FF0080] text-[#FF0080] bg-pink-50/30'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <i className="fa-solid fa-box mr-2"></i> Meus Pedidos
        </button>
        <button
          onClick={() => setActiveTab('addresses')}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
            activeTab === 'addresses'
              ? 'border-b-2 border-[#FF0080] text-[#FF0080] bg-pink-50/30'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <i className="fa-solid fa-map-location-dot mr-2"></i> Endereços Salvos
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
            activeTab === 'wishlist'
              ? 'border-b-2 border-[#FF0080] text-[#FF0080] bg-pink-50/30'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          <i className="fa-solid fa-heart mr-2"></i> Lista de Desejos
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="p-8">
        
        {/* TAB: MEUS PEDIDOS */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-comfortaa font-bold text-gray-900 mb-6">Histórico de Pedidos</h2>
            
            {user.orders.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  <i className="fa-solid fa-box-open"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Nenhum pedido encontrado</h3>
                <p className="text-gray-500 mt-2">Você ainda não realizou nenhuma compra na Ovelin.</p>
                <button className="mt-6 px-6 py-2 bg-[#2A0033] text-white rounded-lg hover:bg-[#40004d] transition-colors">
                  Explorar Produtos
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {user.orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:border-[#FF0080] transition-colors">
                    <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Pedido <span className="font-mono font-medium text-gray-900">#{order.id.split('-')[0].toUpperCase()}</span></p>
                        <p className="text-sm text-gray-500">
                          Data: <span className="font-medium text-gray-900">{new Date(order.createdAt).toLocaleDateString('pt-BR')}</span>
                        </p>
                      </div>
                      <div className="text-right mt-4 sm:mt-0">
                        <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {order.status === 'pending' ? 'Pendente' : order.status}
                        </span>
                        <p className="text-lg font-bold text-[#2A0033] mt-2">
                          R$ {parseFloat(order.total).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-3">Itens ({order.items.length}):</p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {order.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>{item.quantity}x Produto ID: {item.productId.slice(0, 8)}...</span>
                            <span className="font-medium">R$ {parseFloat(item.unitPrice).toFixed(2).replace('.', ',')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <i className="fa-solid fa-file-invoice mr-2"></i> Ver Recibo
                      </button>
                      <button className="flex-1 py-2 bg-pink-50 text-[#FF0080] border border-pink-100 rounded-lg text-sm font-medium hover:bg-pink-100 transition-colors">
                        <i className="fa-solid fa-truck-fast mr-2"></i> Rastrear Pedido
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB: ENDEREÇOS */}
        {activeTab === 'addresses' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-comfortaa font-bold text-gray-900">Endereços Salvos</h2>
              <button className="px-4 py-2 bg-[#FF0080] text-white text-sm font-medium rounded-lg hover:bg-[#e60073] transition-colors">
                <i className="fa-solid fa-plus mr-2"></i> Novo Endereço
              </button>
            </div>
            
            {user.addresses.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Nenhum endereço cadastrado ainda.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {user.addresses.map((addr) => (
                  <div key={addr.id} className="border border-gray-200 rounded-xl p-5 relative">
                    {addr.isDefault && (
                      <span className="absolute top-4 right-4 text-xs font-bold bg-[#2A0033] text-white px-2 py-1 rounded">Padrão</span>
                    )}
                    <h3 className="font-bold text-gray-900 mb-1">{addr.street}, {addr.number}</h3>
                    <p className="text-sm text-gray-600 mb-4">{addr.neighborhood} - {addr.city}/{addr.state}<br/>CEP: {addr.zip}</p>
                    <div className="flex gap-4 text-sm font-medium">
                      <button className="text-[#FF0080] hover:underline">Editar</button>
                      <button className="text-gray-500 hover:text-red-500 hover:underline">Remover</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB: WISHLIST */}
        {activeTab === 'wishlist' && (
          <div>
            <h2 className="text-2xl font-comfortaa font-bold text-gray-900 mb-6">Lista de Desejos</h2>
            {user.wishlist.length === 0 ? (
              <div className="text-center py-12">
                <i className="fa-regular fa-heart text-5xl text-gray-300 mb-4"></i>
                <p className="text-gray-500">Sua lista de desejos está vazia.</p>
              </div>
            ) : (
              <p className="text-gray-500">Exibindo os {user.wishlist.length} itens salvos.</p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
