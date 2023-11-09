let cards = document.querySelectorAll('.card')
let icon = document.querySelectorAll('.icon-card')

cards.forEach(function (element, id) {
    element.addEventListener('mouseenter', function () {
        icon.forEach((_ic, index, array) => {
            if (index === id) {
                array[index].classList.add('transition-card-service')
            }
        })
    });

    element.addEventListener('mouseleave', () => icon.forEach(icon => { icon.classList.remove('transition-card-service') }));
});