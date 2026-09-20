let historialAcademico = [
  { item: "Colegio: San Juan Bautista" },
  { item: "Universidad: Santiago de Cali" },
  { item: "Cursos y Diplomados: Técnico Electrónico del Colegio San Juan Bautista" }
];

let historialLaboral = [
  { item: "Trabajo familiar" },
  { item: "Administrador de discoteca" }
];

const listaAcademica = document.getElementById("lista-academica");
const listaLaboral = document.getElementById("lista-laboral");

const btnAcademico = document.getElementById("btn-academico");
const inputAcademico = document.getElementById("input-academico");

const btnLaboral = document.getElementById("btn-laboral");
const inputLaboral = document.getElementById("input-laboral");


function renderizarLista(arreglo, contenedorUL) {
  contenedorUL.innerHTML = "";

  arreglo.forEach((obj, index) => {
    const li = document.createElement("li");

    const punto = document.createElement("span");
    punto.classList.add("punto");

    const texto = document.createElement("span");
    texto.classList.add("texto");
    texto.textContent = obj.item;

    li.appendChild(punto);
    li.appendChild(texto);

    if (index === arreglo.length - 1 && obj.nuevo) {
      li.classList.add("nuevo");
    }

    contenedorUL.appendChild(li);
  });

  const ultimo = contenedorUL.lastElementChild;
  if (ultimo && ultimo.classList.contains("nuevo")) {
    ultimo.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}


function agregarItem(arreglo, contenedorUL, valor) {
  if (valor.trim() === "") return;
  arreglo.push({ item: valor.trim(), nuevo: true });
  renderizarLista(arreglo, contenedorUL);
}

btnAcademico.addEventListener("click", () => {
  agregarItem(historialAcademico, listaAcademica, inputAcademico.value);
  inputAcademico.value = "";
});

btnLaboral.addEventListener("click", () => {
  agregarItem(historialLaboral, listaLaboral, inputLaboral.value);
  inputLaboral.value = "";
});


inputAcademico.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnAcademico.click();
});
inputLaboral.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnLaboral.click();
});


renderizarLista(historialAcademico, listaAcademica);
renderizarLista(historialLaboral, listaLaboral);