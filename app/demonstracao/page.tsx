import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {IconArrowRight,IconBrandWhatsapp,IconBuildingStore,IconChartBar,IconCheck,IconCloud,IconHeadset,IconPackage,IconReceipt,IconShieldCheck,IconSparkles,IconUsers} from "@tabler/icons-react";
import {DemoForm} from "./DemoForm";
import styles from "./demonstracao.module.css";

const title="Loggxy ERP | Teste grátis por 15 dias";
const description="Simplifique vendas, financeiro, estoque e gestão em uma única plataforma. Teste o Loggxy ERP grátis por 15 dias. Planos a partir de R$ 49,90.";

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

const benefits=[
  [IconChartBar,"Decisões mais claras","Acompanhe vendas, caixa e indicadores em painéis fáceis de entender."],
  [IconPackage,"Estoque organizado","Controle produtos, movimentações, compras e pedidos sem perder informação."],
  [IconReceipt,"Financeiro em dia","Centralize contas, recebimentos e o fluxo financeiro da sua empresa."],
  [IconUsers,"Clientes mais próximos","Organize contatos, oportunidades e atendimentos em um só lugar."],
  [IconCloud,"Acesso conectado","Trabalhe com sua operação integrada e tenha as informações sempre à mão."],
  [IconShieldCheck,"Controle e segurança","Defina acessos e mantenha os dados da empresa protegidos."],
];

const modules=["Vendas","Pedidos","Financeiro","Estoque","Compras","Faturamento","CRM","NF-e","CT-e","MDF-e","Logística","Relatórios"];

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
        <div className={styles.eyebrow}><IconSparkles size={15}/> 15 dias para experimentar grátis</div>
        <h1>Gestão simples.<br/><em>Empresa no controle.</em></h1>
        <p>Vendas, financeiro, estoque, clientes e operação conectados em uma plataforma que acompanha o crescimento do seu negócio.</p>
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
    <p>UMA PLATAFORMA PARA <b>VENDER</b><i/> <b>ORGANIZAR</b><i/> <b>CONTROLAR</b><i/> <b>CRESCER</b></p>
  </section>

  <section id="recursos" className={styles.section}>
    <div className={styles.sectionHead}><span>MENOS PLANILHAS. MAIS CONTROLE.</span><h2>Tudo o que sua empresa precisa para avançar.</h2><p>Informação organizada para você gastar menos tempo procurando dados e mais tempo fazendo o negócio crescer.</p></div>
    <div className={styles.benefitGrid}>{benefits.map(([Icon,label,text])=><article key={label as string}><div><Icon/></div><h3>{label as string}</h3><p>{text as string}</p></article>)}</div>
  </section>

  <section className={styles.platform}>
    <div className={styles.platformInner}>
      <div className={styles.platformCopy}><span>UM SISTEMA, VÁRIAS POSSIBILIDADES</span><h2>Comece pelo essencial.<br/>Evolua no seu ritmo.</h2><p>A Loggxy reúne os principais recursos de gestão em módulos que trabalham juntos. Você ganha visão da operação sem complicar a rotina.</p><div className={styles.moduleList}>{modules.map(item=><span key={item}><IconCheck/>{item}</span>)}</div><a href="#teste">Quero ver funcionando <IconArrowRight/></a></div>
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
