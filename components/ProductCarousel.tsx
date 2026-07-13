"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconArrowLeft, IconArrowRight, IconMaximize } from "@tabler/icons-react";

const slides = [
  { src: "/screenshots/dashboard-modulos.png", title: "Dashboard e módulos", description: "Visão central da operação e acesso rápido a todo o ecossistema Loggxy." },
  { src: "/screenshots/cadastro-produto.png", title: "Cadastro de produtos", description: "Informações comerciais, estoque e indicadores reunidos em uma única tela." },
  { src: "/screenshots/financeiro.png", title: "Gestão financeira", description: "Fluxo de caixa, contas e resultados com leitura simples e objetiva." },
  { src: "/screenshots/follow-up.png", title: "Follow-up dinâmico", description: "Relacionamento com clientes e tarefas comerciais sempre em dia." },
  { src: "/screenshots/integracoes.png", title: "Central de integrações", description: "Conectores, APIs, webhooks e aplicativos organizados em um só ambiente." },
];

export function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const go = (index: number) => setActive((index + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return <div className="product-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) go(active + (distance < 0 ? 1 : -1)); touchStart.current = null; }} aria-roledescription="carrossel" aria-label="Telas do sistema Loggxy ERP">
    <div className="carousel-stage">
      {slides.map((slide, index) => <figure key={slide.src} className={index === active ? "active" : ""} aria-hidden={index !== active}>
        <Image src={slide.src} alt={`Tela Loggxy ERP: ${slide.title}`} fill sizes="(max-width: 980px) 100vw, 720px" quality={90} priority={index === 0}/>
      </figure>)}
      <div className="carousel-shade"/>
      <div className="carousel-caption"><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><h3>{slides[active].title}</h3><p>{slides[active].description}</p></div>
      <a className="carousel-expand" href={slides[active].src} target="_blank" aria-label={`Ampliar ${slides[active].title}`}><IconMaximize size={18}/></a>
      <button className="carousel-arrow prev" onClick={() => go(active - 1)} aria-label="Imagem anterior"><IconArrowLeft/></button>
      <button className="carousel-arrow next" onClick={() => go(active + 1)} aria-label="Próxima imagem"><IconArrowRight/></button>
    </div>
    <div className="carousel-controls">{slides.map((slide, index) => <button key={slide.src} className={index === active ? "active" : ""} onClick={() => go(index)} aria-label={`Mostrar ${slide.title}`} aria-current={index === active ? "true" : undefined}><i/><span>{slide.title}</span></button>)}</div>
  </div>;
}
