import { useState } from 'react'
import {
  MapPin, Mail, Heart, Star, Check,
  Users, Eye, TrendingUp, Activity,
  Dumbbell, Zap, Scale,
  UtensilsCrossed, Leaf, Calendar, Flame, Smile, Video,
} from 'lucide-react'
import './App.css'

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const values = [
  { icon: <Dumbbell size={20} />, label: 'DISCIPLINA' },
  { icon: <Zap size={20} />, label: 'FOCO' },
  { icon: <Heart size={20} />, label: 'SAÚDE' },
  { icon: <Scale size={20} />, label: 'EQUILÍBRIO' },
  { icon: <Star size={20} />, label: 'AUTENTICIDADE' },
]

const contentTypes = [
  { icon: <Heart size={22} />, label: 'LIFESTYLE' },
  { icon: <Dumbbell size={22} />, label: 'TREINOS' },
  { icon: <Activity size={22} />, label: 'PÓS BARIÁTRICA + DM1' },
  { icon: <UtensilsCrossed size={22} />, label: 'ALIMENTAÇÃO SAUDÁVEL' },
  { icon: <Leaf size={22} />, label: 'AUTOCUIDADO' },
  { icon: <Calendar size={22} />, label: 'ROTINA REAL' },
  { icon: <Flame size={22} />, label: 'MOTIVAÇÃO' },
  { icon: <Smile size={22} />, label: 'HUMOR' },
  { icon: <Video size={22} />, label: 'VLOGS' },
]

const partnershipFormats = [
  'Stories (com link, enquete, caixinha, etc.)',
  'Reels (vídeos criativos e autênticos)',
  'Post no feed',
  'Publi natural no dia a dia',
  'Unboxing / Recebidos',
  'Review e indicação sincera',
  'Cobertura de eventos',
  'Presença em loja',
  'Parcerias locais e de longa duração',
  'UGC (Conteúdo para uso de marca)',
]

