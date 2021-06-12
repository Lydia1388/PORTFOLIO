let big = document.querySelector(".big")
let big_img = document.querySelector(".big .img img")

big.onclick = function(){
	big_img.src = ""
	big.style.display = "none"
}
//陣列
let data_ary = ["a","b","c","d"]
// data_ary[0] 取出第0格
let data_array = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg","images/21.jpg","images/22.jpg","images/23.jpg","images/24.jpg"]

for(let i=1; i<=24; i++){
	document.querySelector(".photo"+i+" img").src = data_array[i-1]
	document.querySelector(".photo"+i).onclick = function(){
		let my_img_src = document.querySelector(".photo"+i+" img").src
		big_img.src = my_img_src
		big.style.display = "block"
	}
}