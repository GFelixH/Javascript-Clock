//display horario
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");
let background = document.querySelector("#body");

const intervalId = setInterval(() => {
  let data = new Date();
  let horaAtual = formataTempo(data.getHours());
  let minAtual = formataTempo(data.getMinutes());
  let segAtual = formataTempo(data.getSeconds());
  setTempo(horaAtual, minAtual, segAtual);
  setBackground(horaAtual);
}, 1000);
function formataTempo(t) {
  if (t < 10) return "0" + t;
  return t;
}

function setTempo(h, m, s) {
  horas.textContent = h;
  minutos.textContent = m;
  segundos.textContent = s;
}

function setBackground(h) {
  console.log(h);
  if (h > 6 && h <= 15) {
    background.classList.remove("noite");
    background.classList.add("dia");
  } else if (h > 15 && h <= 19) {
    background.classList.remove("dia");
    background.classList.add("tarde");
  } else {
    background.classList.remove("tarde");
    background.classList.add("noite");
  }
}
