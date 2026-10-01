import { useState } from "react"

const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de conhecer o sistema Jotapê.",
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

// Palette
const C = {
  navBg: "#053D6B",
  heroDark: "#053D6B",
  heroMid: "#0C6DB5",
  heroLight: "#1583CC",
  statsBg: "#0C6DB5",
  sectionAlt: "#EBF5FD",
  cardBorder: "#C1DCF3",
  featureBorder: "#D4EAF8",
  footerBg: "#021B2E",
  accent: "#29B6F6",
  accentDark: "#0288D1",
  accentBg: "#E1F5FE",
  iconColor: "#0288D1",
  textMuted: "#5E7A96",
  textDim: "#7AA0BF",
  textOnDark: "#9BB8D0",
  avatarBg: "#0C6DB5",
  mockupBg: "#061A2E",
  mockupBar: "#041220",
  mockupCard: "#061A30",
  stepNum: "#D4EAF8",
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Emissão de NF-e",
    desc: "Emita notas fiscais eletrônicas com poucos cliques. Totalmente integrado com a SEFAZ, sem complicação.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Emissão de NFC-e",
    desc: "Nota Fiscal ao Consumidor para o varejo. Rápida, simples e legal para cada venda no balcão.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cadastro de Produtos",
    desc: "Gerencie seu catálogo com preços, descrições e NCM. Integrado diretamente à emissão das notas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cadastro de Clientes",
    desc: "Mantenha sua base de clientes organizada, com CPF/CNPJ, endereço e histórico de compras.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Registro de Vendas",
    desc: "Acompanhe cada venda em tempo real. Relatórios claros para entender o desempenho do seu negócio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automação Fiscal",
    desc: "Processos automáticos que eliminam retrabalho e reduzem erros. Seu tempo vale muito mais.",
  },
]

const steps = [
  {
    num: "01",
    title: "Cadastre seus produtos e clientes",
    desc: "Em minutos você configura o sistema com as informações do seu negócio. Sem precisar de técnico.",
  },
  {
    num: "02",
    title: "Registre suas vendas",
    desc: "Ao realizar uma venda, selecione os produtos e o cliente. O sistema preenche tudo automaticamente.",
  },
  {
    num: "03",
    title: "Emita o documento fiscal",
    desc: "Com um clique, a nota é transmitida à SEFAZ e enviada ao cliente. Rápido, seguro e legal.",
  },
]

const testimonials = [
  {
    name: "Dona Aparecida",
    role: "Mercearia São João — SP",
    text: "Antes eu tinha medo de emitir nota. Hoje faço sozinha, sem ajuda de ninguém. O sistema é simples demais.",
    avatar: "A",
  },
  {
    name: "Roberto Alves",
    role: "Loja de Materiais de Construção — MG",
    text: "Economizei tempo e dinheiro. Não preciso mais pagar contador para emitir nota toda hora.",
    avatar: "R",
  },
  {
    name: "Fernanda Souza",
    role: "Distribuidora de Alimentos — PR",
    text: "Atendimento pelo WhatsApp é muito bom. Qualquer dúvida que tive, resolveram na hora.",
    avatar: "F",
  },
]

