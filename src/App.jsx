import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  ArrowLeft,
  Bot,
  BriefcaseBusiness,
  Camera,
  Cpu,
  FileText,
  Globe2,
  Layers3,
  Mail,
  Megaphone,
  MonitorCog,
  Moon,
  Play,
  Sparkles,
  Sun,
  Workflow,
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  ['Perfil', '/#perfil'],
  ['Trabajo', '/#trabajo'],
  ['Reportes', '/#webs'],
  ['Sistema', '/#sistema'],
  ['Contacto', '/#contacto'],
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

const clientShowcase = [
  ['Reckitt', 'Consumo, salud y comunicación corporativa', 'RK'],
  ['CEMEX', 'Cultura, educación e infraestructura artística', 'CX'],
  ['British American Tobacco', 'Comunicación y proyectos de marca', 'BT'],
  ['Senado de la República', 'Comunicación política y narrativa pública', 'SR'],
  ['Museo Anahuacalli', 'Proyecto cultural y educativo', 'MA'],
  ['Nimbus Marketing y RP', 'Agencia, operación y producción creativa', 'NB'],
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
    slug: 'cemex-anahuacalli',
    code: '01',
    title: 'CEMEX + Museo Anahuacalli',
    type: 'Estrategia cultural',
    copy: 'Conceptualización, documentación estratégica, análisis de necesidades, ruta de implementación y presupuesto para infraestructura artística.',
    tags: ['Cultura', 'Planeación', 'Documentación'],
    visual: 'CEMEX / ANAHUACALLI',
    xyz: {
      x: 'CEMEX y Museo Anahuacalli necesitaban aterrizar una oportunidad cultural en una propuesta ejecutable.',
      y: 'El resultado fue una ruta de proyecto clara para educación, infraestructura artística y toma de decisiones.',
      z: 'Se resolvió con análisis de necesidades, documentación estratégica, presupuestos y una narrativa lista para presentación.',
    },
    images: [
      {
        title: 'Mapa de necesidades',
        label: 'Diagnóstico',
        bullets: ['Espacios', 'Audiencias', 'Presupuesto'],
        variant: 'grid',
      },
      {
        title: 'Ruta de implementación',
        label: 'Plan ejecutivo',
        bullets: ['Fases', 'Responsables', 'Entregables'],
        variant: 'timeline',
      },
    ],
  },
  {
    slug: 'reckitt-marcas-consumo',
    code: '02',
    title: 'Reckitt + marcas de consumo',
    type: 'Campañas y responsabilidad corporativa',
    copy: 'Propuestas, rutas de trabajo, materiales de comunicación y campañas vinculadas con salud, consumo y resistencia antimicrobiana.',
    tags: ['Campañas', 'RCA', 'Cliente'],
    visual: 'RECKITT / HEALTH',
    xyz: {
      x: 'Marcas de consumo necesitaban campañas y materiales corporativos con sensibilidad de salud y reputación.',
      y: 'Se logró ordenar mensajes, piezas y rutas de trabajo para comunicar con claridad ante audiencias distintas.',
      z: 'Se resolvió con propuestas, mensajes clave, estructura de campaña y coordinación de entregables con enfoque RCA.',
    },
    images: [
      {
        title: 'Arquitectura de campaña',
        label: 'Sistema narrativo',
        bullets: ['Insight', 'Mensaje', 'Piezas'],
        variant: 'grid',
      },
      {
        title: 'Mensajes por audiencia',
        label: 'Comunicación',
        bullets: ['Cliente', 'Consumidor', 'Stakeholders'],
        variant: 'cards',
      },
    ],
  },
  {
    slug: 'activaciones-eventos',
    code: '03',
    title: 'Activaciones y eventos',
    type: 'Producción de campo',
    copy: 'Licitación, concepto, coordinación con proveedores, revisión de materiales, producción visual y resolución de incidencias.',
    tags: ['Producción', 'PM', 'Proveedor'],
    visual: 'FIELD / OPS',
    xyz: {
      x: 'Las activaciones requerían pasar de concepto creativo a ejecución real con tiempos, proveedores y cambios de campo.',
      y: 'El resultado fue una operación más controlada y materiales listos para implementación.',
      z: 'Se resolvió con licitación, coordinación, revisión de materiales, seguimiento y respuesta rápida a incidencias.',
    },
    images: [
      {
        title: 'Layout operativo',
        label: 'Producción',
        bullets: ['Zona', 'Flujo', 'Montaje'],
        variant: 'cards',
      },
      {
        title: 'Checklist de producción',
        label: 'Control',
        bullets: ['Proveedor', 'Materiales', 'Incidencias'],
        variant: 'timeline',
      },
    ],
  },
  {
    slug: 'ia-procesos-internos',
    code: '04',
    title: 'IA para procesos internos',
    type: 'Operación aumentada',
    copy: 'Flujos con ChatGPT, Claude, Gemini y NotebookLM para reportes, dashboards, documentación, CRM y prototipado rápido.',
    tags: ['IA', 'Automatización', 'Sistemas'],
    visual: 'AI / PROCESS',
    xyz: {
      x: 'Los equipos tenían información dispersa, reportes repetitivos y procesos que consumían demasiado tiempo.',
      y: 'Se obtuvo una operación más ágil para documentar, analizar, prototipar y presentar avances.',
      z: 'Se resolvió con flujos usando ChatGPT, Claude, Gemini, NotebookLM, dashboards, CRM y prototipos rápidos.',
    },
    images: [
      {
        title: 'Flujo IA operativo',
        label: 'Automatización',
        bullets: ['Input', 'Prompt', 'Salida'],
        variant: 'timeline',
      },
      {
        title: 'Dashboard de decisiones',
        label: 'Sistema',
        bullets: ['Datos', 'Estado', 'Prioridad'],
        variant: 'grid',
      },
    ],
  },
  {
    slug: 'comunicacion-politica',
    code: '05',
    title: 'Comunicación política',
    type: 'Narrativa pública',
    copy: 'Apoyo en comunicación, materiales estratégicos, comunicados y contenidos vinculados con temas legislativos.',
    tags: ['Gobierno', 'Narrativa', 'Contenido'],
    visual: 'PUBLIC / NARRATIVE',
    xyz: {
      x: 'La comunicación política exigía transformar temas legislativos en mensajes comprensibles y materiales accionables.',
      y: 'El resultado fue una narrativa pública más ordenada para comunicados, contenidos y piezas estratégicas.',
      z: 'Se resolvió con análisis de contexto, redacción, estructura de mensajes y adaptación a formatos de difusión.',
    },
    images: [
      {
        title: 'Mapa narrativo',
        label: 'Contexto',
        bullets: ['Tema', 'Audiencia', 'Ángulo'],
        variant: 'grid',
      },
      {
        title: 'Sistema de mensajes',
        label: 'Difusión',
        bullets: ['Comunicado', 'Contenido', 'Seguimiento'],
        variant: 'cards',
      },
    ],
  },
  {
    slug: 'organizaciones-sociales',
    code: '06',
    title: 'Organizaciones sociales',
    type: 'Difusión institucional',
    copy: 'Comunicados, campañas, piezas visuales y materiales audiovisuales para proyectos de impacto y difusión.',
    tags: ['Impacto', 'Visual', 'Difusión'],
    visual: 'SOCIAL / IMPACT',
    xyz: {
      x: 'Organizaciones sociales necesitaban comunicar causas y proyectos con mayor claridad visual e institucional.',
      y: 'Se generaron materiales de difusión más útiles para explicar impacto, convocar y presentar iniciativas.',
      z: 'Se resolvió con comunicados, campañas, piezas visuales y producción audiovisual orientada a audiencias específicas.',
    },
    images: [
      {
        title: 'Piezas de difusión',
        label: 'Campaña',
        bullets: ['Convocatoria', 'Visuales', 'Entrega'],
        variant: 'cards',
      },
      {
        title: 'Narrativa de impacto',
        label: 'Institucional',
        bullets: ['Causa', 'Evidencia', 'Acción'],
        variant: 'timeline',
      },
    ],
  },
]

