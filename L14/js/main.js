let look= document.querySelector('.look');
let btn_l = document.querySelector('.btn-l');
let btn_r = document.querySelector('.btn-r');
let lookNum = 1;
addLook();

btn_l.onclick =function(){
	look.classList.remove('look'+lookNum);
	lookNum = lookNum - 1;
	if(lookNum<=1){
		lookNum = 1;
	}
	addLook();
}
btn_r.onclick = function(){
	look.classList.remove('look'+lookNum);
	lookNum = lookNum + 1;
	if(lookNum>=10){
		lookNum = 10;
	}
	addLook();
}

function addLook(){
	look.classList.add('look'+lookNum);
}