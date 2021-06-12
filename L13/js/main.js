// let btn1 = document.querySelector('.btn1')

// btn1.onclick = function(){
// 	let img = document.querySelector('.btn1 img')
// 	if(img.style.display == "block"){
// 		img.style.display = "none"
// 	}else{
// 		img.style.display = "block"
// 	}
// }

for (let i = 1; i <= 25; i++) {
	document.querySelector('.btn'+i).onclick = function(){
		let img = document.querySelector('.btn'+ i +' img')
		if(img.style.display == "block"){
			img.style.display = "none"
		}else{
			img.style.display = "block"
		}
	}
}