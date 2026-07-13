import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://loggxy.com.br"),
  title:{default:"Loggxy ERP | Gestão inteligente para empresas",template:"%s | Loggxy ERP"},
  description:"ERP completo para integrar vendas, estoque, finanças, logística e emissão fiscal. Gestão rápida, modular e segura.",
  keywords:["ERP","sistema de gestão","Loggxy","CT-e","MDF-e","NF-e","logística","gestão empresarial"],
  openGraph:{type:"website",locale:"pt_BR",siteName:"Loggxy ERP",title:"Loggxy ERP — Tecnologia que move empresas",description:"Uma plataforma completa para operar, decidir e crescer."},
  twitter:{card:"summary_large_image",title:"Loggxy ERP",description:"Tecnologia que move empresas."},
  icons:{icon:"/brand/loggxy-erp.png",apple:"/brand/loggxy-erp.png"}, manifest:"/manifest.webmanifest"
};
export const viewport: Viewport = {themeColor:"#052A63",width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className="scroll-smooth"><body>{children}</body></html>}