const stats = [
  { value: "5.000+", label: "Empresas atendidas" },
  { value: "2M+", label: "Notas emitidas" },
  { value: "98%", label: "Aprovação dos clientes" },
  { value: "24h", label: "Suporte disponível" },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif", color: "#1A2535" }}>

      {/* NAV */}
      <nav style={{ background: C.navBg, position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, background: C.accent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} style={{ width: 20, height: 20 }}>
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 20, color: "white", letterSpacing: "-0.02em" }}>Jotapê</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {["Recursos", "Como Funciona", "Depoimentos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                style={{ color: C.textOnDark, fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textOnDark)}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#1E90C8", color: "white", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "background 0.2s", fontFamily: "Outfit, sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1678A8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1E90C8")}
          >
            Fale Conosco
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${C.heroDark} 0%, ${C.heroMid} 60%, ${C.heroLight} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, background: `radial-gradient(circle, rgba(41,182,246,0.15) 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px 80px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(41,182,246,0.15)", border: "1px solid rgba(41,182,246,0.35)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                <div style={{ width: 6, height: 6, background: C.accent, borderRadius: "50%" }} />
                <span style={{ color: C.accent, fontSize: 13, fontWeight: 600, fontFamily: "Outfit, sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  Sistema Fiscal Completo
                </span>
              </div>

              <h1 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Emita notas fiscais{" "}
                <span style={{ color: C.accent }}>sem complicação</span>
              </h1>

              <p style={{ color: C.textOnDark, fontSize: 18, lineHeight: 1.7, maxWidth: 480 }}>
                O Jotapê foi feito para quem quer focar no negócio, não em burocracia. NF-e, NFC-e e gestão comercial em um sistema simples e seguro.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "white", padding: "14px 28px", borderRadius: 10, fontSize: 16, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s", fontFamily: "Outfit, sans-serif", boxShadow: "0 4px 20px rgba(37,211,102,0.35)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1DB954"; e.currentTarget.style.transform = "translateY(-1px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <WhatsAppIcon size={20} />
                Quero conhecer pelo WhatsApp
              </a>
              <a
                href="#como-funciona"
                style={{ background: "rgba(255,255,255,0.08)", color: "white", padding: "14px 28px", borderRadius: 10, fontSize: 16, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.2s", fontFamily: "Outfit, sans-serif" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)" }}
              >
                Como funciona →
              </a>
              <div style={{ display: "flex", gap: 24, marginTop: 16, flexWrap: "wrap" }}>
                {["Sem mensalidade de implantação", "Suporte pelo WhatsApp", "SEFAZ integrado"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <svg viewBox="0 0 20 20" fill={C.accent} style={{ width: 16, height: 16, flexShrink: 0 }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: C.textOnDark, fontSize: 13 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: C.statsBg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(255,255,255,0.12)" }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
                <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="recursos" style={{ padding: "96px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 560, marginBottom: 64 }}>
            <span style={{ fontFamily: "Outfit, sans-serif", color: C.iconColor, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Recursos</span>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", marginTop: 8, lineHeight: 1.15 }}>
              Tudo o que sua empresa precisa em um só lugar
            </h2>
            <p style={{ color: C.textMuted, fontSize: 17, lineHeight: 1.7, marginTop: 12 }}>
              Do cadastro à emissão da nota, o Jotapê cuida de cada etapa da sua operação fiscal e comercial.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" style={{ padding: "96px 0", background: C.sectionAlt }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 72px" }}>
            <span style={{ fontFamily: "Outfit, sans-serif", color: C.iconColor, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Como Funciona</span>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", marginTop: 8, lineHeight: 1.15 }}>
              Três passos para emitir sua nota fiscal
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, position: "relative" }} className="steps-grid">
            <div style={{ position: "absolute", top: 32, left: "16.66%", right: "16.66%", height: 2, background: `linear-gradient(90deg, ${C.accent}, ${C.heroMid})`, opacity: 0.25, pointerEvents: "none" }} className="connector-line" />
            {steps.map((s, i) => (
              <StepCard key={i} {...s} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: C.heroMid, color: "white", padding: "14px 32px", borderRadius: 10, fontSize: 16, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, transition: "all 0.2s", fontFamily: "Outfit, sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.heroDark; e.currentTarget.style.transform = "translateY(-1px)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.heroMid; e.currentTarget.style.transform = "translateY(0)" }}
            >
              <WhatsAppIcon size={20} />
              Quero começar agora
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: "96px 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="trust-grid">
            <div>
              <span style={{ fontFamily: "Outfit, sans-serif", color: C.iconColor, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Por que escolher o Jotapê</span>
              <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", marginTop: 8, lineHeight: 1.15, marginBottom: 32 }}>
                Feito para quem não tem tempo a perder
              </h2>

              {[
                { icon: "🛡️", title: "Segurança e conformidade", desc: "Transmissão direta à SEFAZ com certificado digital. Seus dados protegidos e sua empresa sempre em conformidade." },
                { icon: "💬", title: "Suporte humanizado", desc: "Equipe de atendimento disponível pelo WhatsApp. Respostas rápidas por quem entende do seu dia a dia." },
                { icon: "⚡", title: "Fácil de aprender", desc: "Interface pensada para quem nunca usou um sistema fiscal. Em menos de um dia você já emite sua primeira nota." },
                { icon: "📊", title: "Visão do seu negócio", desc: "Relatórios simples que mostram suas vendas, produtos mais vendidos e desempenho comercial." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 44, height: 44, background: C.accentBg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: `linear-gradient(135deg, ${C.heroDark} 0%, ${C.heroMid} 100%)`, borderRadius: 20, padding: 40, color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: `radial-gradient(circle, rgba(41,182,246,0.2) 0%, transparent 70%)` }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 48, fontWeight: 800, color: C.accent, lineHeight: 1, marginBottom: 4 }}>100%</div>
                <div style={{ fontSize: 16, color: C.textOnDark, marginBottom: 32 }}>Web — acessa de qualquer lugar</div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "NF-e", val: "Modelo 55" },
                    { label: "NFC-e", val: "Modelo 65" },
                    { label: "SEFAZ", val: "Integrado" },
                    { label: "Cert. Digital", val: "A1 e A3" },
                    { label: "Estados", val: "Todo Brasil" },
                    { label: "Suporte", val: "WhatsApp" },
                  ].map((item, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 16px" }}>
                      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 15, color: "white" }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" style={{ padding: "96px 0", background: C.sectionAlt }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <span style={{ fontFamily: "Outfit, sans-serif", color: C.iconColor, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Depoimentos</span>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", marginTop: 8 }}>
              Quem usa recomenda
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", background: `linear-gradient(135deg, ${C.heroDark} 0%, ${C.heroMid} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: `radial-gradient(circle, rgba(41,182,246,0.15) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
          <h2 style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
            Pronto para simplificar sua emissão fiscal?
          </h2>
          <p style={{ color: C.textOnDark, fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
            Fale agora com nossa equipe pelo WhatsApp e descubra como o Jotapê pode transformar a rotina da sua empresa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "#25D366", color: "white", padding: "16px 36px", borderRadius: 12, fontSize: 18, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12, transition: "all 0.2s", fontFamily: "Outfit, sans-serif", boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1DB954"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,211,102,0.45)" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.35)" }}
          >
            <WhatsAppIcon size={24} />
            Falar com especialista no WhatsApp
          </a>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 16 }}>
            Atendimento rápido · Sem compromisso · Totalmente gratuito
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.footerBg, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, background: C.accent, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} style={{ width: 18, height: 18 }}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>Jotapê</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Sistema de Automação Comercial e Emissão Fiscal</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 8, color: C.accent, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              <WhatsAppIcon size={18} color={C.accent} />
              Fale conosco
            </a>
          </div>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: 12, marginTop: 24 }}>
            © {new Date().getFullYear()} Jotapê Sistema Emissor Fiscal. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Fale conosco no WhatsApp"
        style={{ position: "fixed", bottom: 28, right: 28, width: 58, height: 58, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.45)", zIndex: 100, transition: "all 0.2s" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.55)" }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)" }}
      >
        <WhatsAppIcon size={30} color="white" />
      </a>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .hidden-mobile { display: none !important; }
        }
        @media (max-width: 520px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function WhatsAppIcon({ size = 18, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} style={{ width: size, height: size, flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.457a.5.5 0 00.621.621l5.605-1.471A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.77-.53-5.33-1.452l-.382-.226-3.329.874.874-3.329-.226-.382A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      style={{ padding: "36px 32px", background: "white", border: `1px solid ${C.featureBorder}`, transition: "all 0.2s", cursor: "default" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#F0F8FF"; e.currentTarget.style.borderColor = C.accent }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = C.featureBorder }}
    >
      <div style={{ width: 52, height: 52, background: C.accentBg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: C.iconColor }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 36, border: `1px solid ${C.cardBorder}`, position: "relative" }}>
      <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 56, fontWeight: 900, color: C.stepNum, lineHeight: 1, marginBottom: 16, letterSpacing: "-0.04em" }}>{num}</div>
      <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

function TestimonialCard({ name, role, text, avatar }: { name: string; role: string; text: string; avatar: string }) {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 32, border: `1px solid ${C.cardBorder}` }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill={C.accent} style={{ width: 16, height: 16 }}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p style={{ color: "#3A5070", fontSize: 15, lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>"{text}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, background: C.avatarBg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "white", fontSize: 16 }}>{avatar}</div>
        <div>
          <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 14 }}>{name}</div>
          <div style={{ color: C.textDim, fontSize: 12 }}>{role}</div>
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div style={{ width: "100%", maxWidth: 480, background: C.mockupBg, borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.45)" }}>
      <div style={{ background: C.mockupBar, padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "Outfit, sans-serif" }}>Jotapê — Painel Fiscal</div>
      </div>

      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ color: C.textDim, fontSize: 11, marginBottom: 2 }}>Setembro 2026</div>
            <div style={{ fontFamily: "Outfit, sans-serif", color: "white", fontWeight: 700, fontSize: 18 }}>Painel de Vendas</div>
          </div>
          <div style={{ background: C.accent, color: "white", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 20, fontFamily: "Outfit, sans-serif" }}>+ Nova NF-e</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { label: "NF-e Emitidas", val: "128", color: C.accent },
            { label: "NFC-e Emitidas", val: "342", color: "#5BC8F5" },
            { label: "Faturamento", val: "R$ 84k", color: "#E8A020" },
          ].map((s, i) => (
            <div key={i} style={{ background: C.mockupCard, borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 20, color: s.color }}>{s.val}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: C.mockupBar, borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Últimas notas emitidas
          </div>
          {[
            { num: "NF-e 000485", cliente: "Mercado Silva", valor: "R$ 1.240,00", status: "Autorizada" },
            { num: "NFC-e 001293", cliente: "Venda Balcão", valor: "R$ 87,50", status: "Autorizada" },
            { num: "NF-e 000484", cliente: "Loja Torres", valor: "R$ 3.560,00", status: "Autorizada" },
          ].map((n, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: "white", fontSize: 12, fontWeight: 600, fontFamily: "Outfit, sans-serif" }}>{n.num}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{n.cliente}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: C.textOnDark, fontSize: 12 }}>{n.valor}</div>
                <div style={{ color: C.accent, fontSize: 10, fontWeight: 600 }}>{n.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
