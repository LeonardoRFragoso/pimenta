# 🌶️ Melt Pimenta

Landing page visual e conceitual da **Melt Pimenta**, projeto criado por Luiza Pimenta.

> Projeto visual/conceitual. Conteúdo destinado a maiores de 18 anos.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- Fontes: Inter + Playfair Display (Google Fonts)
- Imagens: Unsplash (CDN, lazy loading)

## Instalação e uso

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura

```
src/
├── App.jsx                          # Roteamento de estados (AgeGate / Page)
├── index.css                        # Tailwind + variáveis globais
├── main.jsx                         # Ponto de entrada React
└── components/
    ├── AgeGate.jsx                  # Tela de verificação de idade
    ├── Header.jsx                   # Header fixo com blur + mobile menu
    ├── Hero.jsx                     # Seção hero com parallax
    ├── VibeSection.jsx              # Cards de identidade visual
    ├── Gallery.jsx                  # Galeria em grid responsivo
    ├── Manifesto.jsx                # Seção manifesto da marca
    ├── Contact.jsx                  # CTA de contato WhatsApp
    ├── Footer.jsx                   # Rodapé com avisos legais
    └── WhatsappFloatingButton.jsx   # Botão flutuante WhatsApp
```

## Funcionalidades

- ✅ Age Gate com persistência em `sessionStorage`
- ✅ Header com efeito blur ao rolar
- ✅ Hero com parallax e animações neon
- ✅ Galeria com grid responsivo e lazy loading
- ✅ Botão WhatsApp flutuante com tooltip animado
- ✅ Scroll suave entre seções
- ✅ Mobile first, totalmente responsivo
- ✅ Animações com Framer Motion
- ✅ SEO básico + Open Graph no `index.html`
- ✅ Sem linguagem de venda, catálogo, preço ou comercialização

## WhatsApp

Todas as CTAs abrem:
```
https://wa.me/5521976870833?text=Oi Luiza, vi a página da Melt Pimenta e queria falar com você.
```
# pimenta
