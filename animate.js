var s = document.getElementById("vimage");
var height = s.getAttribute("height");
var width = s.getAttribute("width");
var rid;

var stop = function(){
    window.cancelAnimationFrame(rid);
};

var circleAnimation = function(){
    var r = 1;
    var inc = 1;    
    window.cancelAnimationFrame(rid);
    
    var circlefunc = function(){
	while(s.lastChild){
	    s.removeChild(s.lastChild);
	}
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	c.setAttribute("cx", width/2);
	c.setAttribute("cy", height/2);
	c.setAttribute("fill","blue");
	s.appendChild(c);
	c.setAttribute("r", r);
	
	r += inc;
	if (r == 1 || r == height/2)
	    inc *= -1;
	rid = window.requestAnimationFrame( circlefunc );
    };
    circlefunc();
};

var DVDAnimation = function(){
    var x = Math.floor(Math.random() * 360);
    var y = Math.floor(Math.random() * 220);
    var xinc = 1;
    var yinc = 1;
    window.cancelAnimationFrame(rid);
    
    var DVDfunc = function(){
	while (s.lastChild){
	    s.removeChild(s.lastChild);
	}
	x += xinc;
	y += yinc;
	
	var i = document.createElementNS("http://www.w3.org/2000/svg", "image");
	i.setAttribute("href", "dvd.jpg");
	i.setAttribute("x",x);
	i.setAttribute("y",y);
	i.setAttribute("height","75");
	i.setAttribute("width","125");
	s.appendChild(i);

	if (x == -10 || x == width - 120)
	    xinc *= -1;
	if (y == -15 || y == height - 60)
	    yinc *= -1;
	
	rid = window.requestAnimationFrame( DVDfunc );
    };
    DVDfunc();
};


var circlebutt = document.getElementById("circle");
circlebutt.addEventListener("click", circleAnimation)

var dvdbutt = document.getElementById("dvd");
dvdbutt.addEventListener("click", DVDAnimation)

var stopbutt = document.getElementById("stop");
stopbutt.addEventListener("click", stop);
