const card = document.querySelectorAll(".card")
const paragraph = document.querySelectorAll(".paragraph-card")

card.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (card[index].classList.contains("reduced")) {
            card[index].classList.remove("reduced")
        } else {
            card[index].classList.add("reduced")
        }

        showParagraph(index)
    });
})

function showParagraph(index) {
    paragraph.forEach((_p, id) => {
        if (id === index && paragraph[id].classList.contains('hidden')) {
            paragraph[id].classList.remove("hidden")
        } else {
            paragraph[id].classList.add("hidden")
        }
    })
}