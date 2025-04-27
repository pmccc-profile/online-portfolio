/* COFFEE BEAN IMAGE */
function projImg_hover(){
    document.getElementById("projImg").src = "files/img/coffeebean_dark.png";
}
function projImg_nohover(){
    document.getElementById("projImg").src = "files/img/coffeebean_light.png";
}
function projImg_hover1(){
    document.getElementById("projImg1").src = "files/img/coffeebean_dark.png";
}
function projImg_nohover1(){
    document.getElementById("projImg1").src = "files/img/coffeebean_light.png";
}

/*WEB LIVE DEMO*/
function liveDemo(){
    var bneLink = document.getElementById("bne");
    var pingmeLink = document.getElementById("pingme");

    // When the user clicks the button
    bneLink.onclick = function() {
      window.open("https://pmccc-profile.github.io/bugs-n-errors/", "_blank");
    };
    pingmeLink.onclick = function() {
      window.open("https://pmccc-profile.github.io/ping-me/", "_blank");
    };
}


/* SOFTWARE APPLICATIONS MODAL */
function popModal(){
    // Get the modal
    var appmodal = document.getElementById("appModal");

    // Get the button that opens the modal
    var playvid = document.getElementById("playdemo");

    // Get the <span> element that closes the modal
    var btnclose = document.getElementsByClassName("close-btn")[0];

    // When the user clicks the button, open the modal 
    playvid.onclick = function() {
      appmodal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    btnclose.onclick = function() {
      appmodal.style.display = "none"; 
    };
}