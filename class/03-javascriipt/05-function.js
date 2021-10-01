let mySwitch = false
const send__number = () => {
    if (mySwitch === false) {
        mySwitch = true

        //1. 인증번호 생성해서 화면에 보여주기
        const number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("number").innerText = number
            // 2. 시간초 생성해서 화면에 보여주기
        let time = 20
        setInterval(() => {
            if (time >= 0) {
                const minutes = Math.floor(time / 60)
                const seconds = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = minutes + ":" + seconds
                    // console.log(minutes + ":" + seconds)
                time = time - 1
            } else {
                document.getElementById("setDisabled").setAttribute('disabled', 'true')
            }
        }, 1000)
    }
}