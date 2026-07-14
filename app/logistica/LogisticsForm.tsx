"use client";

import {FormEvent,useState} from "react";
import {IconArrowRight,IconBrandWhatsapp,IconCheck} from "@tabler/icons-react";
import styles from "./logistica.module.css";

const WHATSAPP="5511965970699";

export function LogisticsForm(){
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const data=new FormData(event.currentTarget);const message=["Olá! Quero conhecer a Loggxy Logística.","",`Nome: ${data.get("nome")}`,`Empresa: ${data.get("empresa")}`,`Operação: ${data.get("operacao")}`,`WhatsApp: ${data.get("telefone")}`,`Interesse: ${data.get("interesse")}`].join("\n");setSent(true);window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")}
  return <form className={styles.form} onSubmit={submit}><span>FALE COM A LOGGXY LOGÍSTICA</span><h2>Coloque sua operação em movimento.</h2><p>Preencha os dados para conversar com nossa equipe pelo WhatsApp.</p><div className={styles.formGrid}><label>Seu nome<input name="nome" required autoComplete="name" placeholder="Como podemos chamar você?"/></label><label>Empresa<input name="empresa" required autoComplete="organization" placeholder="Nome da transportadora"/></label><label>Tipo de operação<select name="operacao"><option>Transportadora</option><option>Operador logístico</option><option>Embarcador</option><option>Distribuidora</option><option>Frota própria</option></select></label><label>WhatsApp<input name="telefone" type="tel" required autoComplete="tel" placeholder="(11) 99999-9999"/></label><label className={styles.full}>Principal interesse<select name="interesse"><option>Gestão completa</option><option>CT-e e documentos</option><option>Rastreamento de cargas</option><option>Frota e veículos</option><option>Coletas e romaneios</option><option>Financeiro e fretes</option></select></label></div><label className={styles.consent}><input type="checkbox" required/><span>Concordo em enviar meus dados para receber contato da Loggxy.</span></label><button type="submit"><IconBrandWhatsapp/> Quero conhecer <IconArrowRight/></button><small><IconCheck/> Atendimento direto e sem compromisso.</small>{sent&&<p className={styles.sent} role="status">Conversa preparada. Se o WhatsApp não abrir, <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">clique aqui</a>.</p>}</form>
}
