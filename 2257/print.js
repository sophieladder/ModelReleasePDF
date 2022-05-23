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
  var sigdate = document.getElementById("sigdate").value;
  var shootID = document.getElementById("content").value;
  var address = document.getElementById("modeladdy").value;
  var urls = document.getElementById("URL").value;
  var url_array = urls.split(",");

  var nameArray = [];

  if (document.getElementById("maidenname").value != ""){
    nameArray.push(document.getElementById("maidenname").value);
  }
  if (document.getElementById("alias").value != ""){
    nameArray.push(document.getElementById("alias").value);
  }
  if (document.getElementById("nickname").value != ""){
    nameArray.push(document.getElementById("nickname").value);
  }
  if (document.getElementById("stagename").value != ""){
    nameArray.push(document.getElementById("stagename").value);
  }
  if (document.getElementById("profname").value != ""){
    nameArray.push(document.getElementById("profname").value);
  }
  if (document.getElementById("oldlegal").value != ""){
    nameArray.push(document.getElementById("oldlegal").value);
  }
  if (document.getElementById("oldstagename").value != ""){
    nameArray.push(document.getElementById("oldstagename").value);
  }
  if (document.getElementById("etc1").value != ""){
    nameArray.push(document.getElementById("etc1").value);
  }
  if (document.getElementById("etc2").value != ""){
    nameArray.push(document.getElementById("etc2").value);
  }
  if (document.getElementById("etc3").value != ""){
    nameArray.push(document.getElementById("etc3").value);
  }

  var xmargin = 15;
  var yline = 40;   // will be incremented to put each line further down on the page
  doc.setFontSize(15);
  doc.setFontStyle("bold");
  doc.text(10,15, 'RECORDS KEEPING COMPLIANCE FORM (PURSUANT TO 18 U.S.C. § 2257)');
  doc.text(10,25,"Shoot ID: " + shootID);
  doc.text(150,25, lastname);
  doc.setLineWidth(0.25);
  doc.line(10,16,200,16);

  // piece together the PDF line by line with the variables inputed
  doc.setFontSize(12);
  doc.setFontStyle("default");
  doc.setFontStyle("bold");
  doc.text(xmargin,yline, "Personal Information:");
  yline+=6;
  doc.setFontStyle("default");
  doc.text(xmargin,yline, "Performer Legal Name: " + modelname);
  doc.text(120, yline, "Shoot Date: " + date);
  yline+=6;
  doc.text(xmargin, yline, "DOB [YYYY-MM-DD]: " + bday);
  yline+=6;
  doc.text(xmargin, yline, "Address: " + address);

  yline+=15;
  doc.setFontStyle("bold");
  doc.text(xmargin, yline, "Previous / Other Names:");
  doc.setFontStyle("default");
  yline+=7;

  for (let i = 0; i < nameArray.length; i++) {
    doc.text(xmargin, yline, nameArray[i]);
    if (xmargin <= 120){
      xmargin += 50;
    }
    else {
      xmargin = 15;
      yline+=6;
    }
  }

  yline+=12;
  xmargin=15;
  doc.text(xmargin, yline, "Photocopy of ID");
  yline+=6;
  doc.addImage(window.idimg1, 'png', 5, yline, 100, 60);
  if (window.idimg2 != ""){
    doc.addImage(window.idimg2, 'png', 115, yline, 100, 60);
  }
  yline+=70;
  doc.text(xmargin, yline, "URLS associated with this work:");
  yline+=6;
  var i = 0;
  while (url_array[i]){
    doc.text(xmargin, yline, url_array[i]);
    yline+=5;
    i++;
  }

  // model name and date signed
    doc.setFontStyle("bold");
  doc.text(xmargin,215, "Signed " + modelname +" on " +sigdate);
  doc.text(xmargin, 225, "UNDER 28 U.S.C § 1746 AND THE PENALTIES OF PERJURY UNDER THE LAW OF THE \nUNITED STATES, I SWEAR THAT THE FOREGOING INFORMATION IS TRUE AND CORRECT \nAND THAT EACH OF THE IDENTIFICATION DOCUMENTS WHICH I HAVE PROVIDED \nAND OF WHICH I HAVE SIGNS THE ATTACHED COPY WAS LAWFULLY OBTAINED BY ME \nAND HAS NOT BEEN FORGED OR ALTERED IN ANY WAY");
  // take the data from the signature pad (an HTML5 canvas), convert it to a png, and insert it into the PDF
  // model 1 signature
  var imgData1 = window.signaturePad1.toDataURL('image/png');
  doc.addImage(imgData1, 'png', 10, 248, 100, 15);
  doc.setLineWidth(0.25);
  doc.line(12, 264, 100, 264);

  doc.save('release.pdf');
}
