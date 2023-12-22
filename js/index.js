// VANILLA SCRIPT BESTE

function updatePage(pos) {
  const max = pos / 10;
  updateBrrText(max);

  const content = document.getElementsByClassName("content")[0];
  const animationArea = document.getElementsByClassName("animation-area")[0];
  const chart = document.getElementsByClassName("chart")[0];
  if (max > 3) {
    addShake(content, max);
    addShake(animationArea, max);
    addShake(chart, max);
  } else {
    removeShake(content);
    removeShake(animationArea);
    removeShake(chart);
  }
  const brrSpan = document.getElementById("brrr");
  if (max > 6) {
    addBlink(brrSpan);
  } else {
    removeBlink(brrSpan);
  }
}

function addBlink(part) {
  part.classList.add("blink");
}

function removeBlink(part) {
  part.classList.remove("blink");
}

function addShake(part, shake) {
  part.classList.add("shake");
  part.style.setProperty("--maxflow", `${shake * 3}px`);
}

function removeShake(part) {
  part.classList.remove("shake");
  part.style.setProperty("--maxflow", ``);
}

function updateBrrText(max) {
  const brrSpan = document.getElementById("brrr");

  let brr = "b";
  for (let index = 0; index < max; index++) {
    brr = brr + "r";
  }
  brrSpan.innerText = brr;
}

function createChart() {
  const ctx = document.getElementById("myChart");
  const labels = ["2016", "2018", "2020", "2021"];
  const data = {
    labels: labels,
    datasets: [
      {
        label:
          "Häufige oder sehr häuftige Nutzung von Fax in Unternehmen ab 20 Mitarbeitern",
        data: [79, 62, 49, 43],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  new Chart(ctx, {
    type: "line",
    data,
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: "%",
          },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    },
  });
}

window.addEventListener("load", function () {
  console.log("All assets are loaded");
  createChart();

  setInterval( () => {
    generateBrSpan();
  }, 800);
});

// paper generator

function generatePaper() {
  const container = document.getElementsByClassName("paper-container")[0];
  const paper = document.createElement("div");
  container.append(paper);

  paper.classList.add("paper-fall");

  // random number generator between -10 and 10
  const rotation = Math.random() * 20;
  const rotationDirection = Math.random() > 0.5 ? -1 : 1;
  const endPosLeft = Math.random() * (60 - 30) + 30;
  paper.style.setProperty("--rotation", `${rotation*rotationDirection}deg`);
  paper.style.setProperty("--endPosLeft", `${endPosLeft}px`);
}

function generateBrSpan() {
  const container = document.getElementsByClassName("br-container")[0];
  const br = document.createElement("div");
  br.innerText = "BRR";
  container.append(br);
  br.classList.add("br-left");

  const rotation = Math.random() * 20;
  const rotationDirection = Math.random() > 0.5 ? -1 : 1;
  const endPosTop = Math.random() * (80 - 40) + 40;

  const endPosLeft = Math.random() * (80 - 20) + 20;
  // pos
  br.style.setProperty("--endPosTop", `${endPosTop}px`);
  br.style.setProperty("--endPosLeft", `${endPosLeft}px`);
  br.style.setProperty("--rotation", `${rotation * rotationDirection}deg`);

  setTimeout(() => {
    br.remove();
  }, 500);
}
