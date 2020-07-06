 document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    //the tetrominoes
    const ltetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const ztetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const ttetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const otetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const itetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

    const theTetrominoes = [ltetromino, ztetromino, ttetromino, otetromino, itetromino]

    let currentposition = 4
    let currentrotation = 0
    //randomly select a tetromino and its first rotation
    let random = Math.floor(Math.random()*theTetrominoes.length)
    
    let current = theTetrominoes[random][curentrotation]

    //draw the tetramiino
    function draw() {
        current.forEach(index => {
            squares[currentposition + index].classList.add('tetromino')
        })
    }

    //undraw the tetraminoo
    function undraw() {
        current.forEach(index => {
            squares[currentposition + index].classList.remove('tetromino')
        })
    }

























 })