function App() {
  const [copyText, setCopyText] = useState('Copiar E-mail')

  const copyEmail = () => {
    navigator.clipboard.writeText('marianasantanadasilva94@gmail.com').then(() => {
      setCopyText('Copiado! ✓')
      setTimeout(() => setCopyText('Copiar E-mail'), 2500)
    })
  }

  return (
    <div className="portfolio">

      {/* HERO */}
      <section className="hero">
        <div className="hero-photo">
          <img src="/images/hero.jpg" alt="Mariana Santana @eusantanamari" />
        </div>
        <div className="hero-content">
          <div className="brand-logo">
            eusantana<span className="brand-suffix">mari</span>
          </div>
          <div className="midia-kit-tag">MÍDIA KIT</div>
          <div className="niches">
            <span>LIFESTYLE</span>
            <span className="dot">•</span>
            <span>PÓS BARIÁTRICA</span>
            <span className="dot">•</span>
            <span>DM1</span>
            <span className="dot">•</span>
            <span>ROTINA SAUDÁVEL</span>
          </div>
          <blockquote className="hero-quote">
            "Disciplina, constância e amor próprio mudam tudo."
            <Heart size={14} fill="currentColor" />
          </blockquote>
          <p className="hero-bio">
            Sou criadora de conteúdo que inspira através da minha rotina real:
            fitness, alimentação equilibrada, disciplina e amor próprio.
            Pós-bariátrica + DM1, compartilho leveza, verdade e motivação
            para transformar vidas.
          </p>
          <div className="values-row">
            {values.map(v => (
              <div key={v.label} className="value-badge">
                <span className="value-icon">{v.icon}</span>
                <span className="value-label">{v.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-photos-grid">
            <img src="/images/action1.jpg" alt="CrossFit" />
            <img src="/images/action2.jpg" alt="Treino em aula" />
            <img src="/images/lifestyle.jpg" alt="Lifestyle" />
          </div>
        </div>
      </section>

      {/* MEUS NÚMEROS */}
      <section className="numbers-section">
        <h2 className="section-title">MEUS NÚMEROS</h2>
        <div className="numbers-grid">
          <div className="number-card">
            <div className="number-icon"><Users size={28} /></div>
            <div className="number-value">1.074</div>
            <div className="number-label">SEGUIDORES</div>
          </div>
          <div className="number-card">
            <div className="number-icon"><Eye size={28} /></div>
            <div className="number-value">+5 MIL</div>
            <div className="number-label">VIEWS STORIES</div>
          </div>
          <div className="number-card">
            <div className="number-icon"><TrendingUp size={28} /></div>
            <div className="number-value">15K+</div>
            <div className="number-label">ALCANCE MÉDIO MENSAL</div>
          </div>
          <div className="number-card">
            <div className="number-icon"><Activity size={28} /></div>
            <div className="number-value">5%+</div>
            <div className="number-label">ENGAJAMENTO MÉDIO</div>
          </div>
        </div>
      </section>

      {/* MEU PÚBLICO + MEUS CONTEÚDOS */}
      <div className="mid-section">
        <div className="audience-box">
          <h2 className="section-title">MEU PÚBLICO</h2>
          <div className="pie-wrapper">
            <div className="pie-chart">
              <span>93%</span>
            </div>
            <div className="pie-legend">
              <div><span className="dot-pink" />93% Mulheres</div>
              <div><span className="dot-navy" />7% Homens</div>
            </div>
          </div>
          <ul className="audience-list">
            <li><Check size={14} /><span><strong>Idade:</strong> 18 a 34 anos</span></li>
            <li><Check size={14} /><span><strong>Localização:</strong> São José - SC e região</span></li>
            <li style={{ marginTop: '6px' }}><strong>Interesses:</strong></li>
            <li><Check size={14} /><span>Fitness e treinos</span></li>
            <li><Check size={14} /><span>Alimentação saudável</span></li>
            <li><Check size={14} /><span>Estilo de vida saudável</span></li>
            <li><Check size={14} /><span>Autocuidado e bem-estar</span></li>
            <li><Check size={14} /><span>Rotina real</span></li>
            <li><Check size={14} /><span>Motivação e transformação</span></li>
            <li><Check size={14} /><span>Humor e lifestyle</span></li>
          </ul>
          <div className="audience-highlight">93% MULHERES</div>
        </div>

        <div className="content-box">
          <h2 className="section-title">MEUS CONTEÚDOS</h2>
          <div className="content-grid">
            {contentTypes.map(c => (
              <div key={c.label} className="content-item">
                <div className="content-icon">{c.icon}</div>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GALERIA DE FOTOS */}
      <section className="gallery-section">
        <h2 className="section-title">GALERIA</h2>
        <div className="gallery-grid">
          <img src="/images/hero.jpg" alt="Mariana no ginásio" />
          <img src="/images/action1.jpg" alt="CrossFit Open" />
          <img src="/images/action2.jpg" alt="Aula coletiva" />
          <img src="/images/lifestyle.jpg" alt="Lifestyle" />
          <img src="/images/after-front.jpg" alt="Evolução — frente" />
          <img src="/images/after-back.jpg" alt="Evolução — costas" />
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="transformation-section">
        <h2 className="section-title">MINHA TRANSFORMAÇÃO</h2>
        <div className="transform-grid">
          <div className="transform-col before">
            <div className="transform-label">ANTES</div>
            <img src="/images/before-front.jpg" alt="Antes" />
          </div>
          <div className="transform-col after">
            <div className="transform-label">DEPOIS</div>
            <img src="/images/after-front.jpg" alt="Depois" />
          </div>
        </div>
      </section>

      {/* FORMATOS DE PARCERIA */}
      <section className="partnership-section">
        <h2 className="section-title">FORMATOS DE PARCERIA</h2>
        <div className="partnership-grid">
          {partnershipFormats.map(p => (
            <div key={p} className="partnership-item">
              <Check size={16} className="check-icon" />
              <span>{p}</span>
            </div>
          ))}
        </div>
        <p className="authenticity-quote">Autenticidade é o que me conecta.</p>
      </section>

      {/* MARCAS */}
      <section className="brands-section">
        <h2 className="section-title">MARCAS QUE JÁ FAZEM PARTE</h2>
        <div className="brands-grid">
          <div className="brand-card bebloom">
            BEBLOOM
            <small>moda fitness</small>
          </div>
          <div className="brand-card gpower">
            GPOWER
            <small>imports</small>
          </div>
          <div className="brand-card biscuit">
            BISCUIT
            <small>bolachas</small>
          </div>
          <div className="brand-card emporium">
            EMPORIUM
            <small>NUT</small>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact-section">
        <div className="contact-cta">
          <h2>Vamos juntas?</h2>
          <p>Mais que conteúdo, eu compartilho propósito.</p>
        </div>
        <div className="contact-grid">
          <a
            className="contact-item"
            href="https://www.instagram.com/eusantanamari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={20} />
            <span>@eusantanamari</span>
          </a>
          <a
            className="contact-item"
            href="https://wa.me/5548984863976"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            <span>48 9 8486-3976</span>
          </a>
          <a className="contact-item" href="mailto:marianasantanadasilva94@gmail.com">
            <Mail size={20} />
            <span>marianasantanadasilva94@gmail.com</span>
          </a>
          <div className="contact-item">
            <MapPin size={20} />
            <span>São José — Santa Catarina</span>
          </div>
        </div>
        <button className="copy-email-btn" onClick={copyEmail}>
          {copyText}
        </button>
      </section>

      <footer className="footer">
        <p>© 2025 @eusantanamari — Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
