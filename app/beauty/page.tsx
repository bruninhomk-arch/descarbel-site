import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {IconArrowRight,IconBrandInstagram,IconBrandWhatsapp,IconCalendarEvent,IconCash,IconCheck,IconExternalLink,IconGift,IconHeart,IconPackage,IconShoppingBag,IconSparkles,IconUsers} from "@tabler/icons-react";
import {BeautyExperience} from "./BeautyExperience";
import {BeautyForm} from "./BeautyForm";
import styles from "./beauty.module.css";

const title="Loggxy Beauty | Gestão para salões, barbearias e clínicas";
const description="Controle agenda, comissões, estoque, clientes e compras direto da fábrica. Gestão completa para salões, barbearias, clínicas e profissionais da beleza.";

export const metadata:Metadata={title,description,alternates:{canonical:"/beauty"},openGraph:{type:"website",locale:"pt_BR",url:"/beauty",siteName:"Loggxy Beauty",title:"Controle a gestão do seu salão com Loggxy Beauty",description:"Agenda, comissões, estoque, clientes e compras direto da fábrica em um só aplicativo.",images:[{url:"/social/loggxy-beauty.png",width:1200,height:630,alt:"Loggxy Beauty — gestão completa para seu salão"}]},twitter:{card:"summary_large_image",title:"Loggxy Beauty",description:"A beleza do seu negócio também está na gestão.",images:["/social/loggxy-beauty.png"]}};

const features=[
  [IconCalendarEvent,"Agenda profissional","Organize horários, serviços e disponibilidade de cada profissional."],
  [IconCash,"Comissionamento","Calcule e acompanhe comissões de serviços e vendas com mais clareza."],
  [IconPackage,"Controle de estoque","Acompanhe entradas, consumo, estoque mínimo e produtos utilizados."],
  [IconUsers,"Clientes e relacionamento","Centralize histórico, preferências, retornos e oportunidades de contato."],
  [IconExternalLink,"Link para sua bio","Compartilhe agendamento no Instagram, WhatsApp, Google e onde quiser."],
  [IconShoppingBag,"Marketplace da fábrica","Compre produtos profissionais diretamente da fábrica pelo aplicativo."],
];

