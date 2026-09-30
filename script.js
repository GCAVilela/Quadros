/*
  ================================
  EDITE SOMENTE ESTA PARTE
  ================================
*/
const CONFIG = {
  nome: "Seu Nome Fotografia",
  instagramUrl: "https://instagram.com/seuinstagram",
  whatsapp: "5531999999999", // somente números: 55 + DDD + número
  whatsappTexto: "Olá! Tenho interesse em um quadro.",
};

/*
  Cada foto é um objeto.
  Para adicionar uma foto:
  1) coloque o arquivo em assets/fotos/
  2) copie um bloco abaixo
  3) altere código, evento, carro e arquivo.

  IMPORTANTE:
  Use imagens já reduzidas e com marca-d'água para o catálogo.
*/
const FOTOS = [
  {
    codigo: "OB-001",
    evento: "Encontro de Carros Antigos — Ouro Branco",
    data: "30/09/2026",
    carro: "Exemplo — substitua",
    arquivo: "assets/fotos/OB-001.svg"
  },
  {
    codigo: "OB-002",
    evento: "Encontro de Carros Antigos — Ouro Branco",
    data: "30/09/2026",
    carro: "Outro exemplo — substitua",
    arquivo: "assets/fotos/OB-002.svg"
  }
];

/* ================================
   NÃO PRECISA EDITAR ABAIXO
   ================================ */

const eventosEl = document.getElementById("eventos");
const vazioEl = document.getElementById("catalogo-vazio");
const buscaEl = document.getElementById("busca");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCode = document.getElementById("modal-code");
const modalTitle = document.getElementById("modal-title");
const modalEvent = document.getElementById("modal-event");
const modalWhatsapp = document.getElementById("modal-whatsapp");

document.title = `${CONFIG.nome} | Quadros de Carros`;
document.getElementById("instagram").href = CONFIG.instagramUrl;
document.getElementById("whatsapp-footer").href = whatsappLink(CONFIG.whatsappTexto);
document.getElementById("whatsapp-custom").href =
  whatsappLink("Olá! Quero informações para fotografar meu carro e fazer um quadro.");
document.getElementById("ano").textContent = new Date().getFullYear();

function whatsappLink(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}

function render(termo = "") {
  const q = termo.trim().toLowerCase();
  const filtradas = FOTOS.filter(f =>
    `${f.codigo} ${f.carro} ${f.evento} ${f.data}`.toLowerCase().includes(q)
  );

  eventosEl.innerHTML = "";
  vazioEl.hidden = filtradas.length !== 0;

  const grupos = {};
  filtradas.forEach(f => {
    const chave = `${f.evento}|${f.data}`;
    if (!grupos[chave]) grupos[chave] = [];
    grupos[chave].push(f);
  });

  Object.values(grupos).forEach(fotos => {
    const event = document.createElement("section");
    event.className = "event";

    const title = document.createElement("div");
    title.className = "event-title";
    title.innerHTML = `<h3>${escapeHtml(fotos[0].evento)}</h3><span>${escapeHtml(fotos[0].data)}</span>`;

    const grid = document.createElement("div");
    grid.className = "grid";

    fotos.forEach(f => {
      const card = document.createElement("article");
      card.className = "card";
      card.tabIndex = 0;
      card.innerHTML = `
        <img src="${escapeAttr(f.arquivo)}" alt="${escapeAttr(f.carro)}"
             loading="lazy" draggable="false">
        <div class="card-bottom">
          <strong>${escapeHtml(f.carro)}</strong>
          <span>${escapeHtml(f.codigo)}</span>
        </div>`;
      card.addEventListener("click", () => openModal(f));
      card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(f); });
      grid.appendChild(card);
    });

    event.appendChild(title);
    event.appendChild(grid);
    eventosEl.appendChild(event);
  });
}

function openModal(f) {
  modalImg.src = f.arquivo;
  modalImg.alt = f.carro;
  modalCode.textContent = f.codigo;
  modalTitle.textContent = f.carro;
  modalEvent.textContent = `${f.evento} • ${f.data}`;
  modalWhatsapp.href = whatsappLink(
    `Olá! Quero comprar o quadro da foto ${f.codigo} (${f.carro}).`
  );
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
buscaEl.addEventListener("input", () => render(buscaEl.value));

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

/* Dificulta ações casuais de cópia. Não substitui marca-d'água. */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("dragstart", e => {
  if (e.target.tagName === "IMG") e.preventDefault();
});

render();
