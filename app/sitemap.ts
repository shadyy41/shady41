import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shady41.netlify.app',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.netlify.app/blog',
      lastModified: new Date(),
    },
  ]
}