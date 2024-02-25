const boxes= document.querySelectorAll(".box")
const msg= document.querySelector(".msg")
const winmsg= document.querySelector(".win_msg")
const newgame_btn= document.querySelector("#newgame_btn")


winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const disableboxes=()=>{
    for(j of boxes){
        playerO=false;
        j.disabled=true;
    }
}
newgame_btn.addEventListener("click",newgame=()=>{
    winmsg.classList.add("win_msg");
    for(j of boxes){
        j.disabled=false;
        j.innerHTML="";
        playerO=true;


    }
});


let playerO=true
boxes.forEach(function(box){
    box.addEventListener("click",()=>{
        if (playerO) {
            box.innerHTML="O";
            playerO=false;
        }
        else{
            box.innerHTML="X";
            playerO=true;
        }
    box.disabled=true; 
    
    check();
    });
});

const check=() => {
    for(i of winpattern){
        pos1=boxes[i[0]].innerHTML;
        pos2=boxes[i[1]].innerHTML;
        pos3=boxes[i[2]].innerHTML;


        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1===pos2 && pos2===pos3){
                msg.innerHTML=`CONGRATULATIONS &#127881; &#x1F389; WINNER : ${pos1}`;
                winmsg.classList.remove("win_msg")
                disableboxes();
            }
        }
    }

}