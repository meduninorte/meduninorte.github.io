/*
==================================================
==================================================

   EDITE OS LINKS DA PÁGINA SOMENTE AQUI

==================================================
==================================================

  Cada bloco entre { } é um link da página.
  Os links aparecem na página na MESMA ORDEM desta lista.

  categoria  -> texto pequeno em cima (ex: "BEACH MED")
  titulo     -> texto principal do botão
  url        -> endereço que abre ao clicar
  destaque   -> true = detalhe dourado (evento atual)
                false = link normal

  foto       -> OPCIONAL. Miniatura quadrada ao lado do link.
                Ex: foto: "assets/fotos/beach-med.jpg",
                Sem a linha foto, o link mostra o número (01, 02...).

  ATENÇÃO:
  - Mantenha as aspas "  " em volta dos textos e do link.
  - Mantenha a vírgula depois de cada }  (a última pode ter ou não).
  - Veja o README.md para exemplos passo a passo.
*/

const links = [

  {
    categoria: "BEACH MED",
    titulo: "INSCRIÇÃO BEACH MED",
    url: "https://forms.gle/XJhaUUZn6xLmzY5v6",
    foto: "assets/fotos/beach-med.jpg",
    destaque: true
  },

  {
    categoria: "HERMOSA PARTY",
    titulo: "INGRESSOS HERMOSA PARTY",
    url: "https://appingressos.com.br/hermosa-party-2026__25854/?utm_source=promoter&utm_campaign=atleticas",
    foto: "assets/fotos/hermosa.jpg",
    destaque: false
  },

  {
    categoria: "ALL BLACK PARTY",
    titulo: "INGRESSOS ALL BLACK PARTY",
    url: "https://cheers.com.br/evento/all-black-party-b-day-bk-dj-pbeats-36310?promoter=254488",
    foto: "assets/fotos/all-black.jpg",
    destaque: false
  },

  {
    categoria: "ATLÉTICA",
    titulo: "APP DA ATLÉTICA",
    url: "https://warm-raindrop-812e86.netlify.app",
    foto: "assets/fotos/app.jpg",
    destaque: false
  },

  {
    categoria: "MÁXIMO NUNEZ",
    titulo: "FALAR COM A ATLÉTICA",
    url: "https://wa.me/5567992660894",
    foto: "assets/fotos/contato.jpg",
    destaque: false
  },

];
