var sig1 = document.getElementById('signature1');
var idimg1 = "";
var idimg2 = "";




// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  sig1.width = sig1.offsetWidth * ratio;
  sig1.height = sig1.offsetHeight * ratio;
  sig1.getContext("2d").scale(ratio, ratio);
}
resizeCanvas();

document.getElementById("urlbutton").addEventListener("mouseover", URLoverlay);
document.getElementById("urlbutton").addEventListener("mouseleave", URLoverlayoff);
document.getElementById("idbutton").addEventListener("mouseover", IDoverlay);
document.getElementById("idbutton").addEventListener("mouseleave", IDoverlayoff);

function URLoverlay(events){
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('urlexplain').style.display = "block";
  document.getElementById('urlexplain').style.left = x + "px";
}
function URLoverlayoff(){
  document.getElementById('urlexplain').style.display = "none";
}

function IDoverlay(events){
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById('idexplain').style.display = "block";
  document.getElementById('idexplain').style.left = x + "px";
}
function IDoverlayoff(){
  document.getElementById('idexplain').style.display = "none";
}

var signaturePad1 = new SignaturePad(sig1, {});

document.getElementById('clear').addEventListener('click', function () {
signaturePad1.clear();
});

var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    window.idimg1 = reader.result;
    var output = document.getElementById('output1');
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

var openFile2 = function(event) {
  var input = event.target;

  var reader2 = new FileReader();
  reader2.onload = function(){
    var dataURL2 = reader2.result;
    window.idimg2 = reader2.result;
    var output2 = document.getElementById('output2');
    output2.src = dataURL2;
  };
  reader2.readAsDataURL(input.files[0]);
};
