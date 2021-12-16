// Laver Snefnug funktionen
(function () {

	var canvas, ctx;
	var points = [];
	var maxDist = 3000;

	function init() {
		//Add on load scripts
		canvas = document.getElementById("snow");
		ctx = canvas.getContext("2d");
		resizeCanvas();
		pointFun();
		setInterval(pointFun, 20);
		window.addEventListener('resize', resizeCanvas, false);
	}

	//Konstruere partiklerne
	function point() {
		this.x = Math.random() * (canvas.width + maxDist) - (maxDist / 2);
		this.y = Math.random() * (canvas.height + maxDist) - (maxDist / 2);
		this.z = (Math.random() * 0.5) + 0.5;
		this.vx = ((Math.random() * 2) - 0.5) * this.z;
		this.vy = ((Math.random() * 1.5) + 1.5) * this.z;
		this.fill = "rgba(255,255,255," + ((0.4 * Math.random()) + 0.5) + ")";
		this.dia = ((Math.random() * 2.5) + 1.5) * this.z;
		points.push(this);
	}
	//Konstruere spawn generator
	function generatePoints(amount) {
		var temp;
		for (var i = 0; i < amount; i++) {
			temp = new point();
		};
	}

	//Farver sneen
	function draw(obj) {
		ctx.beginPath();
		ctx.strokeStyle = "transparent";
		ctx.fillStyle = obj.fill;
		ctx.arc(obj.x, obj.y, obj.dia, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
	}
	//Generere bevægelses banen for snefnug
	function update(obj) {
		obj.x += obj.vx;
		obj.y += obj.vy;
		if (obj.x > canvas.width + (maxDist / 2)) {
			obj.x = -(maxDist / 2);
		} else if (obj.xpos < -(maxDist / 2)) {
			obj.x = canvas.width + (maxDist / 2);
		}
		if (obj.y > canvas.height + (maxDist / 2)) {
			obj.y = -(maxDist / 2);
		} else if (obj.y < -(maxDist / 2)) {
			obj.y = canvas.height + (maxDist / 2);
		}
	}
	
	// Ved det ikke
	function pointFun() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < points.length; i++) {
			draw(points[i]);
			update(points[i]);
		};
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		points = [];
		generatePoints(window.innerWidth / 3);
		pointFun();
	}

	//Execute when DOM has loaded
	document.addEventListener('DOMContentLoaded', init, false);
})();

//Beregner Muskelmasse Start
function beregnMuskelmasse() {
	a = document.getElementById('a').value;

	c = a * a * 17;
	total = c.toFixed(2);
	document.getElementById("cer").innerHTML = total + " Kg.";

}
//Beregner Muskelmasse - END

//Beregner Fedtfri masse - Start
function beregnFedtfri() {
	a = document.getElementById('a1').value;

	c = a * a * 34;
	total = c.toFixed(2);
	document.getElementById("cer1").innerHTML = total + " Kg.";
}
//Beregner Fedtfri masse - END

//Lav knap Funktionen
var mybutton = document.getElementById("myBtn");

// Når brugeren scroller 20px ned fra toppen, så skal knappen vises
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// Når brugeren klikker på knappen = Scroll til toppen af siden
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}