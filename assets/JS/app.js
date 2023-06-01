const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

<<<<<<< HEAD
=======


>>>>>>> dab4a1ef4226f36293050002020b85c3acf5387c
    secondsContainer.textContent = seconds
    minutesContainer.textContent = minutes
    hoursContainer.textContent = hours
    daysContainer.textContent = days

<<<<<<< HEAD
}   

    setInterval(updateCountdown, 1000)
=======
}
setInterval(updateCountdown, 1000)
>>>>>>> dab4a1ef4226f36293050002020b85c3acf5387c
