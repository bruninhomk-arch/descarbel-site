import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {IconArrowRight,IconBrandWhatsapp,IconBuildingStore,IconChartBar,IconCheck,IconShieldCheck,IconSparkles} from "@tabler/icons-react";
import {DemoForm} from "./DemoForm";
import {InteractiveDemo} from "./InteractiveDemo";
import styles from "./demonstracao.module.css";

const title="Loggxy ERP | Teste grátis por 15 dias";
const description="ERP multiempresas e modular para financeiro, estoque, CRM, logística, qualidade, beleza, agenda e integrações. Teste o Loggxy grátis por 15 dias.";

export const metadata:Metadata={
  title,
  description,
  alternates:{canonical:"/demonstracao"},
  openGraph:{
    type:"website",locale:"pt_BR",url:"/demonstracao",siteName:"Loggxy ERP",title:"Gestão simples. Empresa no controle.",description:"Teste o Loggxy ERP grátis por 15 dias. Planos a partir de R$ 49,90.",
    images:[{url:"/social/loggxy-demonstracao.png",width:1200,height:630,alt:"Loggxy ERP — teste grátis por 15 dias"}]
  },
  twitter:{card:"summary_large_image",title:"Loggxy ERP — teste grátis por 15 dias",description:"Gestão simples. Empresa no controle. Planos a partir de R$ 49,90.",images:["/social/loggxy-demonstracao.png"]}
};

export default function DemonstracaoPage(){return <main className={styles.page}>
  <header className={styles.header}>
    <div className={styles.nav}>
      <Link href="/" className={styles.logo} aria-label="Loggxy ERP - página inicial"><Image src="/brand/loggxy-erp.png" width={46} height={46} alt="Loggxy ERP" priority/><span>LOGGXY <b>ERP</b></span></Link>
      <div className={styles.navContact}><span>Fale com um especialista</span><a href="https://wa.me/5511965970699" target="_blank" rel="noreferrer"><IconBrandWhatsapp size={19}/><span>(11) 96597-0699</span></a></div>
    </div>
  </header>

  <section className={styles.hero}>
    <div className={styles.heroGlow}/>
    <div className={styles.heroInner}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><IconSparkles size={15}/> ERP multiempresas e modular</div>
        <h1>Um sistema.<br/><em>Do seu jeito.</em></h1>
        <p>Gerencie várias empresas e adicione somente as funções que sua operação precisa — financeiro, estoque, CRM, logística, qualidade, agenda e muito mais.</p>
        <div className={styles.price}><span>Planos de gerenciamento a partir de</span><strong><small>R$</small> 49,90</strong><i>/mês</i></div>
        <div className={styles.heroActions}><a href="#teste" className={styles.primary}>Começar teste grátis <IconArrowRight size={19}/></a><a href="#recursos" className={styles.secondary}>Saiba mais</a></div>
        <div className={styles.trust}><span><IconCheck/> Sem compromisso</span><span><IconCheck/> Suporte para começar</span></div>
      </div>
      <div className={styles.productVisual}>
        <div className={styles.screenLabel}><span>●</span> VISÃO GERAL DA SUA EMPRESA</div>
        <div className={styles.screen}><Image src="/screenshots/dashboard-modulos.png" fill sizes="(max-width: 900px) 94vw, 54vw" alt="Dashboard do sistema Loggxy ERP com indicadores e módulos" priority/></div>
        <div className={`${styles.floatCard} ${styles.floatTop}`}><IconChartBar/><span><b>Indicadores em tempo real</b>Decida com mais clareza</span></div>
        <div className={`${styles.floatCard} ${styles.floatBottom}`}><IconShieldCheck/><span><b>Dados protegidos</b>Mais segurança na operação</span></div>
      </div>
    </div>
  </section>

  <section className={styles.proof}>
    <p><b>MULTIEMPRESAS</b><i/> <b>SISTEMA MODULAR</b><i/> <b>INTEGRAÇÕES</b><i/> <b>GESTÃO COMPLETA</b></p>
  </section>

  <InteractiveDemo/>

  <section className={styles.platform}>
    <div className={styles.platformInner}>
      <div className={styles.platformCopy}><span>MULTIEMPRESAS DE VERDADE</span><h2>Várias operações.<br/>Uma gestão central.</h2><p>Controle empresas, unidades e diferentes áreas em um único ambiente. Cada operação mantém seus dados organizados, enquanto você ganha uma visão mais ampla para decidir.</p><div className={styles.multiList}><span><IconCheck/><b>Ambientes organizados</b> por empresa ou unidade</span><span><IconCheck/><b>Usuários e permissões</b> conforme cada função</span><span><IconCheck/><b>Módulos sob medida</b> para cada tipo de operação</span><span><IconCheck/><b>Indicadores centralizados</b> para uma gestão mais clara</span></div><a href="#teste">Quero ver funcionando <IconArrowRight/></a></div>
      <div className={styles.platformCard}><div className={styles.cardTop}><IconBuildingStore/><span><b>Sua empresa em uma única visão</b>Operação conectada de ponta a ponta</span></div><Image src="/screenshots/financeiro.png" width={1024} height={640} alt="Tela do módulo financeiro Loggxy"/><div className={styles.cardStats}><span><b>+ controle</b>do dia a dia</span><span><b>- retrabalho</b>na operação</span><span><b>mais clareza</b>para decidir</span></div></div>
    </div>
  </section>

  <section className={styles.steps}>
    <div className={styles.sectionHead}><span>COMEÇAR É SIMPLES</span><h2>Seu teste em três passos.</h2></div>
    <div className={styles.stepGrid}><article><b>01</b><h3>Preencha o formulário</h3><p>Conte quem é você e qual área deseja organizar.</p></article><article><b>02</b><h3>Fale com a Loggxy</h3><p>Nossa equipe entende sua rotina e ajuda na configuração.</p></article><article><b>03</b><h3>Teste por 15 dias</h3><p>Conheça os recursos na prática, sem compromisso.</p></article></div>
  </section>

  <section id="teste" className={styles.ctaSection}>
    <div className={styles.ctaCopy}><span>LOGGXY ERP</span><h2>Mais controle começa com o próximo passo.</h2><p>Experimente uma gestão conectada e descubra como simplificar a rotina da sua empresa.</p><ul><li><IconCheck/> Teste grátis por 15 dias</li><li><IconCheck/> Planos a partir de R$ 49,90</li><li><IconCheck/> Atendimento direto com a equipe</li></ul><div className={styles.direct}><IconBrandWhatsapp/><span><small>Prefere falar agora?</small><a href="https://wa.me/5511965970699" target="_blank" rel="noreferrer">(11) 96597-0699</a></span></div></div>
    <DemoForm/>
  </section>

  <footer className={styles.footer}><div><Image src="/brand/loggxy-erp.png" width={40} height={40} alt="Loggxy ERP"/><span><b>Loggxy Gerenciamento e Sistemas Ltda.</b><small>CNPJ: 63.700.987/0001-77</small></span></div><div><a href="mailto:contato@loggxy.com.br">contato@loggxy.com.br</a><a href="https://wa.me/5511965970699" target="_blank" rel="noreferrer">WhatsApp: (11) 96597-0699</a></div><p>© {new Date().getFullYear()} Loggxy. Todos os direitos reservados.</p></footer>
</main>}
