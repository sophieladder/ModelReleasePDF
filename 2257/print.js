function printtopdf() {
  //if (signaturePad1.isEmpty() || document.getElementById("modelname").value == "" || document.getElementById("modeladdy").value == "" || document.getElementById("content").value == "") {
    // checks all the fields, if one is empty or at its default value returns an error message instead of creating the PDF
//    return alert("Information or signature missing, please review the document then try again.");
//  }
//  else {
    //make the PDF

  var doc = new jsPDF({format:"letter"});
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var modelname = firstname + " " + lastname;
  var bday = document.getElementById("bday").value;
  var date = document.getElementById("date").value;
  var shootID = document.getElementById("content").value;
  var address = document.getElementById("modeladdy").value;
  var urls = document.getElementById("URL").value;
  var url_array = urls.split(",");

  var xmargin = 15;
  var yline = 30;   // will be incremented to put each line further down on the page
  doc.setFontSize(15);
  doc.setFontStyle("bold");
  doc.text(10,15, '2257 Record Keeping Form');
  doc.setFontSize(12);
  doc.text(100,15,"Shoot ID: " + shootID);
  doc.setFontSize(15);
  doc.text(170,15, lastname);
  doc.setLineWidth(0.25);
  doc.line(28,20,170,20);

  // piece together the PDF line by line with the variables inputed
  doc.setFontStyle("default");
  doc.setFontSize(12);
  doc.text(xmargin,yline, "Performer Name: " + modelname);
  yline+=6;
  doc.text(xmargin, yline, "DOB: " + bday);
  doc.text(120, yline, "Shoot Date: " + date);
  yline+=6;
  doc.text(xmargin, yline, "Address: " + address);

  yline+=15;
  doc.text(xmargin, yline, "Previous / Other Names:");
  yline+=7;
  if (document.getElementById("maidenname").value != ""){
    doc.text(xmargin, yline, document.getElementById("maidenname").value);
    yline+=6;
  }
  if (document.getElementById("alias").value != ""){
    doc.text(xmargin, yline, document.getElementById("alias").value);
    yline+=6;
  }
  if (document.getElementById("nickname").value != ""){
    doc.text(xmargin, yline, document.getElementById("nickname").value);
    yline+=6;
  }
  if (document.getElementById("stagename").value != ""){
    doc.text(xmargin, yline, document.getElementById("stagename").value);
    yline+=6;
  }
  if (document.getElementById("profname").value != ""){
    doc.text(xmargin, yline, document.getElementById("profname").value);
    yline+=6;
  }
  if (document.getElementById("oldlegal").value != ""){
    doc.text(xmargin, yline, document.getElementById("oldlegal").value);
    yline+=6;
  }
  if (document.getElementById("oldstagename").value != ""){
    doc.text(xmargin, yline, document.getElementById("oldstagename").value);
    yline+=6;
  }
  if (document.getElementById("etc1").value != ""){
    doc.text(xmargin, yline, document.getElementById("etc1").value);
    yline+=6;
  }
  if (document.getElementById("etc2").value != ""){
    doc.text(xmargin, yline, document.getElementById("etc2").value);
    yline+=6;
  }
  if (document.getElementById("etc3").value != ""){
    doc.text(xmargin, yline, document.getElementById("etc3").value);
    yline+=6;
  }

  yline+=12;
  doc.text(xmargin, yline, "Photocopy of ID");
  yline+=6;
  doc.addImage(window.idimg1, 'png', 5, yline, 100, 60);
  yline+=70;
  if (window.idimg2 != ""){
    doc.addImage(window.idimg2, 'png', 115, yline, 100, 60);
  }

  doc.text(xmargin, yline, "URLS associated with this work:");
  yline+=6;
  var i = 0;
  while (url_array[i]){
    doc.text(xmargin, yline, url_array[i]);
    yline+=5;
    i++;
  }

  // model name and date signed
  doc.text(xmargin,232, "Signed " + modelname);
  doc.text(xmargin, 240, "I declare under penalty of perjury under the laws of the United States of America that \nthe foregoing is true and correct.");
  // take the data from the signature pad (an HTML5 canvas), convert it to a png, and insert it into the PDF
  // model 1 signature
  var imgData1 = window.signaturePad1.toDataURL('image/png');
  doc.addImage(imgData1, 'png', 10, 248, 100, 15);
  doc.setLineWidth(0.25);
  doc.line(12, 264, 100, 264);





  doc.save('release.pdf');
}
