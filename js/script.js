var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");
var dsc = document.querySelector(".project h4");
var dev = document.querySelector(".dev");
var card = document.querySelector(".card");

//DECLARE var untuk alamat src picture
var images = new Array(
	"src/pic1.png",
	"src/pic2.png",
	"src/pic3.png"
	);

var dsc_text = new Array(
	"Online Course based Worpress",
	"Forum App with laravel",
	"Stickman FPS with java"
	);

var dsc_link = new Array(
	"https://github.com/Allam0053/tugas-wordpress1",
	"https://github.com/Allam0053/ForumApp",
	"https://github.com/widigdacahya/T-Rex_ucul/tree/main/FinalProject"
	);

for(let i=0; i<btn.length; i++){
	btn[i].onclick = function()
	{
		gallery.src = images[i]; //ganti src saat btn diclick

		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += " active";

		dsc.innerHTML = dsc_text[i];

		document.querySelector("body div a").href = dsc_link[i];
	};
}

dev.onclick = function(){
	if( card.className == "card pop"){
		card.className = "card" ;
	}
	else
		card.className = "card pop";
}