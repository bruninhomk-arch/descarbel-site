"use client";

import {FormEvent, useState} from "react";
import {IconArrowRight, IconBrandWhatsapp, IconCheck} from "@tabler/icons-react";
import styles from "./demonstracao.module.css";

const WHATSAPP_NUMBER = "5511965970699";

export function DemoForm(){
  const [sent,setSent]=useState(false);

  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const message=[
      "Olá! Quero testar o Loggxy ERP por 15 dias.",
      "",
      `Nome: ${data.get("nome")}`,
      `Empresa: ${data.get("empresa")}`,
      `E-mail: ${data.get("email")}`,
      `WhatsApp: ${data.get("telefone")}`,
      `Principal interesse: ${data.get("interesse")}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }

  return <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.formHeading}>
      <span>TESTE GRÁTIS POR 15 DIAS</span>
      <h2>Pronto para colocar sua gestão no controle?</h2>
      <p>Preencha seus dados. Ao enviar, abriremos uma conversa com a equipe Loggxy no WhatsApp.</p>
    </div>
    <div className={styles.fields}>
      <label>Seu nome<input name="nome" autoComplete="name" required placeholder="Como podemos chamar você?"/></label>
      <label>Empresa<input name="empresa" autoComplete="organization" required placeholder="Nome da sua empresa"/></label>
      <label>E-mail profissional<input type="email" name="email" autoComplete="email" required placeholder="voce@empresa.com.br"/></label>
      <label>WhatsApp<input type="tel" name="telefone" autoComplete="tel" required placeholder="(11) 99999-9999"/></label>
      <label className={styles.full}>O que você quer organizar primeiro?
        <select name="interesse" defaultValue="Gestão completa">
          <option>Gestão completa</option>
          <option>Vendas e pedidos</option>
          <option>Financeiro</option>
          <option>Estoque e compras</option>
          <option>Fiscal e emissão de documentos</option>
          <option>Logística e transportadora</option>
          <option>CRM e atendimento</option>
        </select>
      </label>
    </div>
    <label className={styles.consent}><input type="checkbox" required/><span>Concordo em enviar estes dados à Loggxy para receber contato sobre o teste do sistema.</span></label>
    <button className={styles.submit} type="submit"><IconBrandWhatsapp size={21}/> Quero testar grátis <IconArrowRight size={19}/></button>
    <div className={styles.safe}><IconCheck size={16}/><span>Sem compromisso. A equipe ajuda você a começar.</span></div>
    {sent&&<p className={styles.sent} role="status">Conversa preparada! Se o WhatsApp não abriu, <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">clique aqui</a>.</p>}
  </form>
}
