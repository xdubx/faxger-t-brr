// VANILLA SCRIPT BESTE

/**
 *
 */
function fetch() {}

function updatePage(pos) {
  const max = pos / 10;
  updateBrrText(max);

  const content = document.getElementsByClassName("content")[0];
  const faxgereat = document.getElementsByClassName("faxmachine")[0];

  if (max > 3) {
    addShake(content, max);
    addShake(faxgereat, max);
  } else {
    removeShake(content);
    removeShake(faxgereat);
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
});
