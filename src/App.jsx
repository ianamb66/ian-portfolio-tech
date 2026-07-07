import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  FileText,
  Globe2,
  Layers3,
  Mail,
  Moon,
  Play,
  Sun,
  Workflow,
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  ['Trabajo', '/#trabajo'],
  ['Webs', '/#webs'],
  ['Sistema', '/#sistema'],
]

const projects = [
  {
    slug: 'cemex-anahuacalli',
    code: '01',
    title: 'CEMEX + Museo Anahuacalli',
    type: 'Estrategia cultural',
    copy: 'Una idea cultural convertida en ruta ejecutable.',
    tags: ['Cultura', 'Planeación', 'Documentación'],
    visual: 'CEMEX / ANAHUACALLI',
    cover: '/cases/cemex-anahuacalli/01-anahuacalli-el-muro-vivo-portada.jpg',
    xyz: {
      x: 'Aterrizar una oportunidad cultural sin perder ambición.',
      y: 'Una ruta clara para presentar, decidir y ejecutar.',
      z: 'Necesidades, presupuesto y narrativa en una propuesta.',
    },
    images: [
      {
        title: 'El Muro Vivo',
        label: 'Propuesta',
        src: '/cases/cemex-anahuacalli/01-anahuacalli-el-muro-vivo-portada.jpg',
        alt: 'Portada de la propuesta El Muro Vivo para Museo Anahuacalli y CEMEX',
      },
      {
        title: 'Escuela de Pintura al Fresco',
        label: 'Concepto',
        src: '/cases/cemex-anahuacalli/03-anahuacalli-oferta-academica-fresco.jpg',
        alt: 'Lámina de oferta académica para la Escuela de Pintura al Fresco Anahuacalli',
      },
      {
        title: 'Socio fundador CEMEX',
        label: 'Alianza',
        src: '/cases/cemex-anahuacalli/04-anahuacalli-socio-fundador-cemex.jpg',
        alt: 'Lámina de socio fundador CEMEX para el proyecto cultural Anahuacalli',
      },
    ],
  },
  {
    slug: 'reckitt-marcas-consumo',
    code: '02',
    title: 'Reckitt + marcas de consumo',
    type: 'Campañas y responsabilidad corporativa',
    copy: 'Campañas sensibles para marcas y salud pública.',
    tags: ['Campañas', 'RCA', 'Cliente'],
    visual: 'RECKITT / HEALTH',
    cover: '/cases/reckitt-marcas-consumo/01-cal-c-tose-chocomilk-presentacion.jpg',
    xyz: {
      x: 'Hablar de salud, consumo y reputación con cuidado.',
      y: 'Mensajes más claros para audiencias distintas.',
      z: 'Campaña, piezas y entregables coordinados.',
    },
    images: [
      {
        title: 'Cal-C-Tose + Choco Milk',
        label: 'Marca',
        src: '/cases/reckitt-marcas-consumo/01-cal-c-tose-chocomilk-presentacion.jpg',
        alt: 'Presentación de campaña para Cal-C-Tose y Choco Milk',
      },
      {
        title: 'Resistencia antimicrobiana',
        label: 'Salud pública',
        src: '/cases/reckitt-marcas-consumo/01-graneodin-amr-senado-montaje-salon.jpg',
        alt: 'Montaje de evento sobre resistencia antimicrobiana en el Senado',
      },
      {
        title: 'Activación institucional',
        label: 'Embajada UK',
        src: '/cases/reckitt-marcas-consumo/03-graneodin-amr-embajada-uk-terraza.jpg',
        alt: 'Activación institucional Graneodin en terraza de la Embajada del Reino Unido',
      },
    ],
  },
  {
    slug: 'activaciones-eventos',
    code: '03',
    title: 'Activaciones y eventos',
    type: 'Producción de campo',
    copy: 'Del concepto a la operación en campo.',
    tags: ['Producción', 'PM', 'Proveedor'],
    visual: 'FIELD / OPS',
    cover: '/cases/activaciones-eventos/02-omni-veracruz-stand-expo.jpg',
    xyz: {
      x: 'Convertir idea, proveedor y tiempos en algo montable.',
      y: 'Materiales listos y operación más controlada.',
      z: 'Licitación, coordinación y ajustes en campo.',
    },
    images: [
      {
        title: 'Stand OMNI Veracruz',
        label: 'Expo',
        src: '/cases/activaciones-eventos/02-omni-veracruz-stand-expo.jpg',
        alt: 'Stand de OMNI Veracruz en expo',
      },
      {
        title: 'Atención en campo',
        label: 'Operación',
        src: '/cases/activaciones-eventos/01-omni-veracruz-atencion-stand.jpg',
        alt: 'Atención y operación en stand de OMNI Veracruz',
      },
    ],
  },
  {
    slug: 'ia-procesos-internos',
    code: '04',
    title: 'IA para procesos internos',
    type: 'Operación aumentada',
    copy: 'Flujos de IA para acelerar trabajo real.',
    tags: ['IA', 'Automatización', 'Sistemas'],
    visual: 'AI / PROCESS',
    cover: '/cases/ia-procesos-internos/stand-builder-ai.png',
    xyz: {
      x: 'Demasiada información dispersa y tareas repetidas.',
      y: 'Documentar, analizar y prototipar más rápido.',
      z: 'IA, dashboards y procesos mejor conectados.',
    },
    images: [
      {
        title: 'Vibecoding AI para stands',
        label: 'Herramienta',
        src: '/cases/ia-procesos-internos/stand-builder-ai.png',
        alt: 'Interfaz de herramienta AI para crear propuestas de stands',
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
    copy: 'Narrativa pública para temas complejos.',
    tags: ['Gobierno', 'Narrativa', 'Contenido'],
    visual: 'PUBLIC / NARRATIVE',
    cover: '/cases/comunicacion-politica/01-senado-yeidckol-retrato-morena.jpg',
    xyz: {
      x: 'Convertir temas legislativos en mensajes entendibles.',
      y: 'Una narrativa más ordenada para piezas públicas.',
      z: 'Contexto, redacción y formatos de difusión.',
    },
    images: [
      {
        title: 'Narrativa pública',
        label: 'Senado',
        src: '/cases/comunicacion-politica/01-senado-yeidckol-retrato-morena.jpg',
        alt: 'Imagen de comunicación política vinculada con Senado y senadora Yeidckol',
      },
      {
        title: 'Contenido legislativo',
        label: 'Difusión',
        src: '/cases/comunicacion-politica/02-senado-yeidckol-tmec-pt.jpg',
        alt: 'Pieza de contenido legislativo sobre T-MEC y Partido del Trabajo',
      },
    ],
  },
  {
    slug: 'organizaciones-sociales',
    code: '06',
    title: 'Organizaciones sociales',
    type: 'Difusión institucional',
    copy: 'Difusión visual para causas y organizaciones.',
    tags: ['Impacto', 'Visual', 'Difusión'],
    visual: 'SOCIAL / IMPACT',
    cover: '/cases/organizaciones-sociales/concomercio-centro-historico-mundial-2026-7649091564077174037.jpg',
    xyz: {
      x: 'Explicar causas sin volverlas pesadas.',
      y: 'Materiales más útiles para convocar y presentar.',
      z: 'Comunicados, visuales y piezas audiovisuales.',
    },
    images: [
      {
        title: 'ConComercio Pequeño',
        label: 'Video reciente',
        src: '/cases/organizaciones-sociales/concomercio-centro-historico-mundial-2026-7649091564077174037.jpg',
        alt: 'Thumbnail de video reciente de ConComercio Pequeño sobre Centro Histórico y Mundial 2026',
      },
      {
        title: 'Comunicados institucionales',
        label: 'ConComercio',
        src: '/cases/organizaciones-sociales/02-comunicado-reordenamiento-via-publica.png',
        alt: 'Comunicado de ConComercio Pequeño sobre reordenamiento de vía pública',
      },
      {
        title: 'Foro latinoamericano',
        label: 'RAUDER',
        src: '/cases/organizaciones-sociales/02-rauder-foro-panama-panel.jpg',
        alt: 'Panel del Foro Latinoamericano sobre nicotina y reducción de riesgo',
      },
      {
        title: 'Contexto vapeo',
        label: 'Investigación visual',
        src: '/cases/organizaciones-sociales/05-mundo-vapeo-silueta-dispositivo-wikimedia.jpg',
        alt: 'Imagen contextual sobre vapeo para investigación visual',
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
    title: 'Museo del Gato',
    type: 'Experiencia cultural',
    url: 'https://museo-del-gato-web.vercel.app',
    image: '/previews/museo-gato.png',
  },
  {
    title: 'FisioAssess INCAN',
    type: 'Calculadora para fisioterapeutas',
    url: 'https://fisioassess-vex1.vercel.app',
    image: '/previews/fisioassess-incan-fisioterapia.png',
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

function ResonanceField() {
  const lines = [
    'M -120 180 C 160 80 330 320 560 210 S 980 80 1230 230 S 1580 420 1860 250',
    'M -140 330 C 150 470 340 110 620 300 S 1030 520 1320 310 S 1620 90 1880 350',
    'M -120 510 C 210 360 360 640 650 480 S 1040 250 1320 500 S 1640 730 1880 510',
    'M -100 700 C 190 860 400 590 690 740 S 1120 930 1390 720 S 1660 520 1900 760',
    'M -120 910 C 160 760 420 1060 710 890 S 1120 690 1410 930 S 1660 1160 1900 920',
  ]

  return (
    <div className="resonance-field" aria-hidden="true">
      <svg viewBox="0 0 1760 1080" preserveAspectRatio="none" focusable="false">
        {lines.map((path, index) => (
          <path className={`resonance-line resonance-line-${index + 1}`} d={path} key={path} />
        ))}
      </svg>
    </div>
  )
}

function SoundDivider({ words }) {
  return (
    <div className="sound-divider reveal" aria-hidden="true">
      <div className="sound-line">
        {words.map((word, index) => (
          <span className={`sound-word sound-word-${index + 1}`} key={word}>
            {word}
          </span>
        ))}
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
    <div className={`case-media-card ${item.src ? 'case-media-image' : `case-media-${item.variant}`} reveal`}>
      <div className="case-media-top">
        <span>{item.label}</span>
        <small>Imagen {index + 1}</small>
      </div>
      <strong>{item.title}</strong>
      {item.src ? (
        <figure className="case-photo">
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
        </figure>
      ) : (
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
      )}
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
            {project.cover ? <img src={project.cover} alt="" loading="eager" decoding="async" /> : null}
            <span>{project.visual}</span>
          </div>
        </div>

        <div className="case-overview reveal">
          <span>{project.type}</span>
          <p>{project.copy}</p>
        </div>

        <div className="case-media-grid">
          {project.images.map((image, index) => (
            <CaseVisual item={image} index={index} key={image.title} />
          ))}
        </div>

        <div className="xyz-grid">
          <article className="xyz-card reveal">
            <span>Reto</span>
            <h2>Reto</h2>
            <p>{project.xyz.x}</p>
          </article>
          <article className="xyz-card reveal">
            <span>Resultado</span>
            <h2>Resultado</h2>
            <p>{project.xyz.y}</p>
          </article>
          <article className="xyz-card reveal">
            <span>Resolución</span>
            <h2>Resolución</h2>
            <p>{project.xyz.z}</p>
          </article>
        </div>

        <div className="case-next reveal">
          <p>Entender, producir y entregar claro.</p>
          <a className="primary-action" href="/#contacto">
            Contacto
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
    const description =
      activeCase?.copy ||
      'Portfolio profesional de Ian Aceves: ideas, procesos creativos, campañas, producción e inteligencia artificial aplicada.'

    document.title = activeCase
      ? `${activeCase.title} | Caso de Ian Aceves`
      : 'Ian Aceves | Creatividad, proyectos e IA aplicada'

    let metaDescription = document.querySelector('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute('content', description)
  }, [activeCase])

  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = null

    const setPointerLight = (x, y) => {
      root.style.setProperty('--cursor-x', `${x}px`)
      root.style.setProperty('--cursor-y', `${y}px`)
    }

    const handlePointerMove = (event) => {
      if (reduceMotion || event.pointerType === 'touch') {
        return
      }

      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      frame = window.requestAnimationFrame(() => {
        setPointerLight(event.clientX, event.clientY)
      })
    }

    setPointerLight(window.innerWidth * 0.5, window.innerHeight * 0.32)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: reduceMotion ? 0 : 24,
            filter: reduceMotion ? 'blur(0px)' : 'blur(4px)',
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: reduceMotion ? 0.01 : 0.58,
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
        gsap.utils.toArray('.sound-divider').forEach((divider) => {
          gsap.fromTo(
            divider.querySelectorAll('.sound-word'),
            {
              yPercent: 34,
              scale: 0.96,
              autoAlpha: 0,
            },
            {
              yPercent: 0,
              scale: 1,
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
          gsap.to(divider.querySelectorAll('.sound-word'), {
            y: -8,
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
      <ResonanceField />
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
          <div className="hero-simple-grid">
            <div className="hero-portrait-wrap reveal">
              <div className="portrait-resonance" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <figure className="hero-portrait">
                <img src="/assets/img/ian-portrait-2026.jpg" alt="Retrato de Ian Aceves" loading="eager" decoding="async" />
              </figure>
            </div>
            <div className="hero-copy">
              <p className="hero-kicker reveal">Portfolio profesional 2026</p>
              <h1 className="reveal">Soy Ian y amo crear.</h1>
              <p className="hero-lede reveal">
                Desarrollo ideas, campañas y sistemas visuales hasta volverlos claros,
                presentables y ejecutables.
              </p>
              <p className="hero-lede hero-lede-secondary reveal">
                Me muevo entre creatividad, producción, project management e IA aplicada.
              </p>
              <div className="hero-actions reveal">
                <a className="primary-action" href="#trabajo">
                  Ver proyectos
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <SoundDivider words={['portfolio', 'estrategia', 'produccion']} />

        <section id="trabajo" className="section-block work-section">
          <div className="section-header">
            <div>
              <div className="section-kicker reveal">Trabajo seleccionado</div>
              <h2 className="section-title reveal">Casos que combinan estrategia, producción y ejecución.</h2>
            </div>
            <p className="section-note reveal">
              Una selección breve por tipo de reto.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className="project-card reveal" href={`/casos/${project.slug}`} key={project.code}>
                <div className="project-visual" aria-hidden="true">
                  {project.cover ? <img src={project.cover} alt="" loading="lazy" decoding="async" /> : null}
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

        <SoundDivider words={['ideas', 'interfaces', 'experiencias']} />

        <section id="webs" className="section-block web-section">
          <div className="section-header">
            <div>
              <div className="section-kicker reveal">Experiencias digitales</div>
              <h2 className="section-title reveal">Interfaces listas para verse, usarse y compartirse.</h2>
            </div>
            <p className="section-note reveal">
              Sitios y prototipos con una capa visual más fuerte que un documento plano.
            </p>
          </div>
          <div className="web-grid">
            {webBuilds.map((site) => (
              <article className="web-card reveal" key={site.url}>
                <a href={site.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${site.title}`}>
                  <img src={site.image} alt={`Preview del hero de ${site.title}`} loading="lazy" decoding="async" />
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
                Ordenar ideas, entregables y decisiones.
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
