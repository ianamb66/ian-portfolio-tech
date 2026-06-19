import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Cpu,
  FileText,
  Layers3,
  Mail,
  Megaphone,
  MonitorCog,
  Play,
  Sparkles,
  Workflow,
} from 'lucide-react'
import './App.css'

const navItems = [
  ['Perfil', '#perfil'],
  ['Trabajo', '#trabajo'],
  ['Sistema', '#sistema'],
  ['Contacto', '#contacto'],
]

const clients = [
  'Reckitt',
  'Graneodin',
  'CEMEX',
  'British American Tobacco',
  'Senado',
  'Museo Anahuacalli',
  'Nimbus',
  'Hi-Tech',
]

const capabilities = [
  {
    icon: BriefcaseBusiness,
    label: 'Project Management',
    copy: 'Briefs, rutas, tiempos, proveedores, entregables y seguimiento ejecutivo.',
  },
  {
    icon: Megaphone,
    label: 'Comunicación',
    copy: 'Narrativa institucional, campañas, mensajes clave y materiales de presentación.',
  },
  {
    icon: MonitorCog,
    label: 'Producción creativa',
    copy: 'Coordinación audiovisual, diseño, edición, propuestas visuales y control de calidad.',
  },
  {
    icon: Bot,
    label: 'IA aplicada',
    copy: 'Automatización, documentación, prototipos, reportes, CRM y flujos de trabajo.',
  },
]

const projects = [
  {
    code: '01',
    title: 'CEMEX + Museo Anahuacalli',
    type: 'Estrategia cultural',
    copy: 'Conceptualización, documentación estratégica, análisis de necesidades, ruta de implementación y presupuesto para infraestructura artística.',
    tags: ['Cultura', 'Planeación', 'Documentación'],
  },
  {
    code: '02',
    title: 'Reckitt + marcas de consumo',
    type: 'Campañas y responsabilidad corporativa',
    copy: 'Propuestas, rutas de trabajo, materiales de comunicación y campañas vinculadas con salud, consumo y resistencia antimicrobiana.',
    tags: ['Campañas', 'RCA', 'Cliente'],
  },
  {
    code: '03',
    title: 'Activaciones y eventos',
    type: 'Producción de campo',
    copy: 'Licitación, concepto, coordinación con proveedores, revisión de materiales, producción visual y resolución de incidencias.',
    tags: ['Producción', 'PM', 'Proveedor'],
  },
  {
    code: '04',
    title: 'IA para procesos internos',
    type: 'Operación aumentada',
    copy: 'Flujos con ChatGPT, Claude, Gemini y NotebookLM para reportes, dashboards, documentación, CRM y prototipado rápido.',
    tags: ['IA', 'Automatización', 'Sistemas'],
  },
  {
    code: '05',
    title: 'Comunicación política',
    type: 'Narrativa pública',
    copy: 'Apoyo en comunicación, materiales estratégicos, comunicados y contenidos vinculados con temas legislativos.',
    tags: ['Gobierno', 'Narrativa', 'Contenido'],
  },
  {
    code: '06',
    title: 'Organizaciones sociales',
    type: 'Difusión institucional',
    copy: 'Comunicados, campañas, piezas visuales y materiales audiovisuales para proyectos de impacto y difusión.',
    tags: ['Impacto', 'Visual', 'Difusión'],
  },
]

const timeline = [
  ['2024 - Actualidad', 'Nimbus Marketing y RP', 'Project Manager, comunicación y producción creativa.'],
  ['2024 - Actualidad', 'Senado de la República', 'Asesoría de comunicación política y materiales estratégicos.'],
  ['2025 - Actualidad', 'Black Intelligence Marketing', 'Comunicación para sector gubernamental y proyectos especiales.'],
  ['2023 - 2024', 'Hi-Tech Marketing', 'Diseño senior, edición de video y producción visual.'],
]

const tools = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'NotebookLM',
  'Monday',
  'Notion',
  'Adobe Photoshop',
  'Illustrator',
  'Premiere Pro',
  'After Effects',
  'HTML',
  'CSS',
  'JavaScript',
]

function DotMatrix() {
  const dots = useMemo(() => Array.from({ length: 168 }, (_, index) => index), [])

  return (
    <div className="dot-matrix" aria-hidden="true">
      {dots.map((dot) => (
        <span key={dot} />
      ))}
    </div>
  )
}

function SignalPanel() {
  return (
    <div className="signal-panel reveal">
      <div className="panel-top">
        <span>IAN_OS</span>
        <span>STRATEGY MODE</span>
      </div>
      <DotMatrix />
      <div className="core-orbit" aria-hidden="true">
        <span className="orbit orbit-a" />
        <span className="orbit orbit-b" />
        <span className="orbit orbit-c" />
        <div className="core">
          <Sparkles size={32} strokeWidth={1.6} />
        </div>
      </div>
      <div className="signal-stack">
        <div>
          <small>Input</small>
          <strong>Brief complejo</strong>
        </div>
        <div>
          <small>Proceso</small>
          <strong>Ruta clara</strong>
        </div>
        <div>
          <small>Output</small>
          <strong>Entrega presentable</strong>
        </div>
      </div>
    </div>
  )
}

