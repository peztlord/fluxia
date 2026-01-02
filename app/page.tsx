import Navbar from "./components/Navbar";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#0A0E29] via-[#8A2BE2] to-[#00FFFF] overflow-hidden">
          <div className="absolute inset-0 bg-[#0A0E29]/80"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Atendimento ao cliente em uma{" "}
                  <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">
                    máquina de vendas 24/7
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#D3D3D3] mb-8 leading-relaxed">
                  Automatize o contato proativo para vender mais e o contato receptivo para suporte instantâneo.
                  Sem filas de espera, sem perda de leads e com inteligência artificial.
                </p>
                <button className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-WHITE font-bold text-lg px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#FF00FF]/25 transition-all duration-300 transform hover:scale-105">
                  Quero automatizar meu negócio agora
                </button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/hero/hero-main-e4c24742336e4f1ebd323878f638d2fc.png"
                  alt="Fluxia automation dashboard"
                  width={1200}
                  height={675}
                  className="w-full max-w-lg rounded-2xl object-cover shadow-2xl shadow-[#FF00FF]/20"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0E29] to-transparent"></div>
        </section>

        {/* Problems Section */}
        <section className="py-20 bg-[#0A0E29]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sua empresa ainda existe?{" "}
                <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">
                  perder dinheiro
                </span>{" "}
                devido a falhas no atendimento ao cliente?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  { title: "Resposta lenta", desc: "Os contatos perdem a eficácia enquanto se aguarda um agente." },
                  { title: "Equipe sobrecarregada", desc: "Seus vendedores perdem tempo respondendo a perguntas básicas." },
                  { title: "Oportunidades perdidas", desc: "Ninguém entra em contato com quem abandonou o carrinho ou solicitou um orçamento." },
                  { title: "Serviço limitado", desc: "Seu negócio para de vender quando o expediente termina." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[#FF00FF]/10 to-[#00FFFF]/10 rounded-2xl border border-[#FF00FF]/20">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        X
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[#D3D3D3]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <img
                  src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/problems/problems-illustration-d08094e150734c9989524a563ebfe749.png"
                  alt="Business problems illustration"
                  width={800}
                  height={600}
                  className="w-full max-w-md rounded-2xl object-cover shadow-2xl shadow-[#FF00FF]/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A0E29] to-[#8A2BE2]/20" id="solutions">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fluxia combina {" "}
                <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">
                  O melhor dos dois mundos
                </span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Active Service Card */}
              <div className="bg-gradient-to-br from-[#FF00FF]/10 to-[#8A2BE2]/10 p-8 rounded-3xl border border-[#FF00FF]/30 hover:border-[#FF00FF]/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF00FF] to-[#8A2BE2] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                    🔵
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Serviço ativo<br />
                    <span className="text-lg text-[#D3D3D3]">(Vendas e Prospecção)</span>
                  </h3>
                </div>
                <img
                  src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/solution/solution-active-297e9e971b71449ba5fb887e7c0b63d1.png"
                  alt="Active service automation"
                  width={800}
                  height={450}
                  className="w-full rounded-2xl object-cover shadow-lg mb-6"
                />
                <ul className="space-y-4 mb-6">
                  {["Recuperação de carrinho abandonado", "Envio de mensagens para a base de leads", "Acompanhamento automático de orçamentos"].map((item, i) => (
                    <li key={i} className="flex items-center text-white">
                      <span className="w-2 h-2 bg-[#FF00FF] rounded-full mr-3"></span>{item}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#FF00FF]/20 p-4 rounded-xl">
                  <p className="text-white font-semibold">
                    Beneficiar: <span className="text-[#FF00FF]">Aumente sua taxa de conversão em até 3 vezes.</span>
                  </p>
                </div>
              </div>

              {/* Inbound Service Card */}
              <div className="bg-gradient-to-br from-[#00FFFF]/10 to-[#008B8B]/10 p-8 rounded-3xl border border-[#00FFFF]/30 hover:border-[#00FFFF]/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#008B8B] rounded-full flex items-center justify-center text-[#0A0E29] font-bold text-2xl mr-4">
                    🟢
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Atendimento ao Cliente (Receptivo)<br />
                    <span className="text-lg text-[#D3D3D3]">(Suporte e Triagem)</span>
                  </h3>
                </div>
                <img
                  src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/solution/solution-inbound-4cc8969da0854764a502ab76a6c64baa.png"
                  alt="Inbound service automation"
                  width={800}
                  height={450}
                  className="w-full rounded-2xl object-cover shadow-lg mb-6"
                />
                <ul className="space-y-4 mb-6">
                  {["Instant 24/7 responses (FAQ)", "Intelligent lead triage (qualification)", "Automatic meeting scheduling"].map((item, i) => (
                    <li key={i} className="flex items-center text-white">
                      <span className="w-2 h-2 bg-[#00FFFF] rounded-full mr-3"></span>{item}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#00FFFF]/20 p-4 rounded-xl">
                  <p className="text-white font-semibold">
                    Beneficiar: <span className="text-[#00FFFF]">Reduzir custos operacionais aumenta a satisfação do cliente.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A0E29] via-[#8A2BE2] to-[#0A0E29] relative overflow-hidden" id="how-it-works">
          <div className="absolute inset-0 bg-[#0A0E29]/80"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Do caos à automação em 3 etapas</h2>
              <p className="text-xl text-[#D3D3D3] max-w-3xl mx-auto">
                Nossa metodologia comprovada transforma seu atendimento ao cliente em uma máquina de vendas de alto desempenho.
              </p>
            </div>
            <div className="max-w-6xl mx-auto mb-16">
              <img
                src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/how-it-works/methodology-diagram-9f0effbf76c04e72ae453681c986ab25.png"
                alt="Fluxia 3-step automation methodology"
                width={1200}
                height={675}
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1",
                  title: "Diagnóstico",
                  desc: "Entendemos o fluxo de trabalho atual da sua empresa e identificamos os gargalos.",
                  items: ["Análise do processo atual", "Identificação dos pontos problemáticos", "Mapeamento de oportunidades de automação"],
                  color: "from-[#FF00FF] to-[#8A2BE2]", bullet: "bg-[#00FFFF]" },
                { step: "2",
                  title: "Implementação",
                  desc: "Criamos os robôs e fluxos de trabalho usando n8n, IA e integração com o WhatsApp.",
                  items: ["Configuração de automação personalizada", "Configuração de chatbot de IA", "Integração de sistemas"],
                  color: "from-[#8A2BE2] to-[#00FFFF]", bullet: "bg-[#FF00FF]" },
                { step: "3",
                  title: "Otimização",
                  desc: "Monitoramos os resultados e ajustamos o sistema continuamente.",
                  items: ["Monitoramento de desempenho", "Melhorias contínuas", "Otimização de resultados"],
                  color: "from-[#00FFFF] to-[#FF00FF]", bullet: "bg-[#8A2BE2]" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">{card.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-[#D3D3D3] mb-6">{card.desc}</p>
                  <ul className="space-y-2 text-[#D3D3D3]">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`w-2 h-2 ${card.bullet} rounded-full mr-3`}></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Integrations Section */}
        <section className="py-20 bg-[#0A0E29] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/5 via-transparent to-[#00FFFF]/5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nós nos conectamos com as ferramentas que você já usa.</h2>
              <div className="inline-flex items-center bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 rounded-full px-6 py-3 border border-[#8A2BE2]/30 mt-4">
                <span className="text-[#00FFFF] font-semibold">✨ Inteligência artificial que aprende com o seu negócio</span>
              </div>
            </div>
            
            {/* ... SVG Icons grid replaced by simplified structure for brevity, but retaining the core content ... */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* WhatsApp */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-full flex items-center justify-center mx-auto mb-4">
                    {/* Icon placeholder or use Lucide 'MessageCircle' */}
                    <span className="text-2xl">💬</span> 
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
                 <p className="text-[#D3D3D3] text-sm">Integração direta com a API do WhatsApp Business</p>
              </div>
              
              {/* CRM */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-[#FF00FF] to-[#8A2BE2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span> 
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">Sistemas CRM</h3>
                 <p className="text-[#D3D3D3] text-sm">HubSpot, RD Station, Pipedrive</p>
              </div>

               {/* Payments */}
               <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-[#8A2BE2] to-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💳</span> 
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">Gateways de pagamento</h3>
                 <p className="text-[#D3D3D3] text-sm">Stripe, PayPal, PagSeguro</p>
              </div>

               {/* Email */}
               <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all text-center">
                 <div className="w-16 h-16 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span> 
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">Marketing por e-mail</h3>
                 <p className="text-[#D3D3D3] text-sm">Mailchimp, ActiveCampaign</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A0E29] via-[#8A2BE2]/20 to-[#0A0E29] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Aqueles que automatizaram, aprovaram</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/testimonials/testimonial-1-e27ae078903641898c8d8763d49efb64.png" alt="Maria Silva" className="w-20 h-20 rounded-full object-cover border-2 border-[#00FFFF]/30" />
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">Maria Silva</h4>
                    <p className="text-[#D3D3D3]">CEO, TechSolutions</p>
                  </div>
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "Reduzimos nosso tempo de resposta de 2 horas para 2 segundos e dobramos nossa taxa de fechamento de vendas."
                </blockquote>
                <div className="bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 rounded-lg p-4 border border-[#8A2BE2]/30 text-center">
                    <span className="text-2xl font-bold text-[#00FFFF]">+150%</span>
                    <p className="text-[#D3D3D3] text-sm">Aumento nas vendas</p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/testimonials/testimonial-2-7948aa21f2844a4b94e39ec8f87ca28b.png" alt="Carlos Mendes" className="w-20 h-20 rounded-full object-cover border-2 border-[#FF00FF]/30" />
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">Carlos Mendes</h4>
                    <p className="text-[#D3D3D3]">Founder, E-commerce Plus</p>
                  </div>
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "A recuperação de carrinhos abandonados, por si só, nos trouxe uma receita adicional de US$ 50 mil por mês."
                </blockquote>
                <div className="bg-gradient-to-r from-[#8A2BE2]/20 to-[#FF00FF]/20 rounded-lg p-4 border border-[#00FFFF]/30 text-center">
                    <span className="text-2xl font-bold text-[#FF00FF]">$50k+</span>
                    <p className="text-[#D3D3D3] text-sm">Recuperação mensal</p>
                </div>
              </div>

               {/* Testimonial 3 */}
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#FF00FF]/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/testimonials/testimonial-3-b3bce4cb85e3458bb8cbdd5efa270d03.png" alt="Ana Costa" className="w-20 h-20 rounded-full object-cover border-2 border-[#8A2BE2]/30" />
                  <div className="ml-4">
                    <h4 className="text-white font-bold text-lg">Ana Costa</h4>
                    <p className="text-[#D3D3D3]">Director, ServicePro</p>
                  </div>
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "Nossos índices de satisfação do cliente aumentaram 40%, enquanto os custos de suporte foram reduzidos em 60%."
                </blockquote>
                <div className="bg-gradient-to-r from-[#00FFFF]/20 to-[#8A2BE2]/20 rounded-lg p-4 border border-[#FF00FF]/30 text-center">
                    <span className="text-2xl font-bold text-[#8A2BE2]">-60%</span>
                    <p className="text-[#D3D3D3] text-sm">Custos de suporte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#0A0E29] via-[#1a1f3a] to-[#0A0E29] relative overflow-hidden" id="contact">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Pronto para
                            <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">Expanda sua operação</span>
                            Sem aumentar sua equipe?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#8A2BE2] text-white font-semibold rounded-2xl hover:from-[#8A2BE2] hover:to-[#00FFFF] transition-all shadow-lg">
                                Agende uma consulta gratuita
                            </button>
                        </div>
                    </div>
                     <div className="relative">
                        <img 
                          src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/8ee93a7c-5ce3-4b4a-b889-a9c9bcb72cd6/cta/cta-consultation-02056d50de5d40b19d07ded491e07e9c.png" 
                          alt="Consultation" 
                          className="w-full rounded-2xl object-cover shadow-2xl border border-[#FF00FF]/20"
                        />
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A0E29] border-t border-[#8A2BE2]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-2xl font-bold gradient-text mb-4">Fluxia</div>
              <p className="text-[#D3D3D3] text-sm mb-4">
                Transforme seu atendimento ao cliente em uma máquina de vendas 24 horas por dia, 7 dias por semana, com automação inteligente.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            {/* Footer Links Col 1 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2">
                {["Features", "Integrations", "Pricing", "API"].map(item => (
                    <li key={item}><a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
             {/* Footer Links Col 2 */}
             <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Contact"].map(item => (
                    <li key={item}><a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
             {/* Footer Links Col 3 */}
             <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                {["Help Center", "Documentation", "Privacy Policy", "Terms of Service"].map(item => (
                    <li key={item}><a href="#" className="text-[#D3D3D3] hover:text-[#00FFFF] transition-colors text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#8A2BE2]/20 mt-8 pt-8 text-center">
            <p className="text-[#D3D3D3] text-sm">© 2025 Fluxia Sales | CNPJ 47.638.763/0001-26. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}