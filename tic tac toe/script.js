console.log("welcome to tic tac toe");

let music = new Audio("ding.mp3")
let nextturn = new Audio("nextturn.mp3");
let gameover= new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;

// function to change turn

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// function to check win

const checkWin = ()=>{
     let boxtext = document.getElementsByClassName('boxtext');
     let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ] 

     wins.forEach((e)=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
             document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
             isgameover = true;
             document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "20vh"
        }
     })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
         let boxtext = element.querySelector('.boxtext');
         element.addEventListener('click',()=>{
            if(boxtext.innerText === ''){
                boxtext.innerText = turn;
                turn = changeTurn();
                nextturn.play();
                checkWin();
                if(!isgameover){
                    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
                }  
            }
         })
})

// add on click listner to reset button 
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "0"
})