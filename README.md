# Links Oficiais — A.A.A. Medicina UNINORTE

Página de links da BIO do Instagram da Atlética.

## O que tem nesta pasta

| Arquivo | Para que serve | Preciso mexer? |
|---|---|---|
| `links.js` | **Todos os links da página** | **Sim, é aqui que você edita** |
| `index.html` | Estrutura da página | Não |
| `style.css` | Cores e visual | Não |
| `assets/logo.jpg` | Logo que aparece na página | Só se trocar a logo |
| `assets/favicon.png` | Iconezinho da aba do navegador | Só se trocar a logo |
| `assets/apple-touch-icon.png` | Ícone quando salvam no celular | Só se trocar a logo |
| `assets/og-image.jpg` | Imagem que aparece quando mandam o link no WhatsApp | Só se trocar a logo |
| `assets/logo-original.jpg` | Cópia da logo original em tamanho grande (backup) | Não |

Para abrir e editar o `links.js`, use o **Bloco de Notas** (clique com o botão direito no arquivo → Abrir com → Bloco de Notas) ou o VS Code.

---

## 1. Onde estão os links

Todos ficam no arquivo **`links.js`**. Cada link é um bloco assim:

```js
  {
    categoria: "BEACH MED",
    titulo: "INSCRIÇÃO BEACH MED",
    url: "https://forms.gle/XJhaUUZn6xLmzY5v6",
    destaque: true
  },
```

- **categoria** → o texto pequeno em cima
- **titulo** → o texto grande do botão
- **url** → o endereço que abre ao clicar
- **destaque** → `true` (com detalhe dourado) ou `false` (normal)

Os links aparecem na página **na mesma ordem** em que estão no arquivo. A numeração (01, 02, 03...) é automática.

## 2. Como trocar uma URL

Troque só o que está **entre as aspas** depois de `url:`.

Antes:
```js
    url: "https://link-antigo.com",
```
Depois:
```js
    url: "https://link-novo.com",
```

As aspas `"` precisam continuar lá, e a vírgula no final da linha também.

## 3. Como mudar o nome

Mesma ideia: troque o texto entre aspas em `titulo:` (texto grande) ou `categoria:` (texto pequeno).

```js
    categoria: "HERMOSA PARTY",
    titulo: "INGRESSOS HERMOSA PARTY",
```

Pode escrever com acento normalmente.

## 4. Como adicionar um link

Copie um bloco inteiro — do `{` até o `},` — e cole logo abaixo de outro bloco (antes do `];` que fecha a lista). Depois troque os textos:

```js
  {
    categoria: "NOVO EVENTO",
    titulo: "COMPRAR INGRESSO",
    url: "https://link-aqui.com",
    destaque: false
  },
```

Pronto. O novo botão aparece sozinho, com o mesmo visual. Quer que ele apareça em primeiro? Cole o bloco no começo da lista.

## 5. Como excluir um link

Apague o bloco inteiro, do `{` até o `},` (incluindo a vírgula). O botão some da página.

## 6. Como mudar qual link está destacado

- No link que **deve** ter o detalhe dourado: `destaque: true`
- Nos outros: `destaque: false`

Exemplo — tirar o destaque do Beach Med e colocar na Hermosa Party:

```js
    titulo: "INSCRIÇÃO BEACH MED",
    ...
    destaque: false     ← era true
```
```js
    titulo: "INGRESSOS HERMOSA PARTY",
    ...
    destaque: true      ← era false
```

O ideal é ter só um link destacado por vez.

## 7. Como trocar a logo

Substitua o arquivo **`assets/logo.jpg`** por outro com **o mesmo nome** (`logo.jpg`).

- A imagem deve ser **quadrada**, com a logo redonda ocupando a imagem toda (a página recorta em círculo).
- Tamanho recomendado: 440 × 440 pixels.

Se quiser, troque também `favicon.png`, `apple-touch-icon.png` e `og-image.jpg` (mantendo os mesmos nomes).

## 8. Como ver a página no computador

Dê dois cliques no arquivo **`index.html`**. Ela abre no navegador.
Depois de editar o `links.js`, salve e aperte **F5** no navegador para ver a mudança.

**Se a página aparecer sem nenhum link**, provavelmente faltou uma aspa `"`, uma vírgula `,` ou uma chave `{ }` no `links.js`. Confira o bloco que você mexeu por último.

## 9. Onde a página está publicada

A página fica no **GitHub Pages** (gratuito, não gasta créditos do Netlify):

**https://meduninorte.github.io/**

É esse endereço que vai na BIO do Instagram.

## 10. Como atualizar os links (jeito mais fácil, até pelo celular)

1. Entre em **https://github.com/meduninorte/meduninorte.github.io** (logada na sua conta).
2. Clique no arquivo **`links.js`**.
3. Clique no **lápis** (✏️ "Edit this file") no canto direito.
4. Faça a alteração (trocar URL, nome, adicionar, excluir, destaque — igual às instruções acima).
5. Clique no botão verde **"Commit changes..."** e depois em **"Commit changes"** de novo.
6. Espere **1 a 2 minutos** e abra a página. A mudança já está no ar.

Não precisa arrastar pasta nem fazer mais nada. O GitHub publica sozinho.

> Dica: se a página não mudou, aperte F5 (ou feche e abra de novo no celular). Às vezes o navegador guarda a versão antiga por alguns minutos.

**Se a página ficar sem links** depois de uma edição, faltou uma aspa, vírgula ou chave. Abra o `links.js` de novo no GitHub e confira o trecho que você mexeu.

## 11. Como trocar a logo pelo GitHub

1. No repositório, entre na pasta **`assets`**.
2. Clique em **"Add file" → "Upload files"**.
3. Arraste a nova imagem **com o nome `logo.jpg`** (ela substitui a antiga).
4. Clique em **"Commit changes"**.
