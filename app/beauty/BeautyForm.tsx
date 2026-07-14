"use client";

import {FormEvent,useState} from "react";
import {IconArrowRight,IconBrandWhatsapp,IconCheck} from "@tabler/icons-react";
import styles from "./beauty.module.css";

const WHATSAPP="5511965970699";

export function BeautyForm(){
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const message=["Olá! Quero conhecer o Loggxy Beauty.","",`Nome: ${data.get("nome")}`,`Negócio: ${data.get("negocio")}`,`Segmento: ${data.get("segmento")}`,`WhatsApp: ${data.get("telefone")}`,`Principal interesse: ${data.get("interesse")}`].join("\n");
    setSent(true);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }
  return <form className={styles.leadForm} onSubmit={submit}>
    <span>FALE COM A LOGGXY BEAUTY</span><h2>Leve mais controle para o seu negócio.</h2><p>Preencha os dados e abra uma conversa com nossa equipe no WhatsApp.</p>
    <div className={styles.formGrid}><label>Seu nome<input name="nome" required autoComplete="name" placeholder="Como podemos chamar você?"/></label><label>Nome do negócio<input name="negocio" required autoComplete="organization" placeholder="Salão, barbearia ou clínica"/></label><label>Seu segmento<select name="segmento"><option>Salão de beleza</option><option>Barbearia</option><option>Clínica de estética</option><option>Profissional autônomo</option><option>Outro negócio de beleza</option></select></label><label>WhatsApp<input name="telefone" type="tel" required autoComplete="tel" placeholder="(11) 99999-9999"/></label><label className={styles.formFull}>O que você quer organizar primeiro?<select name="interesse"><option>Gestão completa</option><option>Agenda profissional</option><option>Comissionamento</option><option>Estoque</option><option>Link para agendamento</option><option>Compras direto da fábrica</option></select></label></div>
    <label className={styles.consent}><input type="checkbox" required/><span>Concordo em enviar meus dados para receber contato da Loggxy Beauty.</span></label>
    <button type="submit"><IconBrandWhatsapp/> Quero conhecer <IconArrowRight/></button><small><IconCheck/> Atendimento direto e sem compromisso.</small>
    {sent&&<p className={styles.sent} role="status">Conversa preparada. Se o WhatsApp não abrir, <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">clique aqui</a>.</p>}
  </form>
}
