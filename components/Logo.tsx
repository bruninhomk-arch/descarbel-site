import Image from "next/image";
export function Logo({light=false}:{light?:boolean}){return <a href="#home" className="logo" aria-label="Loggxy ERP - início"><Image src="/brand/loggxy-erp.png" width={42} height={42} sizes="42px" alt="Logotipo Loggxy ERP" priority/><span style={{color:light?"white":"#052A63"}}>LOGGXY <b>ERP</b></span></a>}
