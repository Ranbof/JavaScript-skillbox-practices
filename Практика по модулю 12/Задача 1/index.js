const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/one.jpg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/two.jpg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/three.jpg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/four.jpg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/five.jpg"
    }
]



function showAdvertisement() {

    const randomCard = giftArr[Math.floor(Math.random() * giftArr.length)]


    const advertisement = document.getElementById('advertisement')
    const advertisementTitle = document.getElementById('advertisement-title')
    const advertisementIcon = document.getElementById('advertisement-icon')
    
    advertisementTitle.textContent = randomCard.title
    advertisementIcon.src = randomCard.icon


    advertisement.style.display = 'block'
}


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#close-btn')

    btn.addEventListener('click', function() {
        document.getElementById('advertisement').style.display = 'none'
    })

    setTimeout(showAdvertisement, 3000)
})
