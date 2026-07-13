import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./sections/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { navy:"#052A63", blue:"#1565C0", sky:"#42A5F5", green:"#63D63B" }, boxShadow:{soft:"0 24px 70px rgba(5,42,99,.12)"} } }, plugins: [] } satisfies Config;
