const links = {
    0: 'https://www.behance.net/gallery/169869207/Estudo-de-caso-de-UXUI-App-de-adocao-animal',
    1: '',
    2: '',
}

document.querySelectorAll('.portfolio-images').forEach((element, id) => {
    element.addEventListener('click', () => window.open(links[id], '_blank'))
})
