# Catálogo de Quadros de Carros — GitHub Pages

## 1. Personalizar

Abra `script.js` e altere:

- `nome`
- `instagramUrl`
- `whatsapp`
- preços no `index.html`
- lista `FOTOS`

## 2. Adicionar fotos

Coloque as fotos de catálogo em:

`assets/fotos/`

Use versões reduzidas e com marca-d'água. NÃO coloque os arquivos originais de alta resolução no site.

Depois adicione cada foto à lista `FOTOS` em `script.js`.

Exemplo:

{
  codigo: "OB-003",
  evento: "Encontro de Carros Antigos — Ouro Branco",
  data: "05/10/2026",
  carro: "Ford Mustang",
  arquivo: "assets/fotos/OB-003.jpg"
}

## 3. Imagem de capa

Coloque uma foto chamada:

`assets/hero.jpg`

Ela será usada como capa da página.

## 4. Publicar no GitHub Pages

1. Crie uma conta em github.com.
2. Crie um repositório público, por exemplo `catalogo-quadros`.
3. Envie `index.html`, `style.css`, `script.js` e a pasta `assets`.
4. No repositório, abra Settings → Pages.
5. Em Source, escolha "Deploy from a branch".
6. Selecione a branch `main` e a pasta `/ (root)`.
7. Salve.
8. O GitHub fornecerá um endereço parecido com:
   `https://SEUUSUARIO.github.io/catalogo-quadros/`

Use esse endereço para gerar o QR Code.

## Segurança

Nenhuma página web consegue impedir 100% screenshots ou fotos da tela.
A proteção principal é:

- marca-d'água;
- resolução reduzida;
- nunca publicar o arquivo original;
- entregar a versão de alta qualidade somente após a compra.

O bloqueio de botão direito incluído no site apenas dificulta cópias casuais.
