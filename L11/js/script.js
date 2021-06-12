let btn2_1 = document.querySelector('.btn2-1')
let btn2_2 = document.querySelector('.btn2-2')

btn2_1.onclick = function() {
	document.querySelector('.demo2 img').src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

btn2_2.onclick = function(){
	document.querySelector('#ct2').src = "https://www.w3schools.com/js/pic_bulboff.gif"
}

let btn3_1 = document.querySelector('.btn3-1')
let btn3_2 = document.querySelector('.btn3-2')

btn3_1.onclick = function() {
	document.querySelector('#ct3').style.fontSize = "50px"
}

btn3_2.onclick = function(){
	document.querySelector('#ct3').style.fontSize = "16px"
}

let btn4_1 = document.querySelector('.btn4-1')
let btn4_2 = document.querySelector('.btn4-2')

btn4_1.onclick = function() {
	document.querySelector('#ct4').style.display = "none"
}

btn4_2.onclick = function(){
	document.querySelector('#ct4').style.display = "block"
}

let btn5_1 = document.querySelector('.btn5-1')
let btn5_2 = document.querySelector('.btn5-2')

btn5_1.onclick = function() {
	document.querySelector('#ct5').style.background = "#fff"
}

btn5_2.onclick = function(){
	document.querySelector('#ct5').style.background = "linear-gradient(45deg, #fdcbf1, #e6dee9)"
}