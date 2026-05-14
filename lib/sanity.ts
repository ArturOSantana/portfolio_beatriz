import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Validação de variáveis de ambiente
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  console.warn('⚠️ NEXT_PUBLIC_SANITY_PROJECT_ID não está definido no .env.local')
}

if (!dataset) {
  console.warn('⚠️ NEXT_PUBLIC_SANITY_DATASET não está definido no .env.local')
}

export const client = createClient({
  projectId: projectId || 'surq6dhv',
  dataset: dataset || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Usar CDN para melhor performance em produção
  perspective: 'published', // Apenas conteúdo publicado
})

const builder = imageUrlBuilder(client)

/**
 * Gera URL otimizada para imagens do Sanity
 * @param source - Referência da imagem do Sanity
 * @returns Image URL builder
 */
export function urlFor(source: SanityImageSource) {
  if (!source) {
    console.warn('⚠️ urlFor chamado sem source de imagem')
    return builder.image({} as SanityImageSource)
  }
  return builder.image(source)
}

