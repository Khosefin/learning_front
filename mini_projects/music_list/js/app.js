let $ = document
const players = $.querySelectorAll('.fa-play')
const audios = $.querySelectorAll('audio')

let musicName;

players.forEach(function (player) {

    player.addEventListener('click', function (event) {
        musicName = event.target.dataset.name

        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                audio.currentTime = 0
                audio.play()
            } else {
                audio.pause()
            }
        })

    })

})