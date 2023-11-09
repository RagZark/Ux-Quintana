const links = {
    0: 'https://www.behance.net/gallery/169869207/Estudo-de-caso-de-UXUI-App-de-adocao-animal',
    1: '',
    2: '',
}

document.querySelectorAll('.portfolio-images').forEach((element, id) => {
    element.addEventListener('click', () => window.open(links[id], '_blank'))
})

// let portfolioWorks = document.querySelectorAll('.portfolio-images')

// portfolioWorks.forEach((element, id) => {
//     element.addEventListener('click', () => {
//         if(id === 0){
//             window.open('https://www.behance.net/gallery/169869207/Estudo-de-caso-de-UXUI-App-de-adocao-animal', '_blank')
//         } else if(id === 1){
//             window.open('', '_blank')
//         } else if(id === 3){
//             window.open('', '_blank')
//         }
//     })
// })