export default function BeautyPage(){return <main className={styles.page}>
  <header className={styles.header}><div><Link href="/beauty" className={styles.logo}><Image src="/brand/loggxy-beauty.png" width={50} height={50} alt="Loggxy Beauty" priority/><span>Loggxy <b>Beauty</b></span></Link><nav><a href="#recursos">Recursos</a><a href="#clientes">Aplicativo</a><a href="#contato">Contato</a></nav><a className={styles.headerCta} href="#contato">Quero conhecer <IconArrowRight/></a></div></header>

  <section className={styles.hero}>
    <div className={styles.heroBloom}/><div className={styles.heroInner}>
      <div className={styles.heroCopy}><div className={styles.eyebrow}><IconSparkles/> Gestão inteligente para beleza</div><h1>Seu talento cuida da beleza.<br/><em>A Loggxy cuida da gestão.</em></h1><p>Controle seu salão, barbearia ou clínica em um só lugar — agenda, profissionais, comissões, estoque, clientes e compras.</p><div className={styles.heroActions}><a href="#contato">Quero conhecer <IconArrowRight/></a><a href="#recursos">Ver recursos</a></div><div className={styles.heroTrust}><span><IconCheck/> Salões</span><span><IconCheck/> Barbearias</span><span><IconCheck/> Clínicas</span></div></div>
      <div className={styles.heroVisual}><div className={styles.logoHalo}><Image src="/brand/loggxy-beauty.png" width={400} height={400} alt="Logotipo Loggxy Beauty" priority/></div><div className={`${styles.float} ${styles.floatAgenda}`}><IconCalendarEvent/><span><b>Agenda organizada</b>Horários sob controle</span></div><div className={`${styles.float} ${styles.floatSales}`}><IconCash/><span><b>Comissões calculadas</b>Equipe mais transparente</span></div><div className={`${styles.float} ${styles.floatStock}`}><IconPackage/><span><b>Estoque inteligente</b>Sem perder produtos</span></div></div>
    </div>
  </section>

  <section className={styles.ribbon}><p><b>AGENDA</b><i/> <b>COMISSÕES</b><i/> <b>ESTOQUE</b><i/> <b>CLIENTES</b><i/> <b>MARKETPLACE</b></p></section>

  <section id="recursos" className={styles.section}><div className={styles.sectionHead}><span>TUDO O QUE SEU NEGÓCIO PRECISA</span><h2>Gestão completa, do agendamento à venda.</h2><p>Menos tarefas manuais e mais tempo para atender, criar experiências e fazer seu negócio crescer.</p></div><div className={styles.featureGrid}>{features.map(([Icon,name,text])=><article key={name as string}><div><Icon/></div><h3>{name as string}</h3><p>{text as string}</p></article>)}</div></section>

  <section className={styles.productSection}><div className={styles.sectionHead}><span>CONHEÇA POR DENTRO</span><h2>Uma rotina mais simples e organizada.</h2><p>Explore os principais recursos e veja como a Loggxy Beauty acompanha o dia a dia da sua equipe.</p></div><BeautyExperience/></section>

  <section className={styles.bioSection}><div className={styles.bioInner}><div className={styles.bioCopy}><span>SEU NEGÓCIO SEMPRE ABERTO</span><h2>Um link para colocar na bio e compartilhar no WhatsApp.</h2><p>Crie um endereço externo para seus clientes consultarem serviços, profissionais e horários disponíveis — sem precisar ligar ou esperar resposta.</p><ul><li><IconBrandInstagram/> Link na bio do Instagram</li><li><IconBrandWhatsapp/> Compartilhamento pelo WhatsApp</li><li><IconCalendarEvent/> Agendamento disponível 24 horas</li><li><IconUsers/> Novos clientes direto para sua agenda</li></ul><a href="#contato">Quero meu link personalizado <IconArrowRight/></a></div><div className={styles.bookingPhone}><div className={styles.phoneTop}><span>9:41</span><i/><b>•••</b></div><Image src="/brand/loggxy-beauty.png" width={70} height={70} alt="Loggxy Beauty"/><small>STUDIO BELLA</small><h3>Agende seu momento</h3><p>Escolha o serviço que deseja realizar.</p>{[["Corte e escova","60 min"],["Coloração","120 min"],["Manicure","45 min"]].map(([service,time])=><button key={service}><span><b>{service}</b><small>{time}</small></span><IconArrowRight/></button>)}<div className={styles.phoneBottom}><IconHeart/><span>Agendamento por Loggxy Beauty</span></div></div></div></section>

  <section className={styles.marketSection}><div className={styles.marketInner}><div className={styles.marketVisual}><div className={styles.bag}><IconShoppingBag/></div>{[["Produtos profissionais","Direto da fábrica"],["Condições exclusivas","Dentro do aplicativo"],["Reposição simples","Integrada ao estoque"]].map(([title,text])=><article key={title}><IconCheck/><span><b>{title}</b>{text}</span></article>)}</div><div className={styles.marketCopy}><span>MARKETPLACE LOGGXY BEAUTY</span><h2>Compre produtos diretamente da fábrica.</h2><p>Encontre produtos para seu negócio, faça pedidos pelo aplicativo e mantenha a reposição conectada ao controle de estoque.</p><div><span><IconCheck/> Compra dentro do aplicativo</span><span><IconCheck/> Produtos profissionais</span><span><IconCheck/> Mais praticidade na reposição</span></div><a href="#contato">Conhecer o marketplace <IconArrowRight/></a></div></div></section>

  <section id="clientes" className={styles.loyalty}><div className={styles.loyaltyInner}><div className={styles.loyaltyIcon}><IconGift/></div><div><span>BENEFÍCIO PARA QUEM VOLTA SEMPRE</span><h2>Clientes frequentes ganham acesso ao aplicativo.</h2><p>Transforme recorrência em relacionamento. Clientes com compras frequentes podem receber acesso ao aplicativo para acompanhar novidades, comprar produtos e manter seu salão sempre por perto.</p><div className={styles.loyaltyItems}><span><IconCheck/> Mais proximidade</span><span><IconCheck/> Compras pelo app</span><span><IconCheck/> Benefícios e novidades</span><span><IconCheck/> Experiência personalizada</span></div></div></div></section>

  <section id="contato" className={styles.contact}><div className={styles.contactCopy}><span>LOGGXY BEAUTY</span><h2>A beleza do seu negócio também está na gestão.</h2><p>Descubra como organizar sua equipe, atender melhor e vender mais com uma plataforma pensada para o mercado da beleza.</p><div><IconBrandWhatsapp/><span><small>Fale agora com nossa equipe</small><a href="https://wa.me/5511965970699" target="_blank" rel="noreferrer">(11) 96597-0699</a></span></div></div><BeautyForm/></section>

  <footer className={styles.footer}><div><Image src="/brand/loggxy-beauty.png" width={46} height={46} alt="Loggxy Beauty"/><span><b>Loggxy Gerenciamento e Sistemas Ltda.</b><small>CNPJ: 63.700.987/0001-77</small></span></div><div><a href="mailto:contato@loggxy.com.br">contato@loggxy.com.br</a><a href="https://wa.me/5511965970699" target="_blank" rel="noreferrer">(11) 96597-0699</a></div><p>© {new Date().getFullYear()} Loggxy Beauty. Todos os direitos reservados.</p></footer>
</main>}
