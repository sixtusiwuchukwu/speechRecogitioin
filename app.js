let mic = document.querySelector("#circlein");

function scrollToBottom() {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
    scrollToBottom();
  }

  if (transcript.includes("Google")) {
    window.open("https://www.google.com", "_blank");
  } else if (transcript.includes("what is your name")) {
    p.textContent = " my name is sixtusbot,what is your Name?";
    words.appendChild(p);
  } else if (transcript.includes("what do you do")) {
    p.textContent = "i translate your voice speech to text";
    words.appendChild(p);
  } else if (transcript.includes("what else can  you do")) {
    p.textContent = "i have not been programmed to answer that now";
    words.appendChild(p);
  }
});

mic.addEventListener("click", () => {
  // if (mic.style.backgroundColor == "#6BD6E1") {
  //   recognition.stop();
  //   mic.style.backgroundColor = null;
  //   console.log("it is true");
  // } else {
  recognition.start();
  mic.style.borderColor = "#6BD6E1";
  recognition.addEventListener("end", recognition.start);
});

// recognition.start();
