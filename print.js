function printtopdf() {
  if (signaturePad1.isEmpty() ||signaturePad2.isEmpty() || document.getElementById("model1name").value == "" || document.getElementById("model2name").value == "" || document.getElementById("model1addy").value == "" || document.getElementById("model2addy").value == "" || document.getElementById("content").value == "" || document.getElementById("locality").value == "" || document.getElementById("sigdate").value == "") {
    // checks all the fields, if one is empty or at its default value returns an error message instead of creating the PDF
    return alert("Information or signature missing, please review the document then try again.");
  }
  else {
    //make the PDF

var name ="";     // whether the content is shared or exclusive
  if (formtype =="shared"){
    name = "PARTIES";
  }
  else {
    name = "OWNER";
  }

  var doc = new jsPDF({format:"letter"});
  var date = document.getElementById("date").value;
  var xmargin = 15; // default space from left edge of the page
  var yline = 30;   // will be incremented to put each line further down on the page
  doc.setFontSize(15);

  if (formtype == "shared"){
    doc.text(30,15, 'Shared Content Co-Model Release Agreement (the \"Agreement\")');
  }
  else {
    doc.text(30,15, 'Exclusive Content Model Release Agreement (the \"Agreement\")');
  }


  // piece together the PDF line by line with the variables inputed
  doc.setFontSize(9);
  if (formtype == "shared"){
    doc.text(xmargin, yline, 'For good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, I, ');
    yline+=8;
  }
  else {
    doc.text(xmargin, yline, 'In favor of');
  }
  doc.text(xmargin+30,yline, `${document.getElementById("model1name").value}, residing at ${document.getElementById("model1addy").value}`);
  yline+=5;

  if (formtype == "shared"){ doc.text(xmargin,yline, 'AND'); }
  else { doc.text(xmargin+30, yline, "(hereinafter referred to as the 'OWNER')"); yline+=5;}
  yline+=5;
  if (formtype == "exclude"){
    doc.text(xmargin, yline, "For good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, I,");
    yline+=5;
  }
  doc.text(xmargin+30,yline, `${document.getElementById("model2name").value}, residing at ${document.getElementById("model2addy").value}`);

  if (document.getElementById("3count").checked){
    yline+=5;
    doc.text(xmargin,yline, 'AND');
    yline+=5;
    doc.text(xmargin+30,yline, `${document.getElementById("model3name").value}, residing at ${document.getElementById("model3addy").value}`);
  }
  if (document.getElementById("4count").checked){
    yline+=5;
    doc.text(xmargin,yline, 'AND');
    yline+=5;
    doc.text(xmargin+30,yline, `${document.getElementById("model3name").value}, residing at ${document.getElementById("model3addy").value}`);
    yline+=5;
    doc.text(xmargin,yline, 'AND');
    yline+=5;
    doc.text(xmargin+30,yline, `${document.getElementById("model4name").value}, residing at ${document.getElementById("model4addy").value}`);
  }

  yline+=8;
  if (formtype =="shared"){
    doc.text(xmargin,yline, 'hereinafter referred to collectively as the “PARTIES”, and individually as a “PARTY” all hereby agree as follows:')
  }
  else {
    doc.text(xmargin,yline, 'hereby agree as follows')
  }


    // draws a line between the top of the document and the clauses
    yline+=10;
    doc.setLineWidth(0.25);
    doc.line(60, yline, 140, yline);
    yline+=10;

  doc.text(xmargin,yline, '1. I hereby represent that I am of sound mind and body, acting of my own free will and fully understand the terms of this\nAgreement, and I am legally able to execute this Agreement;')
  yline+=13;
  doc.text(xmargin,yline, '2. I hereby agree and represent that I am AT LEAST 18 YEARS OLD (OR THE AGE OF MAJORITY IN THE JURISDICTION\nIN WHICH I LIVE OR RESIDE FOR PLACES WHERE THE AGE OF MAJORITY IS OVER 18 YEARS) at the time that the Content\nis created. Further, I fully understand and acknowledge the adult nature of the Content and hereby consent to appear fully and/or\npartially nude in such Content; ')
  yline+=20;
  doc.text(xmargin,yline, `3. I hereby agree to be photographed, recorded and/or videotaped by or on behalf of the ${name} in connection with my participation\nin ${document.getElementById("content").value} (hereinafter referred to as the "Content") on ${date}`);
  yline+=13;

  if (formtype == "shared"){
    doc.text(xmargin, yline, '4. I hereby acknowledge that ownership of the Content is jointly shared between both Parties, and that I do not hold exclusive rights to\nreproduce, sell, license, rent or otherwise distribute and publish, modify, edit and alter the Content;')
  }
  else {
    doc.text(xmargin, yline, '4. I hereby acknowledge the Content is sole property of OWNER, and that I do not hold any rights to reproduce, sell, license, rent or \notherwise distribute and publish, modify, edit and alter the Content unless given written permission by the OWNER;')
  }
  yline+=13;
  doc.text(xmargin, yline, "5. I hereby represent and acknowledge that I am solely responsible for the nature of the Content in which I decided to participate \nand that I am solely responsible to bear all risks associated with my participation in the Content. I will not participate in any content \nthat could be deemed illegal or illicit, or involving minors. Furthermore, I agree not to participate in content that could violate a \nthird party's intellectual copyright or that violates another individual's privacy or image;");
  yline+=20;

  // selling conditions
  doc.text(xmargin, yline, `6.  I hereby grant the ${name} permission to use, reproduce, sell, license, rent or otherwise distribute and publish, modify, edit and alter \nthe Content, except as limited below in 6.1 - 6.6. Furthermore, I hereby agree and authorize the ${name} to publish the Content online, \non the platform of their choice, including any Web platform where independent content uploaders can upload, publish, license and sell \ntheir original adult videos, services or other tangibles goods to final users and where such final users may download the Content, including \nall related subdomains or Web sites of such platform (all together referred to as the "Platform"), except as limited by 6.1 - 6.6, and such \nauthorization is given for an unlimited time;`);
  yline+=27;

  if (document.getElementById("minvalue").value == 0){
    doc.text(xmargin+10, yline,`6.1 I hereby grant the ${name} permission to sell the Content with no minimum value`);
    yline+=5;
  }
  else {
    if (document.getElementsByName("group1")[0].checked){
      doc.text(xmargin+10, yline, `6.1 The ${name} shall NOT sell the Content, in whole or in part, for a value of less than \$${document.getElementById("minvalue").value} USD unless given express \n\twritten permission by the other party.`);
      yline+=9;
    }
    else {
      doc.text(xmargin+10, yline, `6.1 The ${name} shall NOT sell the Content, in whole or in part, for a value of less than \$${document.getElementById("minvalue").value} USD within the first\n\t${document.getElementById("selltime").value} after release unless given express written permission by the other party.`);
      yline+=9;
    }
  }
  if (document.getElementById("mintime").value == 0){
    doc.text(xmargin+10, yline,`6.2 The ${name} agree(s) to not upload any of the Content to free-to-view services`);
  }
  else if (!document.getElementById("FTV").checked){
    doc.text(xmargin+10, yline,`6.2 The ${name} SHALL be allowed to upload the Content, in whole or in part, to free-to-view services`);
  }
  else {
    if(document.getElementById("delay").checked){
      doc.text(xmargin+10, yline, `6.2 The ${name} shall NOT upload more than ${document.getElementById("mintime").value} minutes of the Content to free-to-view services for the first ${document.getElementById("freedelay").value} months \n\tafter filming, after which both parties may upload the whole length video.`);
      yline+=3;
    }
    else {
      doc.text(xmargin+10, yline, `6.2 The ${name} shall NOT upload more than ${document.getElementById("mintime").value} minutes of the Content to free-to-view services.`);
    }
  }
  yline+=5;
  doc.text(xmargin+10, yline, `6.3 I hereby${document.getElementById("bundle").value} grant the ${name} permission to sell the Content with other pieces of intellectual property \n\towned by that party as a single unit for a reduced group price (a “Bundle”).`);
  yline+=8;
  doc.text(xmargin+10, yline, `6.4 I hereby${document.getElementById("giveaway").value} grant the ${name} permission to give away the Content as a part of contests, promotions, \n\trewards, or other services.`);
  yline+=8;
  doc.text(xmargin+10, yline, `6.5 I hereby${document.getElementById("premium").value} grant the ${name} permission to upload the Content to paid subscription services run by the ${name}\n\t(eg. Member Website, OnlyFans, Fansly, etc)`);
  yline+=8;
  doc.text(xmargin+10, yline, `6.6 I hereby${document.getElementById("premium").value} grant the ${name} permission to upload and/or license the Content to 3rd party paid subscription \n\tand VOD (Video-On-Demand) services. (eg. Xvideos Red, Faphouse, Adult Empire, HotMovies)`);
  yline+=8;

  if (document.getElementById("SUB").value == "SHARE"){
    doc.text(xmargin+10, yline, `6.7 The ${name} may license / sell the re-sale rights for the content to a 3rd party for a standard or \n\tnegotiated up-front fee if it is then split evenly among all co-performers.`);
  }
  if (document.getElementById("SUB").value == "DO NOT"){
    doc.text(xmargin+10, yline, `6.7 The ${name} may not license / sell the re-sale rights for the content to a 3rd party for a standard or \n\tnegotiated up-front fee .`);
  }
  if (document.getElementById("SUB").value == "DO"){
    doc.text(xmargin+10, yline, `6.7 The ${name} may license / sell the re-sale rights for the content to a 3rd party for a standard \n\tor negotiated fee which is solely theirs.`);
  }


  yline+=8;
  if (document.getElementById('timecheck').checked){
    doc.text(xmargin+10, yline, `6.8 The ${name} shall not release the content before ${document.getElementById('releasedate').value}`);
  }
  else {
    doc.text(xmargin+10, yline, `6.8 The ${name} may publish the content at the date of their choosing.`);
  }
 
  yline+=10;
  doc.text(xmargin, yline, '7. I hereby agree to not disclose the other party’s legal name or address (hereinafter referred to as "Confidential Information"), \nexcept as required by the Platform to sell the Content, or as required by the law, and shall refrain from disclosing such Confidential \nInformation to any third party without prior, written approval from the other party, and shall protect such Confidential Information \nfrom inadvertent disclosure to a third party using the same care and diligence that I use to protect my own confidential information, \nbut in no case less than reasonable care. I shall ensure that each of my employees, officers, directors, or agents who has access to \nConfidential Information disclosed under this Agreement is informed of its confidential nature and is required to abide by the terms \nof this Agreement. I shall promptly notify the affected party of any disclosure of such Confidential Information in violation of this \nAgreement or of any subpoena or other legal process requiring production or disclosure of said Confidential Information;');

  doc.addPage("letter","p");  // filled up first page, create new page
  yline = 15;
  doc.text(xmargin, yline, '8. I hereby understand and agree that the Content may be searchable by others through the Platform itself and through others \npartnered or networked entities of the Platform or the ' + name + '. Furthermore, I understand and agree that the Content may be searchable \nby publicly available search engines, and it is my sole responsibility should I wish not to appear, be found, or be \nremoved of such search engines; ');
  yline += 20;

  doc.text(xmargin, yline, `9. If the Content is found on a site(s) that is not indicated related to the ${name}, or their licensees, as the case may be, I shall \nhave full rights to demand that the Content be taken down from such unapproved site and/or destroyed, the whole at my own costs; `);
  yline+=13;
  doc.text(xmargin, yline, `10. I hereby release, discharge and undertake to indemnify and hold harmless the ${name} and the Platform from and against \nany and all claims, liability, costs, losses, damages or injuries of any kind arising out of or related to my participation in the Content. \nWithout limiting the generality of the foregoing, I agree that the ${name} have neither made nor will be in any manner responsible or \nliable for any warranty, representation or guarantee, express or implied, in fact or in law, in connection with the Content or my participation \nin the Content. I further release all rights to bring any claim, action or proceeding against the ${name} and the Platform.`);
  yline+=23;
  doc.text(xmargin, yline, '11 I fully understand that the present declaration is binding upon my heirs and legal successors. This Agreement shall be binding \nupon, inure to the benefit of, and be enforceable by the Parties and the Platform, and their respective successors and assigns.');
  yline+=13;
  doc.text(xmargin, yline, '12. I acknowledge that I have reviewed this Agreement in its entirety and understand its terms and, further, that I have had the \nopportunity to discuss this Agreement with my own counsel. This Agreement shall be deemed to have been jointly drafted by all parties, \nand in construing and interpreting this Agreement, no provision shall be construed and interpreted for or against any of the parties \nhereto because such provision or any other provision of the Agreement as a whole is purportedly prepared or requested by such party.');
  yline+=20;
  doc.text(xmargin, yline, '13. In the event that any provision or portion of this Agreement shall be determined to be invalid or unenforceable for any reason, \nin whole or in part, the remaining provisions of this Agreement shall be unaffected thereby and shall remain in full force and effect \nto the fullest extent permitted by law. ');
  yline+=16;
  doc.text(xmargin, yline, '14. I agree and understand that I am solely responsible to comply with all applicable laws and regulations in my location as well as \nall laws and regulations applicable to my participation in the Content.');
  yline+=13;
  doc.text(xmargin, yline, `15. This Agreement shall be governed by and construed in accordance with the laws of ${document.getElementById('locality').value}. The parties irrevocably agree \nthat the courts of ${document.getElementById('locality').value} shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection \nwith this Agreement or its subject matter or formation (including non-contractual disputes or claims).`);
  yline+=25;

  // model 1 name and date signed
  doc.text(xmargin, yline, `${document.getElementById("model1name").value} \nRead and accepted this day, ${document.getElementById('sigdate').value}`);
  // take the data from the signature pad (an HTML5 canvas), convert it to a png, and insert it into the PDF
  // model 1 signature
  var imgData1 = window.signaturePad1.toDataURL('image/png');
  doc.addImage(imgData1, 'png', 10, yline+4, 100, yline-440);
  doc.setLineWidth(0.25);
  doc.line(12, yline+13, 100, yline+13);

  yline+=25;
  // model 2 name and date
  doc.text(xmargin, yline, `${document.getElementById("model2name").value} \nRead and accepted this day, ${document.getElementById('sigdate').value}`);

  // model 2 signature
  var imgData2 = window.signaturePad2.toDataURL('image/png');
  doc.addImage(imgData2, 'png', 10, yline+4, 100, yline-480);
  doc.line(12, yline+13, 100, yline+13);

  if (document.getElementById("3count").checked){
    yline+=25;
    // model 3 name and date
    doc.text(xmargin, yline, `${document.getElementById("model3name").value} \nRead and accepted this day, ${document.getElementById('sigdate').value}`);
    // model 3 signature
    var imgData3 = window.signaturePad3.toDataURL('image/png');
    doc.addImage(imgData3, 'png', 10, yline+4, 100, yline-480);
    doc.line(12, yline+13, 100, yline+13);
  }
  if (document.getElementById("4count").checked){
    yline+=25;
    // model 3 name and date
    doc.text(xmargin, yline, `${document.getElementById("model3name").value} \nRead and accepted this day, ${document.getElementById('sigdate').value}`);
    // model 3 signature
    var imgData3 = window.signaturePad3.toDataURL('image/png');
    doc.addImage(imgData3, 'png', 10, yline+4, 100, yline-480);
    doc.line(12, yline+13, 100, yline+13);
    yline+=25;
    // model 4 name and date
    doc.text(xmargin, yline, `${document.getElementById("model4name").value} \nRead and accepted this day, ${document.getElementById('sigdate').value}`);
    // model 4 signature
    var imgData4 = window.signaturePad4.toDataURL('image/png');
    doc.addImage(imgData4, 'png', 10, yline+4, 100, yline-480);
    doc.line(12, yline+13, 100, yline+13);
  }

  // witness signature, if applicable
  yline+=25;
  if (document.getElementById("witcheck").checked){
    doc.text(xmargin, yline, `Witness: ${document.getElementById("witness").value}`);
    var imgWit = window.witnesssig.toDataURL('image/png');
    doc.addImage(imgWit, 'png', 10, yline+4, 100, yline-520);
    doc.line(12, yline+13, 100, yline+13);
  }

  // adds another page for the IDs
  doc.addPage("letter","p");
  doc.addImage(window.idimg1, 'png', 5, 10, 106, 66);
  doc.addImage(window.idimg2, 'png', 105, 10, 106, 66);
  if (document.getElementById("3count").checked){
    doc.addImage(window.idimg3, 'png', 5, 80, 106, 66);
  }
  if (document.getElementById("4count").checked){
    doc.addImage(window.idimg3, 'png', 5, 80, 106, 66);
    doc.addImage(window.idimg4, 'png', 105, 80, 106, 66);
  }

  doc.save('release.pdf');
}

}
