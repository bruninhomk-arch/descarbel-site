"use client";
import {useState} from "react"; import {IconMenu2,IconX} from "@tabler/icons-react"; import {Logo} from "./Logo";
const links=[["Empresa","empresa"],["Módulos","modulos"],["Integrações","integracoes"],["Downloads","downloads"],["Planos","planos"],["Contato","contato"]];
export function Header(){const [open,setOpen]=useState(false);return <header><div className="nav-wrap"><Logo/><nav className={open?"open":""}>{links.map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{l}</a>)}<a className="mobile-enter" href="#contato">Entrar</a></nav><a className="btn btn-small desktop-enter" href="#contato">Entrar <span>↗</span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menu">{open?<IconX/>:<IconMenu2/>}</button></div></header>}