const webBuilds = [
  {
    title: 'Nimbus Landing V2',
    type: 'Agencia de marketing y RP',
    url: 'https://nimbus-landing-v2.vercel.app',
    image: '/previews/nimbus.png',
  },
  {
    title: 'BIM Web',
    type: 'Agencia, reputación y posicionamiento',
    url: 'https://bim-web-v2.vercel.app',
    image: '/previews/bim.png',
  },
  {
    title: 'LinkedIn 2026',
    type: 'Reporte HTML / estrategia B2B',
    url: '/reportes/linkedin-2026.html',
    image: '/previews/reporte-linkedin-2026.png',
  },
  {
    title: 'BAT + Heraldo/Expansión',
    type: 'Reporte HTML / propuesta comercial',
    url: '/reportes/bat-heraldo-expansion.html',
    image: '/previews/reporte-bat-heraldo.png',
  },
  {
    title: 'Country Managers',
    type: 'Reporte HTML / inteligencia de mercado',
    url: '/reportes/country-managers.html',
    image: '/previews/reporte-country-managers.png',
  },
  {
    title: 'FMI Transparencia',
    type: 'Reporte HTML / impacto institucional',
    url: '/reportes/fmi-transparencia.html',
    image: '/previews/reporte-fmi-transparencia.png',
  },
  {
    title: 'Museo del Gato',
    type: 'Experiencia cultural',
    url: 'https://museo-del-gato-web.vercel.app',
    image: '/previews/museo-gato.png',
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

const liquidDots = [
  { x: '4vw', y: '8vh', size: '220px', delay: '0s', duration: '18s', tone: 'var(--sun)' },
  { x: '18vw', y: '28vh', size: '120px', delay: '-7s', duration: '15s', tone: 'var(--amber)' },
  { x: '68vw', y: '10vh', size: '260px', delay: '-3s', duration: '21s', tone: 'var(--sun)' },
  { x: '82vw', y: '34vh', size: '150px', delay: '-11s', duration: '16s', tone: 'var(--amber)' },
  { x: '10vw', y: '68vh', size: '320px', delay: '-5s', duration: '24s', tone: 'var(--sun)' },
  { x: '42vw', y: '76vh', size: '180px', delay: '-13s', duration: '19s', tone: 'var(--ink)' },
  { x: '76vw', y: '78vh', size: '300px', delay: '-9s', duration: '22s', tone: 'var(--amber)' },
  { x: '56vw', y: '44vh', size: '110px', delay: '-15s', duration: '14s', tone: 'var(--ink)' },
]

const glassShards = [
  { className: 'hero-glass-a', depth: 'back' },
  { className: 'hero-glass-b', depth: 'mid' },
  { className: 'hero-glass-c', depth: 'front' },
  { className: 'hero-glass-d', depth: 'mid' },
  { className: 'hero-glass-e', depth: 'front' },
]

function LiquidBackdrop() {
  return (
    <div className="liquid-backdrop" aria-hidden="true">
      <svg className="goo-filter" focusable="false">
        <filter id="liquid-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="goo-field">
        {liquidDots.map((dot, index) => (
          <span
            className="goo-dot"
            key={`${dot.x}-${dot.y}`}
            style={{
              '--x': dot.x,
              '--y': dot.y,
              '--size': dot.size,
              '--delay': dot.delay,
              '--duration': dot.duration,
              '--tone': dot.tone,
              '--index': index,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function GlassCurtain() {
  return (
    <div className="glass-curtain" aria-hidden="true">
      {glassShards.map((shard, index) => (
        <span
          className={`glass-shard ${shard.className}`}
          data-depth={shard.depth}
          key={shard.className}
          style={{ '--shard': index }}
        />
      ))}
    </div>
  )
}

function MotionDivider({ words }) {
  return (
    <div className="motion-divider reveal" aria-hidden="true">
      <div className="motion-track">
        {words.map((word, index) => (
          <span className={`motion-chip motion-chip-${index + 1}`} key={word}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

function SignalPanel() {
  return (
    <div className="poster-panel liquid-panel reveal">
      <div className="poster-photo" aria-label="Espacio para foto de Ian">
        <span className="photo-script">Ian</span>
        <div className="portrait-frame">
          <Camera size={30} strokeWidth={1.5} />
          <span>Tu foto aqui</span>
        </div>
      </div>
      <div className="poster-side-actions" aria-hidden="true">
        <span><Globe2 size={18} /></span>
        <span><Sparkles size={18} /></span>
        <span><ArrowUpRight size={18} /></span>
      </div>
      <div className="poster-stats">
        <div>
          <strong>+250k</strong>
          <span>alcance potencial en reportes y campañas</span>
        </div>
        <div>
          <strong>+800h</strong>
          <span>de produccion, analisis y entrega visual</span>
        </div>
      </div>
    </div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
      <span>{isDark ? 'Claro' : 'Oscuro'}</span>
    </button>
  )
}

function CaseVisual({ item, index }) {
  const rows = useMemo(() => Array.from({ length: 18 }, (_, row) => row), [])

  return (
    <div className={`case-media-card case-media-${item.variant} reveal`}>
      <div className="case-media-top">
        <span>{item.label}</span>
        <small>Imagen {index + 1}</small>
      </div>
      <strong>{item.title}</strong>
      <div className="case-art" aria-hidden="true">
        {item.variant === 'timeline' ? (
          <div className="case-art-timeline">
            {item.bullets.map((bullet, bulletIndex) => (
              <i key={bullet}>
                <b>{String(bulletIndex + 1).padStart(2, '0')}</b>
                {bullet}
              </i>
            ))}
          </div>
        ) : item.variant === 'cards' ? (
          <div className="case-art-cards">
            {item.bullets.map((bullet) => (
              <i key={bullet}>{bullet}</i>
            ))}
          </div>
        ) : (
          <div className="case-art-grid">
            {rows.map((row) => (
              <i key={row} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CasePage({ project }) {
  if (!project) {
    return (
      <section className="case-page">
        <div className="case-shell">
          <a className="back-link" href="/#trabajo">
            <ArrowLeft size={18} />
            Volver a casos
          </a>
          <h1>Caso no encontrado.</h1>
          <p>La ruta no coincide con un proyecto publicado en este portfolio.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="case-page">
      <div className="case-shell">
        <a className="back-link reveal" href="/#trabajo">
          <ArrowLeft size={18} />
          Volver a casos
        </a>
        <div className="case-hero">
          <div>
            <div className="section-kicker reveal">Caso {project.code}</div>
            <h1 className="reveal">{project.title}</h1>
            <p className="case-lede reveal">{project.copy}</p>
          </div>
          <div className="case-hero-visual reveal" aria-hidden="true">
            <span>{project.visual}</span>
          </div>
        </div>

        <div className="case-overview reveal">
          <span>{project.type}</span>
          <p>
            Caso desplegado como página propia para mostrar contexto, par visual del trabajo y
            resolución en formato X/Y/Z.
          </p>
        </div>

        <div className="case-media-grid">
          {project.images.map((image, index) => (
            <CaseVisual item={image} index={index} key={image.title} />
          ))}
        </div>

        <div className="xyz-grid">
          <article className="xyz-card reveal">
            <span>X</span>
            <h2>Reto</h2>
            <p>{project.xyz.x}</p>
          </article>
          <article className="xyz-card reveal">
            <span>Y</span>
            <h2>Resultado</h2>
            <p>{project.xyz.y}</p>
          </article>
          <article className="xyz-card reveal">
            <span>Z</span>
            <h2>Resolución</h2>
            <p>{project.xyz.z}</p>
          </article>
        </div>

        <div className="case-next reveal">
          <p>Formato XYZ: qué problema existía, qué resultado se buscó y cómo se resolvió.</p>
          <a className="primary-action" href="/#contacto">
            Hablemos de un proyecto
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  const rootRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme')

    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const caseSlug = window.location.pathname.startsWith('/casos/')
    ? window.location.pathname.split('/').filter(Boolean).at(-1)
    : null
  const activeCase = caseSlug ? projects.find((project) => project.slug === caseSlug) : null

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: reduceMotion ? 0 : 24,
            filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: reduceMotion ? 0.01 : 0.82,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })

      if (!reduceMotion) {
        const glassPanels = gsap.utils.toArray(
          '.capability-card, .client-card, .project-card, .web-card, .process-board, .timeline-panel, .tools-panel, .contact-panel, .case-overview, .case-media-card, .xyz-card',
        )

        glassPanels.forEach((panel, index) => {
          gsap.fromTo(
            panel,
            {
              x: index % 2 === 0 ? -54 : 54,
              rotate: index % 2 === 0 ? -1.4 : 1.4,
              scale: 0.96,
            },
            {
              x: 0,
              rotate: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                start: 'top 86%',
                once: true,
              },
            },
          )
        })

        if (document.querySelector('.dot-matrix span')) {
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
        if (document.querySelector('.goo-field')) {
          gsap.to('.goo-field', {
            y: -180,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.2,
            },
          })
        }
        if (document.querySelector('.glass-shard')) {
          gsap.to('.hero-glass-a', {
            xPercent: -26,
            yPercent: -14,
            rotate: -5,
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.9,
            },
          })
          gsap.to('.hero-glass-b', {
            xPercent: 22,
            yPercent: -28,
            rotate: 4,
            opacity: 0.34,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.9,
            },
          })
          gsap.to('.hero-glass-c', {
            xPercent: -18,
            yPercent: 34,
            rotate: 5,
            opacity: 0.42,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
          gsap.to('.hero-glass-d', {
            xPercent: 26,
            yPercent: 24,
            rotate: -5,
            opacity: 0.32,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
          gsap.to('.hero-glass-e', {
            xPercent: 10,
            yPercent: -42,
            rotate: 6,
            opacity: 0.46,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
        if (document.querySelector('.liquid-layer')) {
          gsap.to('.liquid-layer-a', {
            y: -90,
            x: 36,
            rotate: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
          gsap.to('.liquid-layer-b', {
            y: 72,
            x: -24,
            rotate: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
          gsap.to('.liquid-card', {
            y: -42,
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.9,
            },
          })
        }
        gsap.utils.toArray('.motion-divider').forEach((divider) => {
          gsap.fromTo(
            divider.querySelectorAll('.motion-chip'),
            {
              yPercent: 64,
              rotate: (index) => (index % 2 === 0 ? -7 : 7),
              autoAlpha: 0,
            },
            {
              yPercent: 0,
              rotate: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: divider,
                start: 'top 88%',
                once: true,
              },
            },
          )
          gsap.to(divider.querySelectorAll('.motion-chip'), {
            y: (index) => (index % 2 === 0 ? -28 : 24),
            x: (index) => (index % 2 === 0 ? 18 : -18),
            ease: 'none',
            scrollTrigger: {
              trigger: divider,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="site-shell" data-theme={theme}>
      <LiquidBackdrop />
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand-mark" href="/" aria-label="Ir al inicio">
          <span>IA</span>
          <span>Comunicador visual</span>
        </a>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
          />
          <a className="nav-cta" href="mailto:ianamb.mkt@gmail.com">
            <Mail size={16} />
            Contacto
          </a>
        </div>
      </nav>

      <main id="main">
        {caseSlug ? (
          <CasePage project={activeCase} />
        ) : (
          <>
        <section id="inicio" className="hero-section">
          <GlassCurtain />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="system-pill reveal">
                <span className="live-dot" />
                Portfolio profesional 2026
              </div>
              <h1 className="reveal">ideas que se ven, se mueven y aterrizan.</h1>
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

        <MotionDivider words={['about', 'criterio', 'visual']} />

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
          <div className="client-showcase">
            {clientShowcase.map(([name, detail, initials]) => (
              <article className="client-card reveal" key={name}>
                <div className="client-mark" aria-hidden="true">
                  {initials}
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <MotionDivider words={['portfolio', 'estrategia', 'produccion']} />

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
              <a className="project-card reveal" href={`/casos/${project.slug}`} key={project.code}>
                <div className="project-visual" aria-hidden="true">
                  <span>{project.visual}</span>
                </div>
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
              </a>
            ))}
          </div>
        </section>

        <MotionDivider words={['reportes', 'webs', 'html']} />

        <section id="webs" className="section-block web-section">
          <div className="section-header">
            <div>
              <div className="section-kicker reveal">Webs y reportes HTML</div>
              <h2 className="section-title reveal">Interfaces publicadas y reportes navegables.</h2>
            </div>
            <p className="section-note reveal">
              Una vitrina curada de sitios, experiencias y reportes HTML hechos para presentar
              estrategia, hallazgos y propuestas con una capa visual más clara que un documento plano.
            </p>
          </div>
          <div className="web-grid">
            {webBuilds.map((site) => (
              <article className="web-card reveal" key={site.url}>
                <a href={site.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${site.title}`}>
                  <img src={site.image} alt={`Preview del hero de ${site.title}`} decoding="async" />
                  <div className="web-card-body">
                    <div>
                      <span>{site.type}</span>
                      <h3>{site.title}</h3>
                    </div>
                    <Globe2 size={20} strokeWidth={1.7} />
                  </div>
                </a>
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
          </>
        )}
      </main>

      <footer className="footer">
        <span>Ian Miguel Aceves Mejía Bringas</span>
        <span>Ciudad de México</span>
      </footer>
    </div>
  )
}

export default App
