import {ImageResponse} from "next/og";
export const size={width:512,height:512}; export const contentType="image/png";
export default function Icon(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#052A63",color:"#63D63B",fontSize:260,fontWeight:900,fontFamily:"sans-serif"}}>L</div>,size)}
