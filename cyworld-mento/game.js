function startWord() {
    const word = document.getElementById("word").innerText //코드캠프
    const lastWord = word[word.length - 1] //프
    const myword = document.getElementById("myword").value //프랑스
    const firstWord = myword[0]

    if (lastWord === firstWord) {
        document.getElementById("result").innerText = "정답입니다"
        document.getElementById("word").innerText = myword
    } else {
        document.getElementById("result").innerText = "틀렸습니다"
        document.getElementById("myword").value = ""
    }

}

function random__number() {
    const lotto__number = []
    for (let i = 0; i < 6; i++) {
        let j = Math.floor(Math.random() * 45) + 1

        for (let k in lotto__number) {
            if (j == lotto__number[k]) {
                j = Math.floor(Math.random() * 45) + 1
            }
        }
        lotto__number.push(j)
    }

    lotto__number.sort(function(a, b) { return a - b })

    // lotto__number = document.getElementById("display").innerText
    document.getElementById("button__display").innerText = lotto__number
}