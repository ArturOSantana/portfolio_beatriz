import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Trabalhos do Portfólio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Redação Jornalística', value: 'redacao-jornalistica'},
          {title: 'Assessoria de Imprensa', value: 'assessoria-de-imprensa'},
          {title: 'Ghostwriting', value: 'ghostwriting'},
          {title: 'Blog Post', value: 'blog-post'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkMateria',
      title: 'Link da Matéria Original',
      type: 'url',
      description: 'Link para o artigo publicado no site original',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        ...selection,
        subtitle: category,
      }
    },
  },
})

