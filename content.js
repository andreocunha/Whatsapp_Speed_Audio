
const interval = setInterval(()=>{
    const header = document.querySelector("._3All_._3NrAe")
    if(header){
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2X"
        button.classList.add("TwoTimesButton")

        button.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
            audios.forEach((audio) => {
                audio.playbackRate = 2;ß
            })
        })

        header.appendChild(button)


    }
}, 1000)


