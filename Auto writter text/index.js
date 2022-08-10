const message = `This is a message been writing by JavaScript! 🥳`

let index = 0

function writeMessage() {
    document.body.innerText = message.slice(0, index)

    index++

    if(index > message.length) {
        index = 0
    }

}

setInterval(writeMessage, 100)