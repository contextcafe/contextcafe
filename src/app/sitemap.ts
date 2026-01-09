import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://contextcafe.com",
      lastModified: new Date(),
    },
    {
      url: "https://contextcafe.com/constitution",
      lastModified: new Date(),
    },
    {
      url: "https://contextcafe.com/tools",
      lastModified: new Date(),
    },
    {
      url: "https://contextcafe.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://contextcafe.com/disclaimer",
      lastModified: new Date(),
    },
    {
      url: "https://contextcafe.com/constitution/article-14",
      lastModified: new Date(),
    },
  ];
}
