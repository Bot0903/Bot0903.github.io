// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var body = document.body;
var bHeight = body.style.height;
var bOverflowY = body.style.overflowY;


img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.height = "100%";
  body.style.overflowY = "hidden";
}

modal.onclick = function() { 
  modal.style.display = "none";
  body.style.height = bHeight;
  body.style.overflowY = bOverflowY;
  console.log("modal click");
}