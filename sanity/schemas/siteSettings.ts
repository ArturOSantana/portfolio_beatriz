import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: '🎯 Seção Principal (Hero)',
    },
    {
      name: 'about',
      title: '👤 Sobre Mim',
    },
    {
      name: 'contact',
      title: '📞 Contato e Redes Sociais',
    },
    {
      name: 'colors',
      title: '🎨 Cores do Site',
    },
    {
      name: 'seo',
      title: '🔍 SEO e Metadados',
    },
  ],
  fields: [
    // ===== SEÇÃO HERO =====
    defineField({
      name: 'heroTitle',
      title: 'Título Principal',
      type: 'string',
      description: 'Seu nome e profissão (ex: "Beatriz - Jornalista Profissional")',
      validation: (Rule) => Rule.required().max(100),
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo / Descrição',
      type: 'text',
      rows: 3,
      description: 'Breve descrição do que você faz',
      validation: (Rule) => Rule.max(300),
      group: 'hero',
    }),
    defineField({
      name: 'heroButtonText',
      title: 'Texto do Botão',
      type: 'string',
      description: 'Texto do botão principal (ex: "Ver portfólio")',
      initialValue: 'Ver portfólio',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Sua Foto Principal',
      type: 'image',
      description: 'Foto que aparece na seção principal (recomendado: 600x800px)',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),

    // ===== SEÇÃO SOBRE =====
    defineField({
      name: 'aboutTitle',
      title: 'Título da Seção',
      type: 'string',
      description: 'Título da seção "Sobre Mim"',
      initialValue: 'Sobre Mim',
      group: 'about',
    }),
    defineField({
      name: 'aboutText',
      title: 'Sua Biografia',
      type: 'text',
      rows: 8,
      description: 'Conte sua história profissional, experiência e diferenciais',
      validation: (Rule) => Rule.max(1000),
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Foto da Seção Sobre',
      type: 'image',
      description: 'Foto circular que aparece na seção sobre (recomendado: 500x500px)',
      options: {
        hotspot: true,
      },
      group: 'about',
    }),

    // ===== CONTATO E REDES SOCIAIS =====
    defineField({
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
      description: 'Seu e-mail profissional',
      validation: (Rule) => Rule.email(),
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string',
      description: 'Telefone com DDD (ex: (11) 99999-9999)',
      group: 'contact',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Número do WhatsApp',
      type: 'string',
      description: 'Número com código do país (ex: 5511999999999)',
      placeholder: '5511999999999',
      group: 'contact',
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Mensagem Padrão do WhatsApp',
      type: 'string',
      description: 'Mensagem que aparece ao abrir o WhatsApp',
      initialValue: 'Olá! Gostaria de saber mais sobre seus serviços.',
      group: 'contact',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn',
      type: 'url',
      description: 'Link completo do seu perfil no LinkedIn',
      placeholder: 'https://linkedin.com/in/seu-perfil',
      group: 'contact',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram',
      type: 'url',
      description: 'Link do seu perfil no Instagram',
      placeholder: 'https://instagram.com/seu-perfil',
      group: 'contact',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X',
      type: 'url',
      description: 'Link do seu perfil no Twitter/X',
      placeholder: 'https://twitter.com/seu-perfil',
      group: 'contact',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook',
      type: 'url',
      description: 'Link do seu perfil no Facebook',
      placeholder: 'https://facebook.com/seu-perfil',
      group: 'contact',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube',
      type: 'url',
      description: 'Link do seu canal no YouTube',
      placeholder: 'https://youtube.com/@seu-canal',
      group: 'contact',
    }),

    // ===== CORES DO SITE =====
    defineField({
      name: 'primaryColor',
      title: 'Cor Principal (Hexadecimal)',
      type: 'string',
      description: 'Cor principal do site - formato: #d4af37 (botões, destaques)',
      placeholder: '#d4af37',
      initialValue: '#d4af37',
      validation: (Rule: any) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex',
        invert: false
      }).error('Use formato hexadecimal: #000000'),
      group: 'colors',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Cor Secundária (Hexadecimal)',
      type: 'string',
      description: 'Cor secundária - formato: #f59e0b (hover, detalhes)',
      placeholder: '#f59e0b',
      initialValue: '#f59e0b',
      validation: (Rule: any) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex',
        invert: false
      }).error('Use formato hexadecimal: #000000'),
      group: 'colors',
    }),
    defineField({
      name: 'darkColor',
      title: 'Cor Escura (Hexadecimal)',
      type: 'string',
      description: 'Cor de fundo escuro - formato: #0f172a (hero, footer)',
      placeholder: '#0f172a',
      initialValue: '#0f172a',
      validation: (Rule: any) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex',
        invert: false
      }).error('Use formato hexadecimal: #000000'),
      group: 'colors',
    }),

    // ===== SEO =====
    defineField({
      name: 'siteTitle',
      title: 'Título do Site',
      type: 'string',
      description: 'Aparece na aba do navegador e no Google',
      validation: (Rule) => Rule.required().max(60),
      group: 'seo',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descrição do Site',
      type: 'text',
      rows: 3,
      description: 'Descrição que aparece no Google (máx. 160 caracteres)',
      validation: (Rule) => Rule.max(160),
      group: 'seo',
    }),
    defineField({
      name: 'siteKeywords',
      title: 'Palavras-chave',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Palavras-chave para SEO (ex: jornalismo, redação, assessoria)',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configurações do Site',
        subtitle: 'Personalize textos, fotos, cores e redes sociais',
      }
    },
  },
})

