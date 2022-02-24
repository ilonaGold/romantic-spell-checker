document.getElementById("btn").addEventListener("click", correct);
const parText = document.getElementById('paragraph')

function correct() {
    let newText = `${parText.textContent.slice(0, 1).toUpperCase()}${parText.textContent.slice(1).toLowerCase()}`
    parText.textContent = newText;
}
