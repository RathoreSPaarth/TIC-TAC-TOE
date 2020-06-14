let base = document.createElement('div')
let row1 = document.createElement('div')
let row2 = document.createElement('div')
let row3 = document.createElement('div')



let box1 = document.createElement('div')
let box2 = document.createElement('div')
let box3 = document.createElement('div')
let box4 = document.createElement('div')
let box5 = document.createElement('div')
let box6 = document.createElement('div')
let box7 = document.createElement('div')
let box8 = document.createElement('div')
let box9 = document.createElement('div')

base.setAttribute('id','base')

row1.setAttribute('class','row')
row2.setAttribute('class','row')
row3.setAttribute('class','row')

box1.setAttribute('class','box')
box2.setAttribute('class','box')
box3.setAttribute('class','box')
box4.setAttribute('class','box')
box5.setAttribute('class','box')
box6.setAttribute('class','box')
box7.setAttribute('class','box')
box8.setAttribute('class','box')
box9.setAttribute('class','box')

box1.setAttribute('id','box-1')
box2.setAttribute('id','box-2')
box3.setAttribute('id','box-3')
box4.setAttribute('id','box-4')
box5.setAttribute('id','box-5')
box6.setAttribute('id','box-6')
box7.setAttribute('id','box-7')
box8.setAttribute('id','box-8')
box9.setAttribute('id','box-9')

box1.setAttribute('onclick','turn(this.id)')
box2.setAttribute('onclick','turn(this.id)')
box3.setAttribute('onclick','turn(this.id)')
box4.setAttribute('onclick','turn(this.id)')
box5.setAttribute('onclick','turn(this.id)')
box6.setAttribute('onclick','turn(this.id)')
box7.setAttribute('onclick','turn(this.id)')
box8.setAttribute('onclick','turn(this.id)')
box9.setAttribute('onclick','turn(this.id)')

box1.setAttribute('value','1')
box2.setAttribute('value','2')
box3.setAttribute('value','3')
box4.setAttribute('value','4')
box5.setAttribute('value','5')
box6.setAttribute('value','6')
box7.setAttribute('value','7')
box8.setAttribute('value','8')
box9.setAttribute('value','9')



row1.appendChild(box1)
row1.appendChild(box2)
row1.appendChild(box3)

row2.appendChild(box4)
row2.appendChild(box5)
row2.appendChild(box6)

row3.appendChild(box7)
row3.appendChild(box8)
row3.appendChild(box9)

base.appendChild(row1)
base.appendChild(row2)
base.appendChild(row3)


document.body.appendChild(base)
document.body.setAttribute('onload',"addstyle()")

function addstyle()
{
    document.getElementById('style').href='style.css';
}


let x = true
function turn(id){
    
    const currentBox = document.getElementById(id)
    if(x){
        currentBox.innerHTML = "X";
        currentBox.value = "X";
        currentBox.setAttribute("style","pointer-events:none; background-color:#fb7813")
        x = false
    }

    else{
        currentBox.innerHTML = "O";
        currentBox.value = "O";
        currentBox.setAttribute("style","pointer-events:none;background-color:#b6eb7a")
        x = true
    }

  
    checkWinner()

}
let click = 0;
function checkWinner(){
    click++
    if(( box1.value == 'X' && box2.value =="X" && box3.value == "X") || (box4.value == 'X' && box5.value == 'X' && box6.value == 'X') || (box7.value == 'X' && box8.value =='X' && box9.value == 'X')){
        alert("X WINS!")
        location.reload()
    }

    if((box1.value == 'X' && box4.value =='X' && box7.value =='X') || (box2.value =='X' && box5.value=='X' && box8.value=='X') || (box3.value == 'X' && box6.value == 'X' && box9.value == 'X')){
        alert("X WINS!")
        location.reload()
    }

    if(( box1.value == 'O' && box2.value =='O' && box3.value == 'O') || (box4.value == 'O' && box5.value == 'O' && box6.value == 'O') || (box7.value == 'O' && box8.value =='O' && box9.value == 'O')){
        alert("O WINS!")
        location.reload()
    }

    if((box1.value == 'O' && box4.value =='O' && box7.value =='O') || (box2.value =='O' && box5.value=='O' && box8.value=='O') || (box3.value == 'O' && box6.value == 'O' && box9.value == 'O')){
        alert("O WINS!")
        location.reload()
    }

    if(( box1.value == 'X' && box5.value =="X" && box9.value == "X") || (box3.value == 'X' && box5.value == 'X' && box7.value == 'X') ){
        alert("X WINS!")
        location.reload()
    }

    if(( box1.value == 'O' && box5.value =='O' && box9.value == 'O') || (box3.value == 'O' && box5.value == 'O' && box7.value == 'O') ){
        alert("O WINS!")
        location.reload()
    }
    else if(click==9){
        alert("DRAW!")
        location.reload()
    }

}