function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      gsap.set('.reveal', { y: reduceMotion ? 0 : 22 })
      gsap.to('.reveal', {
        y: 0,
        duration: reduceMotion ? 0.01 : 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })

      if (!reduceMotion) {
        gsap.to('.core-orbit', {
          rotate: 360,
          duration: 24,
          ease: 'none',
          repeat: -1,
        })
        gsap.to('.dot-matrix span', {
          opacity: () => gsap.utils.random(0.18, 1),
          duration: 1.6,
          ease: 'sine.inOut',
          stagger: {
            each: 0.012,
            repeat: -1,
            yoyo: true,
          },
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="site-shell">
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand-mark" href="#inicio" aria-label="Ir al inicio">
          <span>IA</span>
          <span>Portfolio</span>
        </a>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="mailto:ianamb.mkt@gmail.com">
          <Mail size={16} />
          Contacto
        </a>
      </nav>

      <main id="main">
        <section id="inicio" className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="system-pill reveal">
                <span className="live-dot" />
                Portfolio profesional 2026
              </div>
              <h1 className="reveal">Ian Aceves convierte ideas difíciles en proyectos claros.</h1>
              <p className="hero-lede reveal">
                Project Manager creativo con visión estratégica. Comunicación, producción, diseño,
                documentación e inteligencia artificial aplicada para llevar briefs complejos a
                entregables que se entienden, se ejecutan y se presentan bien.
              </p>
              <div className="hero-actions reveal">
                <a className="primary-action" href="#trabajo">
                  Ver proyectos
                  <ArrowUpRight size={18} />
                </a>
                <a className="secondary-action" href="#sistema">
                  Ver sistema de trabajo
                </a>
              </div>
              <div className="client-strip reveal" aria-label="Clientes y proyectos">
                {clients.map((client) => (
                  <span key={client}>{client}</span>
                ))}
              </div>
            </div>
            <SignalPanel />
          </div>
        </section>

        <section id="perfil" className="section-block profile-section">
          <div className="section-kicker reveal">Perfil</div>
          <div className="two-column">
            <div>
              <h2 className="section-title reveal">Un perfil híbrido para equipos que necesitan avanzar.</h2>
            </div>
            <div className="profile-copy reveal">
              <p>
                Licenciado en Comunicación Visual con experiencia en agencias, marcas comerciales,
                sector público, organizaciones sociales e instituciones culturales.
              </p>
              <p>
                Su ventaja está en unir criterio visual, operación, narrativa y herramientas de IA
                para reducir fricción entre estrategia, producción y entrega.
              </p>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, label, copy }) => (
              <article className="capability-card reveal" key={label}>
                <Icon size={24} strokeWidth={1.7} />
                <h3>{label}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trabajo" className="section-block work-section">
          <div className="section-header">
            <div>
              <div className="section-kicker reveal">Trabajo seleccionado</div>
              <h2 className="section-title reveal">Casos que combinan estrategia, producción y ejecución.</h2>
            </div>
            <p className="section-note reveal">
              Selección organizada por tipo de reto, no por formato. La idea es mostrar criterio,
              operación y capacidad de respuesta.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.code}>
                <div className="project-meta">
                  <span>{project.code}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sistema" className="section-block system-section">
          <div className="system-layout">
            <div>
              <div className="section-kicker reveal">Sistema</div>
              <h2 className="section-title reveal">Del caos del brief a una ruta visible.</h2>
              <p className="section-note reveal">
                Un enfoque operativo para traducir ideas, pendientes, contenido, producción y
                aprobación en una secuencia clara.
              </p>
            </div>
            <div className="process-board reveal">
              <div className="process-row">
                <FileText size={22} />
                <span>Brief</span>
                <strong>Entender el problema real</strong>
              </div>
              <div className="process-row">
                <Workflow size={22} />
                <span>Ruta</span>
                <strong>Definir entregables y responsables</strong>
              </div>
              <div className="process-row">
                <Layers3 size={22} />
                <span>Producción</span>
                <strong>Coordinar materiales, versiones y revisión</strong>
              </div>
              <div className="process-row">
                <Cpu size={22} />
                <span>IA aplicada</span>
                <strong>Acelerar documentación, reportes y prototipos</strong>
              </div>
              <div className="process-row">
                <Play size={22} />
                <span>Entrega</span>
                <strong>Presentar claro, medir y ajustar</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block resume-section">
          <div className="timeline-panel reveal">
            <div className="section-kicker">Experiencia</div>
            {timeline.map(([date, company, role]) => (
              <article className="timeline-row" key={`${date}-${company}`}>
                <span>{date}</span>
                <div>
                  <h3>{company}</h3>
                  <p>{role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="tools-panel reveal">
            <div className="section-kicker">Stack</div>
            <h2>Herramientas con las que piensa, produce y entrega.</h2>
            <div className="tools-grid">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-panel reveal">
            <div>
              <div className="section-kicker">Contacto</div>
              <h2>Construyamos algo que se vea bien y funcione mejor.</h2>
            </div>
            <div className="contact-actions">
              <a className="primary-action" href="mailto:ianamb.mkt@gmail.com">
                ianamb.mkt@gmail.com
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href="tel:+525616191340">
                56 1619 1340
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Ian Miguel Aceves Mejía Bringas</span>
        <span>Ciudad de México</span>
      </footer>
    </div>
  )
}

export default App
