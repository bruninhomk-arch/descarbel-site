"use client";

import Image from "next/image";
import {useEffect,useRef,useState} from "react";
import {IconArrowLeft,IconArrowRight,IconBuilding,IconCalendar,IconCheck,IconChevronRight,IconHeart,IconMaximize,IconPackage,IconPlug,IconShoppingCart,IconUsers} from "@tabler/icons-react";
import styles from "./demonstracao.module.css";

const slides=[
  {src:"/screenshots/dashboard-modulos.png",tag:"MULTIEMPRESAS E MÓDULOS",title:"Todas as empresas em uma única visão",description:"Alterne entre empresas, acompanhe indicadores e acesse somente os módulos ativados para cada operação."},
  {src:"/screenshots/financeiro.png",tag:"GESTÃO FINANCEIRA",title:"Financeiro completo e visual",description:"Fluxo de caixa, contas a pagar e receber, bancos, cobranças e relatórios reunidos em um painel claro."},
  {src:"/screenshots/cadastro-produto.png",tag:"PRODUTOS E ESTOQUE",title:"Produto, preço e estoque conectados",description:"Cadastre produtos, acompanhe vendas, custos, estoque mínimo e histórico em uma única tela."},
  {src:"/screenshots/follow-up.png",tag:"CRM E FOLLOW-UP",title:"Nenhum cliente fica para trás",description:"Organize contatos, identifique pendências e avance o relacionamento comercial com uma fila dinâmica."},
  {src:"/screenshots/integracoes.png",tag:"INTEGRAÇÕES",title:"Conecte a Loggxy ao seu ecossistema",description:"APIs, webhooks, marketplace, PedidoOK, logística e outros conectores organizados em uma central."},
];

const categories=[
  {id:"gestao",label:"Gestão e controle",icon:IconBuilding,intro:"Estrutura para controlar uma ou várias empresas sem misturar operações, dados e permissões.",items:[
    ["Multiempresas","Gerencie diferentes empresas e unidades em um só ambiente, com visão individual ou centralizada."],
    ["Financeiro","Fluxo de caixa, contas a pagar e receber, bancos, cobranças e relatórios gerenciais."],
    ["Controle de estoque","Entradas, saídas, estoque mínimo, custos, movimentações e histórico de produtos."],
    ["Controle da qualidade","Organize processos, padrões, registros e acompanhamento da qualidade da operação."],
  ]},
  {id:"clientes",label:"Clientes e vendas",icon:IconUsers,intro:"Recursos para vender melhor, manter o relacionamento ativo e acompanhar cada oportunidade.",items:[
    ["CRM de clientes","Centralize cadastros, histórico, oportunidades e informações importantes de cada cliente."],
    ["Follow-up dinâmico","Crie uma rotina comercial clara e acompanhe contatos vencidos ou pendentes."],
    ["Vendas e pedidos","Organize orçamentos, pedidos, faturamento e a jornada comercial da sua empresa."],
    ["Marketplace direto da fábrica","Encontre e compre produtos de fornecedores e fabricantes dentro do ecossistema."],
  ]},
  {id:"servicos",label:"Beleza e serviços",icon:IconHeart,intro:"Uma operação organizada para negócios que trabalham com agenda, profissionais e atendimento recorrente.",items:[
    ["Área da beleza","Recursos pensados para salões de beleza, barbearias, clínicas e negócios de atendimento."],
    ["Agenda do profissional","Controle horários, disponibilidade, serviços e compromissos de cada profissional."],
    ["Cadastro de serviços","Organize duração, valores, profissionais responsáveis e histórico dos atendimentos."],
    ["Relacionamento com clientes","Use CRM e follow-up para estimular retorno, fidelização e novos agendamentos."],
  ]},
  {id:"operacao",label:"Logística e integrações",icon:IconPlug,intro:"Conecte sistemas e mantenha produtos, pedidos e documentos acompanhando o ritmo da operação.",items:[
    ["Logística","Acompanhe separação, expedição, entregas e movimentações do início ao fim."],
    ["Integração com outros sistemas","Conecte APIs, webhooks, aplicativos e plataformas que sua empresa já utiliza."],
    ["Documentos fiscais","Centralize recursos de NF-e, CT-e e MDF-e de acordo com a necessidade da operação."],
    ["Compras e fornecedores","Organize pedidos de compra, fornecedores, recebimentos e reposição de produtos."],
  ]},
];

