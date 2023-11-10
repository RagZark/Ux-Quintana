const slider = document.querySelector('.slider');
firstImg = slider.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".projects i")

let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
    let scrollWidth = slider.scrollWidth - slider.clientWidth
    arrowIcons[0].style.display = slider.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slider.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth;
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setInterval(() => showHideIcons(), 60);
    });
});
