'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Terminal, Code2, Database, Cloud, Smartphone, Server } from 'lucide-react';

const projects = [
  { title: 'World Cup Predictions', type: 'Cloud web platform', image: '/projects/world-cup.png', description: 'Pronósticos, salas privadas, rankings y resultados en tiempo real. Proyecto ganador por funcionalidad, interfaz y cumplimiento técnico.', stack: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS'], href: 'https://mundial.tdproy.com/' },
  { title: 'Sistema Académico', type: 'Full-stack + AI', image: '/projects/sistema-academico.jpeg', description: 'Gestión de usuarios, cursos y rendimiento con generación de horarios de estudio personalizados.', stack: ['Spring Boot', 'Python', 'IA', 'REST'] },
  { title: 'Gestión de Bodega', type: 'Mobile application', image: '/projects/bodega.png', description: 'Control de productos, inventario y ventas para pequeños negocios desde una experiencia móvil clara.', stack: ['Kotlin', 'SQL', 'Mobile'] },
  { title: 'Classcraft', type: 'Educational platform', image: '/projects/classcraft.jpeg', description: 'Experiencia educativa gamificada para mejorar la motivación y participación de estudiantes.', stack: ['PHP', 'JavaScript', 'MySQL'] }
];

const skills = [
  { icon: Code2, label: 'Frontend', value: 'Next.js · JavaScript · HTML · CSS' },
  { icon: Server, label: 'Backend', value: 'Node.js · NestJS · Spring Boot' },
  { icon: Database, label: 'Data', value: 'PostgreSQL · MySQL · NoSQL' },
  { icon: Cloud, label: 'Cloud', value: 'AWS · Vercel · APIs REST' },
  { icon: Smartphone, label: 'Mobile', value: 'Kotlin · Android' }
];

const technologies = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
];

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && element.classList.add('is-visible'), { threshold: .12 });
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menu, setMenu] = useState(false);
  const [pointer, setPointer] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1150);
    const move = (event) => setPointer({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', move);
    return () => { clearTimeout(timer); window.removeEventListener('pointermove', move); };
  }, []);

  return (
    <>
      <div className={`loader ${loaded ? 'loader--done' : ''}`}><div className="loader__terminal"><span>$</span> initializing portfolio<span className="blink">_</span></div><div className="loader__bar"><i /></div></div>
      <div className="cursor-glow" style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }} />
      <header className="header">
        <a className="logo" href="#top"><span>&lt;</span>AR<span>/&gt;</span></a>
        <nav className={menu ? 'nav nav--open' : 'nav'}>
          <a onClick={() => setMenu(false)} href="#work">Proyectos <sup>04</sup></a>
          <a onClick={() => setMenu(false)} href="#stack">Stack <sup>05</sup></a>
          <a onClick={() => setMenu(false)} href="#experience">Experiencia</a>
          <a onClick={() => setMenu(false)} href="#contact">Contacto</a>
        </nav>
        <a className="talk" href="mailto:ramosimananderson@gmail.com">Hablemos <ArrowUpRight size={15} /></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Abrir menú">{menu ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="status"><i /> disponible para nuevos proyectos</div>
          <div className="hero__name"><span>ANDERSON</span><strong>RAMOS</strong></div>
          <div className="hero__copy">
            <p className="mono">// Software Developer</p>
            <h1>Diseño, código y soluciones que funcionan.</h1>
            <p>Estudiante de sexto ciclo de Diseño y Desarrollo de Software en TECSUP. Construyo experiencias web, móviles y servicios backend con enfoque en claridad y utilidad.</p>
            <a className="button" href="#work">Explorar proyectos <ArrowUpRight size={17} /></a>
          </div>
          <div className="portrait">
            <div className="portrait__halo" />
            <Image src="/anderson-cutout.png" alt="Anderson Ramos" width={1536} height={1024} priority />
            <div className="portrait__scan" />
            <span className="portrait__tag">developer.profile()</span>
          </div>
          <div className="socials"><a href="https://github.com/Anderson-Ramos-Iman" target="_blank"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/anderson-ramos-iman/" target="_blank"><Linkedin size={17} /> LinkedIn</a></div>
          <div className="code-card"><div className="code-card__top"><span><i /><i /><i /></span><b>portfolio.config.ts</b></div><pre><span>const</span> developer = {'{'}{`\n`}  name: <b>&apos;Anderson&apos;</b>,{`\n`}  focus: <b>&apos;full-stack&apos;</b>,{`\n`}  status: <b>&apos;building&apos;</b>{`\n`}{'}'};</pre></div>
        </section>

        <section className="tech-carousel" aria-label="Tecnologías que utilizo">
          <div className="tech-carousel__track">
            {[...technologies, ...technologies].map((technology, index) => (
              <div className="tech-carousel__item" key={`${technology.name}-${index}`} aria-hidden={index >= technologies.length}>
                <span className="tech-carousel__logo"><img src={technology.icon} alt="" /></span>
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work section-shell">
          <Reveal className="section-title"><p className="mono">01 / selected.work</p><h2>Proyectos que convierten ideas en producto.</h2><span>Una selección de experiencias web, móviles y académicas.</span></Reveal>
          <div className="project-grid">{projects.map((project, index) => <Reveal className={`project ${index === 0 ? 'project--wide' : ''}`} key={project.title}><div className="project__visual"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" /><span>{String(index + 1).padStart(2, '0')}</span></div><div className="project__content"><p className="mono">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div>{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.href && <a href={project.href} target="_blank">Ver proyecto <ArrowUpRight size={16} /></a>}</div></Reveal>)}</div>
        </section>

        <section id="stack" className="stack section-shell">
          <Reveal className="section-title"><p className="mono">02 / technical.stack</p><h2>Herramientas para construir de punta a punta.</h2></Reveal>
          <div className="stack-list">{skills.map(({ icon: Icon, label, value }, i) => <Reveal className="stack-row" key={label}><span>0{i + 1}</span><Icon /><h3>{label}</h3><p>{value}</p><ArrowUpRight /></Reveal>)}</div>
        </section>

        <section id="experience" className="experience section-shell">
          <Reveal className="section-title"><p className="mono">03 / experience.log</p><h2>Aprendizaje convertido en experiencia.</h2></Reveal>
          <div className="terminal"><div className="terminal__top"><span><i /><i /><i /></span><b>anderson@portfolio: ~/experience</b></div><div className="terminal__body"><p><em>2026 → now</em><strong>Practicante · Grafic Store</strong><span>Soluciones tecnológicas y atención de requerimientos en un entorno laboral real.</span></p><p><em>2025</em><strong>Voluntario · IEEE Computer Society</strong><span>Participación en comunidad, aprendizaje y actividades relacionadas con tecnología.</span></p><p><em>2024 → now</em><strong>Diseño y Desarrollo de Software · TECSUP</strong><span>Formación en web, móvil, backend, datos, nube y desarrollo de proyectos.</span></p><code>$ next_challenge --ready<span className="blink">_</span></code></div></div>
        </section>

        <section id="contact" className="contact section-shell">
          <Reveal><p className="mono">04 / contact.me</p><h2>¿Tienes una idea?<br /><span>Construyámosla.</span></h2><p>Estoy abierto a oportunidades junior, prácticas y proyectos colaborativos.</p><div className="contact__actions"><a className="button button--light" href="mailto:ramosimananderson@gmail.com"><Mail size={18} /> Escribirme</a><a href="https://www.linkedin.com/in/anderson-ramos-iman/" target="_blank">LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/Anderson-Ramos-Iman" target="_blank">GitHub <ArrowUpRight size={15} /></a></div></Reveal>
        </section>
      </main>
      <footer><span>© 2026 Anderson Ramos</span><span>Diseñado y desarrollado con Next.js</span><span>Lima, Perú</span></footer>
    </>
  );
}
