'use client';

import { useEffect, useState } from 'react';
import { trackWhatsAppClick } from '@/lib/facebook-pixel';
import { trackTikTokWhatsAppClick } from '@/lib/tiktok-pixel';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Função para rastrear cliques em ambos os pixels
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackTikTokWhatsAppClick();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Barra de Urgência */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-4 text-center font-bold text-sm md:text-base">
        🚨 OFERTA URGENTE: Seu maracujá não pode esperar! Elimine o trips HOJE por apenas R$ 39,90!
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            O TRIPS ESTÁ <span className="text-red-400">DESTRUINDO</span> SUA LAVOURA?<br />
            <span className="text-yellow-300">ACABE COM ELE PARA SEMPRE!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium">
            O método definitivo baseado na Embrapa para <strong>exterminar o trips em todas as fases</strong> e recuperar seus lucros em semanas!
          </p>
          
          {/* Storytelling Emocional */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-lg mb-4">
              <strong>Cada flor que cai é dinheiro jogado fora...</strong>
            </p>
            <p className="text-lg mb-4">
              Ver seus frutos deformados, manchados, invendáveis... enquanto o trips se multiplica silenciosamente dentro dos tecidos da sua planta.
            </p>
            <p className="text-xl font-bold text-yellow-300">
              Agora imagine colher frutos PERFEITOS e lucrar 3x mais! 🍃💰
            </p>
          </div>
          
          {/* Contador Regressivo */}
          <div className="mb-8">
            <p className="text-lg mb-4 font-semibold">⏰ Oferta válida por apenas:</p>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white px-3 py-2 rounded-lg font-bold min-w-[40px] text-center">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">HORAS</div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white px-3 py-2 rounded-lg font-bold min-w-[40px] text-center">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">MIN</div>
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white px-3 py-2 rounded-lg font-bold min-w-[40px] text-center">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm">SEG</div>
              </div>
            </div>
          </div>
          
          {/* CTA Principal */}
          <a 
            href="https://api.whatsapp.com/send/?phone=5577998276042&text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Guia%20Pr%C3%A1tico%20de%20Controle%20do%20Trips%20no%20Maracuj%C3%A1%20por%20R%24%2039%2C90%2E%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl md:text-2xl px-12 py-6 rounded-full animate-pulse transition-all duration-300 shadow-2xl"
            onClick={handleWhatsAppClick}
          >
            🚀 QUERO EXTERMINAR O TRIPS AGORA!
          </a>
          
          <p className="text-sm mt-4 opacity-90">✅ Acesso imediato via WhatsApp • ✅ Garantia de 7 dias</p>
        </div>
      </section>
      
      {/* Dores vs Soluções */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">
            O TRIPS ESTÁ ACABANDO COM SEU DINHEIRO?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dores */}
            <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                💀 COMO O TRIPS ESTÁ TE ROUBANDO:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">❌</span>
                  <span className="text-gray-700"><strong>Perdas de até 50%</strong> na produção</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">❌</span>
                  <span className="text-gray-700"><strong>Frutos deformados</strong> e manchados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">❌</span>
                  <span className="text-gray-700"><strong>Flores caindo</strong> constantemente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">❌</span>
                  <span className="text-gray-700"><strong>Viroses</strong> como endurecimento dos frutos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3">❌</span>
                  <span className="text-gray-700"><strong>Gastos altos</strong> com pesticidas ineficazes</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-bold text-center">
                  💸 "Seu dinheiro está caindo junto com suas flores!"
                </p>
              </div>
            </div>
            
            {/* Soluções */}
            <div className="bg-green-50 border-l-8 border-green-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                💚 SUA LAVOURA RENASCENDO:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <span className="text-gray-700"><strong>Reduzir perdas em até 50%</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <span className="text-gray-700"><strong>Eliminar deformações</strong> e manchas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <span className="text-gray-700"><strong>Prevenir viroses</strong> efetivamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <span className="text-gray-700"><strong>Economizar</strong> com pulverizações inteligentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✅</span>
                  <span className="text-gray-700"><strong>Aumentar produtividade</strong> e lucro</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-bold text-center">
                  🌱 "Colha frutos PERFEITOS e pague todas as suas contas!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mockup do E-book */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl shadow-2xl transform rotate-3">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">GUIA PRÁTICO</h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Controle do Trips no Maracujá</h4>
                  <div className="text-left space-y-2 text-sm text-gray-600">
                    <p>📖 Baseado na Embrapa</p>
                    <p>🎯 Linguagem simples</p>
                    <p>📱 Acesso imediato</p>
                    <p>🔄 Consulte a qualquer hora</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h2 className="text-4xl font-black mb-6 text-gray-800">
                O ÚNICO GUIA QUE ATACA O TRIPS EM <span className="text-red-600">TODAS AS FASES</span>
              </h2>
              <p className="text-xl mb-6 text-gray-700">
                <strong>Quebre o ciclo completo do trips</strong> - ovos, larvas, pupas e adultos - com o método científico da Embrapa que produtores estão usando para recuperar suas lavouras.
              </p>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-yellow-800 font-semibold">
                  💡 Do ovo ao adulto: aprenda a destruir o trips em CADA fase do ciclo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Prova Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 text-gray-800">
            PRODUTORES ESTÃO <span className="text-green-600">VENCENDO</span> A GUERRA CONTRA O TRIPS
          </h2>
          <p className="text-center text-xl mb-12 text-gray-600">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
              432 produtores já salvaram suas lavouras com este guia!
            </span>
          </p>
          
          {/* Estatísticas */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <div className="text-4xl font-black text-green-600 mb-2">+400%</div>
              <p className="text-gray-700 font-semibold">de flores salvas</p>
            </div>
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <div className="text-4xl font-black text-blue-600 mb-2">-90%</div>
              <p className="text-gray-700 font-semibold">de gastos com pesticidas</p>
            </div>
            <div className="text-center bg-yellow-50 p-8 rounded-2xl">
              <div className="text-4xl font-black text-yellow-600 mb-2">+40%</div>
              <p className="text-gray-700 font-semibold">de produtividade</p>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">João Silva</h4>
                  <p className="text-gray-600 text-sm">Produtor - Bahia</p>
                </div>
                <div className="ml-auto text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic">
                "Reduzi perdas em 40% em apenas 3 semanas! O guia é muito prático e fácil de seguir. Meus frutos voltaram a ficar perfeitos."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Maria Rodrigues</h4>
                  <p className="text-gray-600 text-sm">Produtora - São Paulo</p>
                </div>
                <div className="ml-auto text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic">
                "Economizei mais de R$ 2.000 em pesticidas ineficazes. Agora uso o método do guia e minha produção dobrou!"
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  CS
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Carlos Santos</h4>
                  <p className="text-gray-600 text-sm">Produtor - Minas Gerais</p>
                </div>
                <div className="ml-auto text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic">
                "Finalmente encontrei a solução! Meus maracujás estão lindos e sem deformações. Recomendo para todos os produtores."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AL
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ana Lima</h4>
                  <p className="text-gray-600 text-sm">Produtora - Ceará</p>
                </div>
                <div className="ml-auto text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-700 italic">
                "O trips estava destruindo minha lavoura. Com o guia, controlei a praga em 2 semanas. Meus lucros triplicaram!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* O Que Você Vai Aprender */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-800">
            <span className="text-red-600">ARMA-SE</span> CONTRA O TRIPS: O QUE VOCÊ VAI DOMINAR
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">DESCUBRA O INIMIGO: Identifique as Espécies</h3>
                  <p className="text-gray-600">Reconheça Frankliniella schultzei e F. occidentalis - os vilões que destroem sua lavoura</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">DESTRUA O CICLO: Controle em Todas as Fases</h3>
                  <p className="text-gray-600">Elimine ovos escondidos, larvas vorazes, pupas no solo e adultos voadores</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">MONITORE COM PRECISÃO: Nunca Mais se Pegue de Surpresa</h3>
                  <p className="text-gray-600">Use inspeção visual, método da batida e armadilhas adesivas azuis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">QUÍMICA INTELIGENTE: Acabe com a Resistência</h3>
                  <p className="text-gray-600">Domine a rotação de MoA e pare de desperdiçar dinheiro com pesticidas ineficazes</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">EXÉRCITO DE ALIADOS: Controle Biológico Poderoso</h3>
                  <p className="text-gray-600">Solte ácaros predadores e fungos entomopatogênicos que devoram o trips</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">6</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">FORTALEÇA SUA DEFESA: Práticas Culturais Inteligentes</h3>
                  <p className="text-gray-600">Use adubação equilibrada e cobertura morta para proteger sua lavoura 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">7</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">SEU PLANO DE BATALHA: MIP Personalizado</h3>
                  <p className="text-gray-600">Monte seu Manejo Integrado de Pragas e nunca mais perca dinheiro com trips</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">8</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">PROTEÇÃO PERMANENTE: Acabe com as Reinfestações</h3>
                  <p className="text-gray-600">Mantenha sua lavoura livre do trips para sempre e colha sem medo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            NÃO PERMITA QUE O TRIPS <span className="text-red-400">DESTRUA</span> SEU TRABALHO!
          </h2>
          <p className="text-xl mb-8">
            Comece HOJE a guerra contra o trips e garanta frutos perfeitos que vão encher seu bolso!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-5xl font-black text-yellow-300 mb-4">
              APENAS R$ 39,90
            </div>
            <div className="text-lg">
              <p>✅ Acesso imediato via WhatsApp</p>
              <p>✅ Garantia de 7 dias</p>
              <p>✅ Suporte técnico</p>
            </div>
          </div>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=5577998276042&text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Guia%20Pr%C3%A1tico%20de%20Controle%20do%20Trips%20no%20Maracuj%C3%A1%20por%20R%24%2039%2C90%2E%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-2xl px-16 py-8 rounded-full animate-pulse transition-all duration-300 shadow-2xl"
            onClick={handleWhatsAppClick}
          >
            🚀 QUERO GUERRA TOTAL CONTRA O TRIPS AGORA!
          </a>
          
          <p className="text-sm mt-4 opacity-90">⚠️ PREÇO SOBE EM BREVE - Garanta já seu exército contra o trips!</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Guia Prático - Controle do Trips no Maracujá</p>
          <p className="text-sm text-gray-400">
            Baseado nas pesquisas da Embrapa • Desenvolvido para produtores brasileiros
          </p>
        </div>
      </footer>
    </div>
  );
}