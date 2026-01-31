import { useState } from 'react'
import { Heart, MapPin, Mail, BookOpen, Activity } from 'lucide-react'
import './App.css'

const WhatsAppIcon = ({ size = 16, color = "#25D366" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    style={{ color }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function App() {
  const [copyText, setCopyText] = useState("Copiar E-mail")
  
  const copyEmail = () => {
    const email = "marianasantanadasilva94@gmail.com"
    navigator.clipboard.writeText(email).then(() => {
      setCopyText("COPIADO! 🌟")
      setTimeout(() => {
        setCopyText("Copiar E-mail")
      }, 2000)
    })
  }

  return (
    <>
      <div className="scanlines"></div>

      <div className="game-container">
        <header>
          <div className="hearts">
            <Heart fill="#FB6F92" size={24} />
            <Heart fill="#FB6F92" size={24} />
            <Heart fill="#FB6F92" size={24} />
            <Heart fill="#FB6F92" size={24} />
            <Heart fill="#FB6F92" size={24} />
          </div>
          <h1>MARIANA SANTANA<span className="blink">_</span></h1>
          <p className="subtitle">PLAYER LVL. 29 | CLASSE: PÓS-VENDA</p>
        </header>

        <div className="profile-grid">
          {/* COLUNA DA ESQUERDA: STATUS */}
          <aside>
            <div className="stats-card">
              <div className="pixel-avatar">
                👾
              </div>
              
              <div className="stat-row">
                <span className="stat-label">CMN (Comunicação)</span>
                <span>100%</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">INT (Inteligência)</span>
                <span>100%</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">CHA (Carisma)</span>
                <span>100%</span>
              </div>
              
              <hr style={{ borderTop: '2px dashed var(--accent-purple)', margin: '15px 0' }} />

              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>São José - SC</span>
                </div>
                <div className="contact-item">
                  <WhatsAppIcon size={16} />
                  <a 
                    href="https://wa.me/5548984863976" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    (48) 9 8486-3976
                  </a>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <a 
                    href="mailto:marianasantanadasilva94@gmail.com" 
                    style={{ fontSize: '0.85em', color: 'inherit', textDecoration: 'none' }}
                  >
                    marianasantanadasilva94@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a 
                  href="https://wa.me/5548984863976" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-retro"
                  style={{ backgroundColor: '#25D366', color: 'white', textShadow: '1px 1px 0px var(--accent-purple)' }}
                >
                  WhatsApp
                </a>
                <button className="btn-retro" onClick={copyEmail}>
                  {copyText}
                </button>
              </div>
            </div>

            <h2 style={{ fontSize: '1rem', width: '100%', textAlign: 'center' }}>SKILL TREE</h2>
            <div className="stats-card">
              
              <div className="skill-bar-container">
                <span className="skill-name">Atendimento Público</span>
                <div className="hp-bar-bg">
                  <div className="hp-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <span className="skill-name">Faturamento/Convênios</span>
                <div className="hp-bar-bg">
                  <div className="hp-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <span className="skill-name">Sistema RealClinic</span>
                <div className="hp-bar-bg">
                  <div className="hp-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <span className="skill-name">Conciliação Bancária</span>
                <div className="hp-bar-bg">
                  <div className="hp-bar-fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill-bar-container">
                <span className="skill-name">Gestão de Agenda</span>
                <div className="hp-bar-bg">
                  <div className="hp-bar-fill" style={{ width: '95%' }}></div>
                </div>
              </div>

            </div>

            <h2 style={{ fontSize: '1rem', width: '100%', textAlign: 'center' }}>INVENTORY</h2>
            <div className="inventory-grid">
              <div className="item-slot">
                <div className="item-inner">
                  <BookOpen size={24} style={{ color: 'var(--light-pink)' }} />
                  <span style={{ fontSize: '0.9rem', marginTop: '5px' }}>RH (Estácio)</span>
                  <small>Incompleto</small>
                </div>
              </div>
              <div className="item-slot">
                <div className="item-inner">
                  <Activity size={24} style={{ color: 'var(--light-pink)' }} />
                  <span style={{ fontSize: '0.9rem', marginTop: '5px' }}>Téc. Enfermagem</span>
                  <small>Incompleto</small>
                </div>
              </div>
            </div>

          </aside>

          {/* COLUNA DA DIREITA: QUEST LOG */}
          <section className="main-content">
            
            <div style={{ background: 'var(--white)', border: '2px solid var(--accent-purple)', padding: '10px', marginBottom: '10px' }}>
              <strong style={{ color: 'var(--dark-pink)' }}>🎯 OBJETIVO ATUAL:</strong>
              <p style={{ margin: '5px 0 0 0' }}>Pós-vendas, Recepcionista, Telefonista ou Auxiliar Administrativo.</p>
            </div>

            <h2>QUEST LOG (EXPERIÊNCIA)</h2>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">HAI TOYOTA</span>
                <span className="quest-date">3 anos</span>
              </div>
              <strong>Role: Pós-vendas</strong>
              <ul className="quest-desc">
                <li>Atendimento ao cliente pós-aquisição.</li>
                <li>Agendamento de manutenção e revisão.</li>
                <li>Suporte e esclarecimento de dúvidas.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">CLÍNICA FOCO X</span>
                <span className="quest-date">06 meses</span>
              </div>
              <strong>Role: Recepcionista</strong>
              <ul className="quest-desc">
                <li>Marcação de consultas/exames (Whats/Tel).</li>
                <li>Atendimento ao público e autorizações.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">GASTRO MEDICAL CENTER</span>
                <span className="quest-date">02 anos</span>
              </div>
              <strong>Role: Telefonista/Recepcionista</strong>
              <ul className="quest-desc">
                <li>Gerenciamento de agenda de consultas.</li>
                <li>Confirmação de agendas e suporte.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">INSTITUTO SÃO JOSÉ</span>
                <span className="quest-date">04 meses</span>
              </div>
              <strong>Role: Recepcionista</strong>
              <ul className="quest-desc">
                <li>Organização de prontuários.</li>
                <li>Suporte interno aos médicos.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">CENTRO OTORRINO FPOLIS</span>
                <span className="quest-date">02 anos</span>
              </div>
              <strong>Role: Aux. Faturamento / Financeiro</strong>
              <ul className="quest-desc">
                <li>Faturamento (Site e XML/RealClinic).</li>
                <li>Recurso de Glosas e repasse médico.</li>
                <li>Conciliação bancária (ContaAzul).</li>
                <li>Pagamento de médicos/funcionários.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">CLÍNICA FOGAÇA</span>
                <span className="quest-date">10 meses</span>
              </div>
              <strong>Role: Recepcionista</strong>
              <ul className="quest-desc">
                <li>Secretária e suporte aos médicos.</li>
                <li>Autorização de exames convênios.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">DMI</span>
                <span className="quest-date">02 anos</span>
              </div>
              <strong>Role: Secretária</strong>
              <ul className="quest-desc">
                <li>Suporte interno em exames e laudos.</li>
                <li>Atendimento de consultórios.</li>
              </ul>
            </div>

            <div className="quest-item">
              <div className="quest-header">
                <span className="quest-title">CLÍNICA DR. CASUO</span>
                <span className="quest-date">03 anos</span>
              </div>
              <strong>Role: Secretária</strong>
              <ul className="quest-desc">
                <li>Atendimento ao público.</li>
                <li>Suporte geral aos médicos.</li>
              </ul>
            </div>

          </section>
        </div>

        <footer style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', opacity: 0.7 }}>
          <p>GAME OVER? PRESS F5 TO RESTART | INSERT COIN TO HIRE</p>
        </footer>
      </div>
    </>
  )
}

export default App
