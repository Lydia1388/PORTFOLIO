let look= document.querySelector('.look');
let btn_l = document.querySelector('.btn-l');
let btn_r = document.querySelector('.btn-r');
let lookNum = 1;
addLook();

btn_l.onclick =function(){
	look.classList.remove('ml1');
	look.classList.remove('ml2');
	look.classList.add('ml2');
	look.classList.remove('look0');
	look.classList.remove('look'+lookNum);
	lookNum = lookNum - 1;
	if(lookNum<=1){
		lookNum = 1;
	}
	addLook();
}
btn_r.onclick = function(){
	look.classList.remove('ml1');
	look.classList.remove('ml2');
	look.classList.add('ml1');
	look.classList.remove('look0');
	look.classList.remove('look'+lookNum);
	lookNum = lookNum + 1;
	if(lookNum>=10){
		lookNum = 10;
	}
	addLook();
}

function addLook(){
	setTimeout(function(){
		look.classList.add('look0');
		look.classList.add('look'+lookNum);
	} , 1);
}