import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{return [
  {url:"https://loggxy.com.br",lastModified:new Date(),changeFrequency:"weekly",priority:1},
  {url:"https://loggxy.com.br/demonstracao",lastModified:new Date(),changeFrequency:"weekly",priority:.9},
  {url:"https://loggxy.com.br/beauty",lastModified:new Date(),changeFrequency:"weekly",priority:.9},
]}
