//const deletion = document.getElementById("main")
document.getElementById("main").remove()
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = `python is the champion`
document.body.append(newHeader)