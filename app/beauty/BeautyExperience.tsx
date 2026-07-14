"use client";

import {useState} from "react";
import {IconCalendarEvent,IconCash,IconCheck,IconExternalLink,IconPackage,IconUser} from "@tabler/icons-react";
import styles from "./beauty.module.css";

const views=[
  {id:"agenda",label:"Agenda",icon:IconCalendarEvent},
  {id:"comissoes",label:"Comissões",icon:IconCash},
  {id:"estoque",label:"Estoque",icon:IconPackage},
  {id:"link",label:"Link público",icon:IconExternalLink},
];

export function BeautyExperience(){
  const [active,setActive]=useState("agenda");
  return <div className={styles.experience}>
    <div className={styles.experienceTabs} role="tablist" aria-label="Recursos do Loggxy Beauty">
      {views.map(view=>{const Icon=view.icon;return <button key={view.id} type="button" role="tab" aria-selected={active===view.id} className={active===view.id?styles.tabActive:""} onClick={()=>setActive(view.id)}><Icon/><span>{view.label}</span></button>})}
    </div>
    <div className={styles.experienceScreen} role="tabpanel">
      <div className={styles.appBar}><div><span>LOGGXY</span> BEAUTY</div><small>Visão da operação</small><i>LS</i></div>
      {active==="agenda"&&<div className={styles.agendaView}><div className={styles.screenTitle}><div><span>AGENDA PROFISSIONAL</span><h3>Hoje, 14 de julho</h3></div><button>+ Novo horário</button></div><div className={styles.agendaGrid}><aside>{["09:00","10:00","11:00","13:00","14:00","15:00"].map(time=><span key={time}>{time}</span>)}</aside><div>{[["09:00","Corte + escova","Mariana","pink"],["10:00","Barba premium","Rafael","purple"],["11:00","Manicure","Carla","blue"],["13:00","Coloração","Ana Paula","pink"],["14:00","Limpeza de pele","Beatriz","green"]].map(([time,service,client,color])=><article className={styles[color]} key={time}><IconUser/><span><b>{service}</b>{client}</span><small>{time}</small></article>)}</div></div></div>}
      {active==="comissoes"&&<div className={styles.commissionView}><div className={styles.screenTitle}><div><span>COMISSIONAMENTO</span><h3>Resultado da equipe</h3></div><button>Este mês</button></div><div className={styles.metrics}><article><span>Comissões calculadas</span><b>R$ 4.860,00</b><small>Período atual</small></article><article><span>Serviços realizados</span><b>186</b><small>+12% no mês</small></article><article><span>Profissionais</span><b>8</b><small>Equipe ativa</small></article></div><div className={styles.people}>{[["Mariana Silva","48 serviços","R$ 1.420,00","82%"],["Rafael Costa","39 serviços","R$ 1.180,00","68%"],["Carla Souza","34 serviços","R$ 960,00","58%"],["Ana Paula","29 serviços","R$ 780,00","48%"]].map(person=><article key={person[0]}><i>{person[0].split(" ").map(x=>x[0]).join("").slice(0,2)}</i><span><b>{person[0]}</b><small>{person[1]}</small></span><em>{person[2]}</em><div><i style={{width:person[3]}}/></div></article>)}</div></div>}
      {active==="estoque"&&<div className={styles.stockView}><div className={styles.screenTitle}><div><span>ESTOQUE INTELIGENTE</span><h3>Produtos e consumo</h3></div><button>+ Novo produto</button></div><div className={styles.stockSummary}><span><b>248</b>produtos ativos</span><span><b>12</b>estoque baixo</span><span><b>R$ 18,4 mil</b>valor em estoque</span></div><div className={styles.productTable}><header><span>Produto</span><span>Categoria</span><span>Saldo</span><span>Status</span></header>{[["Shampoo profissional","Cabelo","24","Em estoque"],["Máscara de hidratação","Cabelo","8","Estoque baixo"],["Óleo reparador","Finalização","19","Em estoque"],["Esmalte nude","Unhas","31","Em estoque"],["Creme facial","Estética","6","Estoque baixo"]].map(product=><article key={product[0]}><span><i/><b>{product[0]}</b></span><span>{product[1]}</span><span>{product[2]}</span><span className={product[3]==="Em estoque"?styles.ok:styles.low}>{product[3]}</span></article>)}</div></div>}
      {active==="link"&&<div className={styles.linkView}><div className={styles.screenTitle}><div><span>LINK EXTERNO</span><h3>Sua agenda disponível 24 horas</h3></div><button>Copiar link</button></div><div className={styles.linkBody}><div className={styles.linkCard}><small>SEU LINK PERSONALIZADO</small><p>loggxy.com.br/beauty/<b>studio-bella</b></p><div><span><IconCheck/> Instagram</span><span><IconCheck/> WhatsApp</span><span><IconCheck/> Google</span></div></div><div className={styles.miniPhone}><span>Studio Bella</span><b>Agende seu horário</b><small>Escolha um serviço</small>{["Corte e escova","Manicure","Coloração"].map(service=><button key={service}>{service}<IconExternalLink/></button>)}</div></div></div>}
    </div>
  </div>
}
