

  const windowElement = document.getElementById("window");
  const welcomeClose = document.getElementById("welcomeclose");
  const welcomeOpen = document.getElementById("welcomeopen");

  function closeWindow(element) {
    element.style.display = "none";
  }

  function openWindow(element) {
    element.style.display = "flex";
  }

  welcomeClose.addEventListener("click", function () {
    closeWindow(windowElement);
  });

   welcomeOpen.addEventListener("click", function () {
    openWindow(windowElement);
  });

   
	setInterval(function () {
  	 document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
    	}, 1000);
	
	
      dragElement (document.getElementById("window"))

      function dragElement(element) {
        var initialX = 0;
        var initialY = 0;
        var currentX = 0;
        var currentY = 0;
      
if (document.getElementById(element.id + "header")) {
       document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
       element.onmousedown = startDragging;
  }

   function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
   
    initialX = e.clientX;
    initialY = e.clientY;
   
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

 
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
   
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
   
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

 
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

if (document.getElementById(elmnt.id + "header")) {
	// if present, the header is where you move the DIV from:
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
	// otherwise, move the DIV from anywhere inside the DIV:
	elmnt.onmousedown = dragMouseDown;
}