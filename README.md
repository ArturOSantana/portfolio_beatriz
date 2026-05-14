# Portfolio Profissional - Jornalista

Portfolio moderno e profissional desenvolvido com Next.js 14 e Sanity CMS, permitindo gerenciamento completo de conteúdo sem necessidade de código.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Sanity.io** - CMS headless com interface visual
- **Tailwind CSS** - Estilização moderna e responsiva
- **Vercel** - Hospedagem gratuita e otimizada

## ✨ Funcionalidades

### Para o Cliente
- ✅ Adicionar/editar trabalhos do portfólio sem código
- ✅ Personalizar cores, textos e imagens do site
- ✅ Gerenciar informações de contato e redes sociais
- ✅ Publicar/despublicar conteúdo instantaneamente
- ✅ Interface visual intuitiva (Sanity Studio)

### Técnicas
- ✅ Design profissional e responsivo
- ✅ Otimização automática de imagens
- ✅ SEO otimizado
- ✅ Performance superior (Next.js)
- ✅ Hospedagem gratuita (Vercel + Sanity)
- ✅ Zero manutenção de servidor

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais do Sanity

# Iniciar desenvolvimento
npm run dev

# Iniciar Sanity Studio
npm run sanity
```

## 🌐 Deploy

### 1. Deploy do Site (Vercel)
```bash
# Conectar com Vercel
vercel

# Configurar variáveis de ambiente no painel Vercel:
# NEXT_PUBLIC_SANITY_PROJECT_ID
# NEXT_PUBLIC_SANITY_DATASET
```

### 2. Deploy do Sanity Studio
```bash
npx sanity deploy
```

## 📝 Estrutura do Projeto

```
portfolio-beatriz/
├── app/                    # Páginas e componentes Next.js
│   ├── components/        # Componentes reutilizáveis
│   ├── categoria/         # Páginas de categorias
│   ├── portfolio/         # Páginas de trabalhos individuais
│   └── globals.css        # Estilos globais
├── sanity/                # Configuração do Sanity CMS
│   ├── schemas/          # Schemas de conteúdo
│   └── sanity.config.ts  # Configuração do Studio
├── lib/                   # Utilitários
│   └── sanity.ts         # Cliente Sanity
└── public/               # Assets estáticos
```

## 🎨 Personalização

O site pode ser totalmente personalizado através do Sanity Studio:

- **Seção Hero**: Título, subtítulo, botão e imagem principal
- **Sobre**: Biografia e foto
- **Contato**: Email, telefone, WhatsApp e redes sociais
- **Cores**: Esquema de cores do site
- **SEO**: Título, descrição e palavras-chave

## 📱 Categorias de Portfolio

1. **Redação Jornalística** - Matérias e reportagens
2. **Assessoria de Imprensa** - Releases e comunicados
3. **Ghostwriting** - Artigos e conteúdos autorais
4. **Blog Posts** - Artigos para blogs e sites

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Verifica código
npm run sanity       # Inicia Sanity Studio local
```

## 📄 Licença

Este projeto é privado e de uso exclusivo do cliente.

## 🆘 Suporte

Para dúvidas sobre uso do CMS ou personalização, consulte a documentação interna ou entre em contato com o desenvolvedor.

---

**Desenvolvido com Next.js 14 + Sanity CMS**