export function InteractiveDemo(){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [category,setCategory]=useState("gestao");
  const touchStart=useRef<number|null>(null);
  const go=(next:number)=>setActive((next+slides.length)%slides.length);
  const selected=categories.find(item=>item.id===category)??categories[0];

  useEffect(()=>{if(paused)return;const timer=window.setInterval(()=>setActive(current=>(current+1)%slides.length),6000);return()=>window.clearInterval(timer)},[paused]);

  return <>
    <section className={styles.realScreens} aria-labelledby="telas-reais">
      <div className={styles.sectionHead}><span>IMAGENS REAIS DO APLICATIVO</span><h2 id="telas-reais">Veja a Loggxy funcionando na prática.</h2><p>Navegue pelas telas reais do sistema e conheça como cada área ajuda a organizar a operação.</p></div>
      <div className={styles.demoCarousel} tabIndex={0} onKeyDown={event=>{if(event.key==="ArrowLeft")go(active-1);if(event.key==="ArrowRight")go(active+1)}} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)} onTouchStart={event=>{touchStart.current=event.touches[0].clientX}} onTouchEnd={event=>{if(touchStart.current===null)return;const distance=event.changedTouches[0].clientX-touchStart.current;if(Math.abs(distance)>45)go(active+(distance<0?1:-1));touchStart.current=null}} aria-roledescription="carrossel" aria-label="Telas reais do aplicativo Loggxy">
        <div className={styles.demoStage}>
          {slides.map((slide,index)=><figure key={slide.src} className={index===active?styles.demoSlideActive:styles.demoSlide} aria-hidden={index!==active}><Image src={slide.src} alt={`Tela real do Loggxy: ${slide.title}`} fill sizes="(max-width: 900px) 95vw, 840px" quality={95} priority={index===0}/></figure>)}
          <a className={styles.expand} href={slides[active].src} target="_blank" rel="noreferrer" aria-label={`Ampliar tela: ${slides[active].title}`}><IconMaximize/></a>
          <button className={`${styles.slideArrow} ${styles.slidePrev}`} type="button" onClick={()=>go(active-1)} aria-label="Tela anterior"><IconArrowLeft/></button>
          <button className={`${styles.slideArrow} ${styles.slideNext}`} type="button" onClick={()=>go(active+1)} aria-label="Próxima tela"><IconArrowRight/></button>
        </div>
        <div className={styles.demoCaption}><div><span>{slides[active].tag}</span><h3>{slides[active].title}</h3><p>{slides[active].description}</p></div><b>{String(active+1).padStart(2,"0")} <i>/</i> {String(slides.length).padStart(2,"0")}</b></div>
        <div className={styles.slideTabs}>{slides.map((slide,index)=><button type="button" key={slide.src} className={index===active?styles.slideTabActive:""} onClick={()=>go(index)} aria-current={index===active?"true":undefined}><i/><span>{slide.tag}</span></button>)}</div>
      </div>
    </section>

    <section id="recursos" className={styles.moduleExplorer} aria-labelledby="modulos-categorias">
      <div className={styles.sectionHead}><span>SISTEMA MODULAR</span><h2 id="modulos-categorias">Adicione as funções que sua empresa precisa.</h2><p>Comece com os módulos essenciais e amplie a plataforma conforme sua operação evolui. Tudo organizado por categoria.</p></div>
      <div className={styles.categoryTabs} role="tablist" aria-label="Categorias de módulos">{categories.map(item=>{const Icon=item.icon;return <button type="button" role="tab" aria-selected={category===item.id} className={category===item.id?styles.categoryActive:""} onClick={()=>setCategory(item.id)} key={item.id}><Icon/><span>{item.label}</span></button>})}</div>
      <div className={styles.categoryPanel} role="tabpanel">
        <div className={styles.categoryIntro}><span>ÁREA SELECIONADA</span><h3>{selected.label}</h3><p>{selected.intro}</p><div className={styles.categoryOrnament}>{category==="servicos"?<IconCalendar/>:category==="clientes"?<IconShoppingCart/>:category==="operacao"?<IconPlug/>:<IconPackage/>}</div></div>
        <div className={styles.categoryItems}>{selected.items.map(([title,description],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{title}</h4><p>{description}</p></div><IconChevronRight/></article>)}</div>
      </div>
      <div className={styles.modularNote}><IconCheck/><p><b>Você escolhe a composição.</b> Os módulos podem ser adicionados de acordo com o segmento, o tamanho e a necessidade de cada empresa.</p><a href="#teste">Montar meu sistema <IconChevronRight/></a></div>
    </section>
  </>
}
