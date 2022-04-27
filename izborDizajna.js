function promjena(){
    var boja1 = document.getElementById("primarna").value;
    var elements = document.getElementsByClassName('w3-text-teal1'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.color = boja1;
	}
    var boja2 = document.getElementById("sekundarna").value;
    var elements2 = document.getElementsByClassName('w3-teal1'); 
	for(var i = 0; i < elements.length; i++){
		elements2[i].style.backgroundColor = boja2;
	}
}

function unesi(){
	document.getElementById("slika").src = document.getElementById("unesenaSlika").value;
	document.getElementById("imeiPrezime").innerHTML = document.getElementById("unesenoImeIPrezime").value;
	document.getElementById("zamimanje").innerHTML = document.getElementById("unesenoZvanje").value;
	document.getElementById("mjestoPrebivališta").innerHTML = document.getElementById("unesenoPrebivalište").value;
	document.getElementById("email").innerHTML = document.getElementById("uneseniEMail").value;
	document.getElementById("brojTelefona").innerHTML = document.getElementById("uneseniBroj").value;
}

function unesiSkill1(){
	document.getElementById("skil1naziv").innerHTML = document.getElementById("unesenoImeSkila1").value;
	if ((document.getElementById("unesenaOcjenaSkila1").value > 100) || (document.getElementById("unesenaOcjenaSkila1").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za skill 1")
	} else {
		document.getElementById("skil1posto").innerHTML = document.getElementById("unesenaOcjenaSkila1").value + "%";
		document.getElementById("skil1posto").style.width = document.getElementById("unesenaOcjenaSkila1").value + "%"
	}
}

function unesiSkill2(){
	document.getElementById("skil2naziv").innerHTML = document.getElementById("unesenoImeSkila2").value;
	if ((document.getElementById("unesenaOcjenaSkila2").value > 100) || (document.getElementById("unesenaOcjenaSkila2").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za skill 2")
	} else {
		document.getElementById("skil2posto").innerHTML = document.getElementById("unesenaOcjenaSkila2").value + "%";
		document.getElementById("skil2posto").style.width = document.getElementById("unesenaOcjenaSkila2").value + "%"
	}
}

function unesiSkill3(){
	document.getElementById("skil3naziv").innerHTML = document.getElementById("unesenoImeSkila3").value;
	if ((document.getElementById("unesenaOcjenaSkila3").value > 100) || (document.getElementById("unesenaOcjenaSkila3").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za skill 3")
	} else {
		document.getElementById("skil3posto").innerHTML = document.getElementById("unesenaOcjenaSkila3").value + "%";
		document.getElementById("skil3posto").style.width = document.getElementById("unesenaOcjenaSkila3").value + "%"
	}
}

function unesiSkill4(){
	document.getElementById("skil4naziv").innerHTML = document.getElementById("unesenoImeSkila4").value;
	if ((document.getElementById("unesenaOcjenaSkila4").value > 100) || (document.getElementById("unesenaOcjenaSkila4").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za skill 4")
	} else {
		document.getElementById("skil4posto").innerHTML = document.getElementById("unesenaOcjenaSkila4").value + "%";
		document.getElementById("skil4posto").style.width = document.getElementById("unesenaOcjenaSkila4").value + "%"
	}
}

function brojSkillova(){
	let brojSkillova = document.getElementById("uneseniBrojSkilova").value;
	if (brojSkillova == 1){
		document.getElementById("skil2").style.visibility = "hidden";
		document.getElementById("skil2").style.position = "absolute";
		document.getElementById("skil2").style.top = "-9999px";
		document.getElementById("uneseniskil2").style.visibility = "hidden";
		document.getElementById("uneseniskil2").style.position = "absolute";
		document.getElementById("uneseniskil2").style.top = "-9999px";

		document.getElementById("skil3").style.visibility = "hidden";
		document.getElementById("skil3").style.position = "absolute";
		document.getElementById("skil3").style.top = "-9999px";
		document.getElementById("uneseniskil3").style.visibility = "hidden";
		document.getElementById("uneseniskil3").style.position = "absolute";
		document.getElementById("uneseniskil3").style.top = "-9999px";

		document.getElementById("skil4").style.visibility = "hidden";
		document.getElementById("skil4").style.position = "absolute";
		document.getElementById("skil4").style.top = "-9999px";
		document.getElementById("uneseniskil4").style.visibility = "hidden";
		document.getElementById("uneseniskil4").style.position = "absolute";
		document.getElementById("uneseniskil4").style.top = "-9999px";
	} else if (brojSkillova == 2){
		document.getElementById("skil2").style.visibility = "";
		document.getElementById("skil2").style.position = "";
		document.getElementById("skil2").style.top = "";
		document.getElementById("uneseniskil2").style.visibility = "";
		document.getElementById("uneseniskil2").style.position = "";
		document.getElementById("uneseniskil2").style.top = "";

		document.getElementById("skil3").style.visibility = "hidden";
		document.getElementById("skil3").style.position = "absolute";
		document.getElementById("skil3").style.top = "-9999px";
		document.getElementById("uneseniskil3").style.visibility = "hidden";
		document.getElementById("uneseniskil3").style.position = "absolute";
		document.getElementById("uneseniskil3").style.top = "-9999px";
		

		document.getElementById("skil4").style.visibility = "hidden";
		document.getElementById("skil4").style.position = "absolute";
		document.getElementById("skil4").style.top = "-9999px";
		document.getElementById("uneseniskil4").style.visibility = "hidden";
		document.getElementById("uneseniskil4").style.position = "absolute";
		document.getElementById("uneseniskil4").style.top = "-9999px";
	} else if (brojSkillova == 3) {
		document.getElementById("skil2").style.visibility = "";
		document.getElementById("skil2").style.position = "";
		document.getElementById("skil2").style.top = "";
		document.getElementById("uneseniskil2").style.visibility = "";
		document.getElementById("uneseniskil2").style.position = "";
		document.getElementById("uneseniskil2").style.top = "";

		document.getElementById("skil3").style.visibility = "";
		document.getElementById("skil3").style.position = "";
		document.getElementById("skil3").style.top = "";
		document.getElementById("uneseniskil3").style.visibility = "";
		document.getElementById("uneseniskil3").style.position = "";
		document.getElementById("uneseniskil3").style.top = "";

		document.getElementById("skil4").style.visibility = "hidden";
		document.getElementById("skil4").style.position = "absolute";
		document.getElementById("skil4").style.top = "-9999px";
		document.getElementById("uneseniskil4").style.visibility = "hidden";
		document.getElementById("uneseniskil4").style.position = "absolute";
		document.getElementById("uneseniskil4").style.top = "-9999px";
	} else if (brojSkillova == 4){
		document.getElementById("skil2").style.visibility = "";
		document.getElementById("skil2").style.position = "";
		document.getElementById("skil2").style.top = "";
		document.getElementById("uneseniskil2").style.visibility = "";
		document.getElementById("uneseniskil2").style.position = "";
		document.getElementById("uneseniskil2").style.top = "";

		document.getElementById("skil3").style.visibility = "";
		document.getElementById("skil3").style.position = "";
		document.getElementById("skil3").style.top = "";
		document.getElementById("uneseniskil3").style.visibility = "";
		document.getElementById("uneseniskil3").style.position = "";
		document.getElementById("uneseniskil3").style.top = "";

		document.getElementById("skil4").style.visibility = "";
		document.getElementById("skil4").style.position = "";
		document.getElementById("skil4").style.top = "";
		document.getElementById("uneseniskil4").style.visibility = "";
		document.getElementById("uneseniskil4").style.position = "";
		document.getElementById("uneseniskil4").style.top = "";
	} else {
		alert("Unesen je pogrešan broj skillova (min: 1 max: 4)")
	}
}

function brojJezika(){
	let brojJezika = document.getElementById("uneseniBrojJezika").value;
	if (brojJezika == 1){
		document.getElementById("jezik2").style.visibility = "hidden";
		document.getElementById("jezik2").style.position = "absolute";
		document.getElementById("jezik2").style.top = "-9999px";
		document.getElementById("uneseniJezik2").style.visibility = "hidden";
		document.getElementById("uneseniJezik2").style.position = "absolute";
		document.getElementById("uneseniJezik2").style.top = "-9999px";

		document.getElementById("jezik3").style.visibility = "hidden";
		document.getElementById("jezik3").style.position = "absolute";
		document.getElementById("jezik3").style.top = "-9999px";
		document.getElementById("uneseniJezik3").style.visibility = "hidden";
		document.getElementById("uneseniJezik3").style.position = "absolute";
		document.getElementById("uneseniJezik3").style.top = "-9999px";
	} else if (brojJezika == 2){
		document.getElementById("jezik2").style.visibility = "";
		document.getElementById("jezik2").style.position = "";
		document.getElementById("jezik2").style.top = "";
		document.getElementById("uneseniJezik2").style.visibility = "";
		document.getElementById("uneseniJezik2").style.position = "";
		document.getElementById("uneseniJezik2").style.top = "";

		document.getElementById("jezik3").style.visibility = "hidden";
		document.getElementById("jezik3").style.position = "absolute";
		document.getElementById("jezik3").style.top = "-9999px";
		document.getElementById("uneseniJezik3").style.visibility = "hidden";
		document.getElementById("uneseniJezik3").style.position = "absolute";
		document.getElementById("uneseniJezik3").style.top = "-9999px";
	} else if (brojJezika == 3) {
		document.getElementById("jezik2").style.visibility = "";
		document.getElementById("jezik2").style.position = "";
		document.getElementById("jezik2").style.top = "";
		document.getElementById("uneseniJezik2").style.visibility = "";
		document.getElementById("uneseniJezik2").style.position = "";
		document.getElementById("uneseniJezik2").style.top = "";

		document.getElementById("jezik3").style.visibility = "";
		document.getElementById("jezik3").style.position = "";
		document.getElementById("jezik3").style.top = "";
		document.getElementById("uneseniJezik3").style.visibility = "";
		document.getElementById("uneseniJezik3").style.position = "";
		document.getElementById("uneseniJezik3").style.top = "";
	} else {
		alert("Unesen je pogrešan broj jezika (min: 1 max: 3)")
	}
}

function unesiJezik1(){
	document.getElementById("jezik1naziv").innerHTML = document.getElementById("unesenoImeJezika1").value;
	if ((document.getElementById("unesenaOcjenaJezika1").value > 100) || (document.getElementById("unesenaOcjenaJezika1").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za jezik 1")
	} else {
		document.getElementById("jezik1posto").style.width = document.getElementById("unesenaOcjenaJezika1").value + "%"
	}
}

function unesiJezik2(){
	document.getElementById("jezik2naziv").innerHTML = document.getElementById("unesenoImeJezika2").value;
	if ((document.getElementById("unesenaOcjenaJezika2").value > 100) || (document.getElementById("unesenaOcjenaJezika2").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za jezik 2")
	} else {
		document.getElementById("jezik2posto").style.width = document.getElementById("unesenaOcjenaJezika2").value + "%"
	}
}

function unesiJezik3(){
	document.getElementById("jezik3naziv").innerHTML = document.getElementById("unesenoImeJezika3").value;
	if ((document.getElementById("unesenaOcjenaJezika3").value > 100) || (document.getElementById("unesenaOcjenaJezika3").value < 0)){
		alert ("Unijeli ste pogrešnu ocjenu za jezik 3")
	} else {
		document.getElementById("jezik3posto").style.width = document.getElementById("unesenaOcjenaJezika3").value + "%"
	}
}

function unesiUstanovu1(){
	document.getElementById("edukacija1ime").innerHTML = document.getElementById("unesenoImeUstanove1").value;
	document.getElementById("edukacija1datum").innerHTML = document.getElementById("godPocetka1").value + " - " + document.getElementById("godKraja1").value;
	document.getElementById("edukacija1zvanje").innerHTML = document.getElementById("unesenoZvanjeUstanove1").value;
}

function unesiUstanovu2(){
	document.getElementById("edukacija2ime").innerHTML = document.getElementById("unesenoImeUstanove2").value;
	document.getElementById("edukacija2datum").innerHTML = document.getElementById("godPocetka2").value + " - " + document.getElementById("godKraja2").value;
	document.getElementById("edukacija2zvanje").innerHTML = document.getElementById("unesenoZvanjeUstanove2").value;
}

function unesiUstanovu3(){
	document.getElementById("edukacija3ime").innerHTML = document.getElementById("unesenoImeUstanove3").value;
	document.getElementById("edukacija3datum").innerHTML = document.getElementById("godPocetka3").value + " - " + document.getElementById("godKraja3").value;
	document.getElementById("edukacija3zvanje").innerHTML = document.getElementById("unesenoZvanjeUstanove3").value;
}

function brojUstanova(){
	let brojUstanova = document.getElementById("uneseniBrojUstanova").value;
	if (brojUstanova == 1){
		document.getElementById("edukacija2").style.visibility = "hidden";
		document.getElementById("edukacija2").style.position = "absolute";
		document.getElementById("edukacija2").style.top = "-9999px";
		document.getElementById("ustanova2").style.visibility = "hidden";
		document.getElementById("ustanova2").style.position = "absolute";
		document.getElementById("ustanova2").style.top = "-9999px";

		document.getElementById("edukacija3").style.visibility = "hidden";
		document.getElementById("edukacija3").style.position = "absolute";
		document.getElementById("edukacija3").style.top = "-9999px";
		document.getElementById("ustanova3").style.visibility = "hidden";
		document.getElementById("ustanova3").style.position = "absolute";
		document.getElementById("ustanova3").style.top = "-9999px";
	} else if (brojUstanova == 2){
		document.getElementById("edukacija2").style.visibility = "";
		document.getElementById("edukacija2").style.position = "";
		document.getElementById("edukacija2").style.top = "";
		document.getElementById("ustanova2").style.visibility = "";
		document.getElementById("ustanova2").style.position = "";
		document.getElementById("ustanova2").style.top = "";

		document.getElementById("edukacija3").style.visibility = "hidden";
		document.getElementById("edukacija3").style.position = "absolute";
		document.getElementById("edukacija3").style.top = "-9999px";
		document.getElementById("ustanova3").style.visibility = "hidden";
		document.getElementById("ustanova3").style.position = "absolute";
		document.getElementById("ustanova3").style.top = "-9999px";
	} else if (brojUstanova == 3) {
		document.getElementById("edukacija2").style.visibility = "";
		document.getElementById("edukacija2").style.position = "";
		document.getElementById("edukacija2").style.top = "";
		document.getElementById("ustanova2").style.visibility = "";
		document.getElementById("ustanova2").style.position = "";
		document.getElementById("ustanova2").style.top = "";

		document.getElementById("edukacija3").style.visibility = "";
		document.getElementById("edukacija3").style.position = "";
		document.getElementById("edukacija3").style.top = "";
		document.getElementById("ustanova3").style.visibility = "";
		document.getElementById("ustanova3").style.position = "";
		document.getElementById("ustanova3").style.top = "";
	} else {
		alert("Unesen je pogrešan broj obrazovnih ustanova (min: 1 max: 3)")
	}
}

function iskustvo(){
	let izbor = document.getElementById("iskustvo").value;
	if (izbor == "Ne"){
		document.getElementById("radnoIskustvo").style.visibility = "hidden";
		document.getElementById("radnoIskustvo").style.position = "absolute";
		document.getElementById("radnoIskustvo").style.top = "-9999px";

		document.getElementById("imaIskustvo").style.visibility = "hidden";
		document.getElementById("imaIskustvo").style.position = "absolute";
		document.getElementById("imaIskustvo").style.top = "-9999px";
	} else if (izbor == "Da"){
		document.getElementById("radnoIskustvo").style.visibility = "";
		document.getElementById("radnoIskustvo").style.position = "";
		document.getElementById("radnoIskustvo").style.top = "";

		document.getElementById("imaIskustvo").style.visibility = "";
		document.getElementById("imaIskustvo").style.position = "";
		document.getElementById("imaIskustvo").style.top = "";
	}
}

function brojPoslova(){
	let brojPoslova = document.getElementById("uneseniBrojPoslova").value;
	if (brojPoslova == 1){
		document.getElementById("unosPosao2").style.visibility = "hidden";
		document.getElementById("unosPosao2").style.position = "absolute";
		document.getElementById("unosPosao2").style.top = "-9999px";
		document.getElementById("posao2").style.visibility = "hidden";
		document.getElementById("posao2").style.position = "absolute";
		document.getElementById("posao2").style.top = "-9999px";

		document.getElementById("unosPosao3").style.visibility = "hidden";
		document.getElementById("unosPosao3").style.position = "absolute";
		document.getElementById("unosPosao3").style.top = "-9999px";
		document.getElementById("posao3").style.visibility = "hidden";
		document.getElementById("posao3").style.position = "absolute";
		document.getElementById("posao3").style.top = "-9999px";
	} else if (brojPoslova == 2){
		document.getElementById("unosPosao2").style.visibility = "";
		document.getElementById("unosPosao2").style.position = "";
		document.getElementById("unosPosao2").style.top = "";
		document.getElementById("posao2").style.visibility = "";
		document.getElementById("posao2").style.position = "";
		document.getElementById("posao2").style.top = "";

		document.getElementById("unosPosao3").style.visibility = "hidden";
		document.getElementById("unosPosao3").style.position = "absolute";
		document.getElementById("unosPosao3").style.top = "-9999px";
		document.getElementById("posao3").style.visibility = "hidden";
		document.getElementById("posao3").style.position = "absolute";
		document.getElementById("posao3").style.top = "-9999px";
	} else if (brojPoslova == 3) {
		document.getElementById("unosPosao2").style.visibility = "";
		document.getElementById("unosPosao2").style.position = "";
		document.getElementById("unosPosao2").style.top = "";
		document.getElementById("posao2").style.visibility = "";
		document.getElementById("posao2").style.position = "";
		document.getElementById("posao2").style.top = "";

		document.getElementById("unosPosao3").style.visibility = "";
		document.getElementById("unosPosao3").style.position = "";
		document.getElementById("unosPosao3").style.top = "";
		document.getElementById("posao3").style.visibility = "";
		document.getElementById("posao3").style.position = "";
		document.getElementById("posao3").style.top = "";
	} else {
		alert("Unesen je pogrešan broj obrazovnih ustanova (min: 1 max: 3)")
	}
}

function unesiPosao1(){
	document.getElementById("posao1ime").innerHTML = document.getElementById("unesenoImePosla1").value;
	document.getElementById("posao1datum").innerHTML = document.getElementById("mjesecPocetkaPosla1").value + " " + document.getElementById("godPocetkaPosla1").value + " - " + document.getElementById("mjesecKrajaPosla1").value + " "  + document.getElementById("godKrajaPosla1").value;
	document.getElementById("posao1zvanje").innerHTML = document.getElementById("unesenaPozicijaPosla1").value;
}

function unesiPosao2(){
	document.getElementById("posao2ime").innerHTML = document.getElementById("unesenoImePosla2").value;
	document.getElementById("posao2datum").innerHTML = document.getElementById("mjesecPocetkaPosla2").value + " " + document.getElementById("godPocetkaPosla2").value + " - " + document.getElementById("mjesecKrajaPosla2").value + " "  + document.getElementById("godKrajaPosla2").value;
	document.getElementById("posao2zvanje").innerHTML = document.getElementById("unesenaPozicijaPosla2").value;
}

function unesiPosao3(){
	document.getElementById("posao3ime").innerHTML = document.getElementById("unesenoImePosla3").value;
	document.getElementById("posao3datum").innerHTML = document.getElementById("mjesecPocetkaPosla3").value + " " + document.getElementById("godPocetkaPosla3").value + " - " + document.getElementById("mjesecKrajaPosla3").value + " "  + document.getElementById("godKrajaPosla3").value;
	document.getElementById("posao3zvanje").innerHTML = document.getElementById("unesenaPozicijaPosla3").value;
}

