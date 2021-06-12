let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")

img1.style.display = "none"
img2.style.display = "none"
img3.style.display = "none"

img1.style.display = "block"

btn1.onclick = function(){
	img1.style.display = "none"
	img2.style.display = "none"
	img3.style.display = "none"

	img1.style.display = "block"
}

btn2.onclick = function(){
	img1.style.display = "none"
	img2.style.display = "none"
	img3.style.display = "none"

	img2.style.display = "block"
}

btn3.onclick = function(){
	img1.style.display = "none"
	img2.style.display = "none"
	img3.style.display = "none"

	img3.style.display = "block"
}