var sig1 = document.getElementById('signature1');
var sig2 = document.getElementById('signature2');
var sig3 = document.getElementById('signature3');
var sig4 = document.getElementById('signature4');
var witsig = document.getElementById('witnesssig');
var idimg1 = "";
var idimg2 = "";
var idimg3 = "";
var idimg4 = "";
var formtype = "shared"; //by default the form is shared

//change the form to exclusive content and back to shared
document.getElementById('form_share').addEventListener('click', function () {
formtype = "shared";
document.getElementById("model1name").value = "MODEL 1 FULL LEGAL NAME";
});
document.getElementById('form_exclude').addEventListener('click', function () {
formtype = "exclude";
document.getElementById("model1name").value = "MODEL 1 (OWNER) FULL LEGAL NAME";
});

// show and hide the witness signature field
function wit(){
  var x = document.getElementById("witness");
  if (document.getElementById('witcheck').checked) {
    document.getElementById('witness').style.display = "inline";
    document.getElementById("witness_sig").style.display = "block";
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    witsig.width = witsig.offsetWidth * ratio;
    witsig.height = witsig.offsetHeight * ratio;
    witsig.getContext("2d").scale(ratio, ratio);
  }
  else {
    document.getElementById('witness').style.display = "none";
    document.getElementById("witness_sig").style.display = "none";
  }
}
// show and hide the model 3 signature field
function twomod(){
  document.getElementById('model3').style.display = "none";
  document.getElementById("third_sig").style.display = "none";
  document.getElementById('model4').style.display = "none";
  document.getElementById("fourth_sig").style.display = "none";
  document.getElementById("threeup").style.display = "none";
  document.getElementById("fourup").style.display = "none";
  document.getElementById("thirdtext").style.display = "none";
  document.getElementById("fourthtext").style.display = "none";
}

function threemod(){
  var x = document.getElementById("model3");
  document.getElementById('model3').style.display = "inline";
  document.getElementById("third_sig").style.display = "block";
  document.getElementById("threeup").style.display = "inline";
  document.getElementById("thirdtext").style.display = "inline";
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  sig3.width = sig3.offsetWidth * ratio;
  sig3.height = sig3.offsetHeight * ratio;
  sig3.getContext("2d").scale(ratio, ratio);
  document.getElementById('model4').style.display = "none";
  document.getElementById("fourth_sig").style.display = "none";
  document.getElementById("fourthtext").style.display = "none";
  document.getElementById("fourup").style.display = "none";
}

function fourmod(){
  var x = document.getElementById("model4");
  document.getElementById('model3').style.display = "inline";
  document.getElementById("third_sig").style.display = "block";
  document.getElementById('model4').style.display = "inline";
  document.getElementById("fourth_sig").style.display = "block";
  document.getElementById("threeup").style.display = "inline";
  document.getElementById("fourup").style.display = "inline";
  document.getElementById("thirdtext").style.display = "inline";
  document.getElementById("fourthtext").style.display = "inline";
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  sig3.width = sig3.offsetWidth * ratio;
  sig3.height = sig3.offsetHeight * ratio;
  sig3.getContext("2d").scale(ratio, ratio);
  sig4.width = sig4.offsetWidth * ratio;
  sig4.height = sig4.offsetHeight * ratio;
  sig4.getContext("2d").scale(ratio, ratio);
}
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

  sig2.width = sig2.offsetWidth * ratio;
  sig2.height = sig2.offsetHeight * ratio;
  sig2.getContext("2d").scale(ratio, ratio);

  sig3.width = sig3.offsetWidth * ratio;
  sig3.height = sig3.offsetHeight * ratio;
  sig3.getContext("2d").scale(ratio, ratio);

  sig4.width = sig4.offsetWidth * ratio;
  sig4.height = sig4.offsetHeight * ratio;
  sig4.getContext("2d").scale(ratio, ratio);

  witsig.width = witsig.offsetWidth * ratio;
  witsig.height = witsig.offsetHeight * ratio;
  witsig.getContext("2d").scale(ratio, ratio);
}

resizeCanvas();

//signature pads
var signaturePad1 = new SignaturePad(sig1, {});
var signaturePad2 = new SignaturePad(sig2, {});
var signaturePad3 = new SignaturePad(sig3, {});
var signaturePad4 = new SignaturePad(sig4, {});
var witsigPad = new SignaturePad(witsig, {});

//clear signatures
document.getElementById('clear').addEventListener('click', function () {
signaturePad1.clear();
});
document.getElementById('clear2').addEventListener('click', function () {
signaturePad2.clear();
});
document.getElementById('clear3').addEventListener('click', function () {
signaturePad3.clear();
});
document.getElementById('clear4').addEventListener('click', function () {
signaturePad4.clear();
});
document.getElementById('clear5').addEventListener('click', function () {
witsigPad.clear();
});

// open picture ID for Model 1
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

// open picture ID for Model 2
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

// open picture ID for Model 3
var openFile3 = function(event) {
  var input = event.target;
  var reader3 = new FileReader();
  reader3.onload = function(){
    var dataURL3 = reader3.result;
    window.idimg3 = reader3.result;
    var output3 = document.getElementById('output3');
    output3.src = dataURL3;
  };
  reader3.readAsDataURL(input.files[0]);
};

// open picture ID for Model 4
var openFile4 = function(event) {
  var input = event.target;
  var reader4 = new FileReader();
  reader4.onload = function(){
    var dataURL4 = reader4.result;
    window.idimg4 = reader4.result;
    var output4 = document.getElementById('output4');
    output4.src = dataURL4;
  };
  reader4.readAsDataURL(input.files[0]);
};

