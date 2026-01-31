import { useState } from 'react'
import { Heart, MapPin, Phone, Mail, BookOpen, Activity } from 'lucide-react'
import './App.css'

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
                  <Phone size={16} />
                  <span>(48) 9 8486-3976</span>
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
              
              <button className="btn-retro" onClick={copyEmail}>
                {copyText}
              </button>
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
