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

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = slider.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     slider.scrollLeft = prevScrollLeft - positionDiff;
//     slider.classList.add("dragging")
//     showHideIcons()
// }

// const dragStop = () => {
//     let isDragStart = false
//     slider.classList.remove("dragging")
// }

// slider.addEventListener("mousedown", dragStart);
// slider.addEventListener("mousemove", dragging);
// slider.addEventListener("mouseup", dragStop);
// slider.addEventListener("mouseleave", dragStop);