// takes the values the users have entered and fills the form
function generateForm() {

  if (document.getElementById("model1name").value == "" || document.getElementById("model2name").value == "" || document.getElementById("model1addy").value == "" || document.getElementById("model2addy").value == "" || document.getElementById("content").value == "" || document.getElementById("locality").value == "" || document.getElementById("date").value == "") {
    // checks all the fields, if one is empty or at its default value returns an error message instead of filling the form
    return alert("Information missing, please review then try again.");
  }
  else {
    var x = document.getElementById("bg");
    x.style.display = "block";
    document.getElementById("fill_1name").innerHTML = document.getElementById("model1name").value;
    document.getElementById("fill_1add").innerHTML = document.getElementById("model1addy").value;
    if (formtype == "exclude"){
      document.getElementById("model1ident").innerHTML = "(hereinafter referred to as the 'OWNER')<br>";
      document.getElementById("intro").innerHTML = "In favor of";
      document.getElementById("model2ident").innerHTML = "<br>For good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, I,";
      document.getElementById("intro2").innerHTML = "<br>hereby agree as follows: ";
      document.getElementById("sharetype").innerHTML = "I hereby acknowledge the Content is sole property of OWNER, and that I do not hold any rights to reproduce, sell, license, rent or otherwise distribute and publish, modify, edit and alter the Content unless given written permission by the OWNER;";
    }
    else {
      document.getElementById("model1ident").innerHTML = "<br>AND";
      document.getElementById("intro").innerHTML = "For good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, I,";
      document.getElementById("model2ident").innerHTML = "";
      document.getElementById("intro2").innerHTML = "<br>hereinafter referred to collectively as the “PARTIES”, and individually as a “PARTY” all hereby agree as follows:"
      document.getElementById("sharetype").innerHTML = "I hereby acknowledge that ownership of the Content is jointly shared between both Parties, and that I do not hold exclusive rights to  reproduce, sell, license, rent or otherwise distribute and publish, modify, edit and alter the Content;";
    }
    document.getElementById("fill_2name").innerHTML = document.getElementById("model2name").value;
    document.getElementById("fill_2add").innerHTML = document.getElementById("model2addy").value;
    document.getElementById("fill_3name").innerHTML = document.getElementById("model3name").value;
    document.getElementById("fill_3add").innerHTML = document.getElementById("model3addy").value;
    document.getElementById("fill_4name").innerHTML = document.getElementById("model4name").value;
    document.getElementById("fill_4add").innerHTML = document.getElementById("model4addy").value;

    // iterates "the PARTIES" or "the OWNER" over the
    // document based on shared or exclusive
    var names = document.getElementsByClassName("name");
    for(var i = 0; i < names.length; i++)
    {
      if (formtype == "shared") {
        names[i].innerHTML = "the PARTIES";
      }
      else {
        names[i].innerHTML = "the OWNER"
      }
    }

    document.getElementById("fill_content").innerHTML = document.getElementById("content").value;
    document.getElementById("fill_date").innerHTML = document.getElementById("date").value;
    document.getElementById("fill_locality").innerHTML = document.getElementById("locality").value;
    document.getElementById("fill_locality2").innerHTML = document.getElementById("locality").value;
    document.getElementById("fill_minvalue").innerHTML = document.getElementById("minvalue").value;
    document.getElementById("slength").innerHTML = "for the first " + document.getElementById("selltime").value +" after release";

    // changes the wording of the sale restrictions based on imput
    if (document.getElementById("mintime").value == 999){
      if (formtype == "shared"){
        document.getElementById("minclause").innerHTML = "6.2 Both PARTIES shall be allowed to upload the Content, in whole or in part, to free-to-view services";
      }
      else {
        document.getElementById("minclause").innerHTML = "6.2 The OWNER shall be allowed to upload the Content, in whole or in part, to free-to-view services;"
      }
    }
    else if (document.getElementById("mintime").value == 0){
      if (formtype == "shared"){
      document.getElementById("minclause").innerHTML = "6.2 I hereby agree to not upload any of the Content to free-to-view services";
      }
      else {
        document.getElementById("minclause").innerHTML = "6.2 The OWNER hereby agrees not to upload any of the Content to free-to-view services";
      }
    }
    else {
      if (formtype == "shared"){
        if (document.getElementById("delay").checked){
          document.getElementById("minclause").innerHTML = "6.2 No PARTY shall upload more than " + document.getElementById("mintime").value + " minutes of the Content to free-to-view services for the first " + document.getElementById("freedelay").value + " months after filming, after which both parties may upload the whole length video.";
        }
        else {
          document.getElementById("minclause").innerHTML = "6.2 No PARTY shall upload more than " + document.getElementById("mintime").value + " minutes of the Content to free-to-view services.";
        }
      }
      else {
        document.getElementById("minclause").innerHTML = "6.2 The OWNER shall not upload more than " + document.getElementById("mintime").value + " minutes of the Content to free-to-view services.";
      }
    }

    document.getElementById("fill_bundle").innerHTML = document.getElementById("bundle").value;
    document.getElementById("fill_giveaway").innerHTML = document.getElementById("giveaway").value;
    document.getElementById("fill_premium").innerHTML = document.getElementById("premium").value;
  }
}

// show or hide the selling restrictions at the top of the page
function strict() {
  if (document.getElementById('salecheck').checked){
    document.getElementById('restrictions').style.display = "block";
  }
  else {
    document.getElementById('restrictions').style.display = "none";
  }
}
