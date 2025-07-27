/* COFFEE BEAN IMAGE */
function projImg_hover(){
    document.getElementById("projImg").src = "files/img/coffeebean_dark.png";
}
function projImg_nohover(){
    document.getElementById("projImg").src = "files/img/coffeebean_light.png";
}


/*WEB LIVE DEMO*/
function liveDemo(){
    // Get the button that opens the link
    var bneLink = document.getElementById("bne");
    var pingmeLink = document.getElementById("pingme");

    // When the user clicks the button, redirect
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
    var cppDemo = document.getElementById("playdemo-cpp");
    var rDemo = document.getElementById("playdemo-r");
  
    // Get the iframe
    var iframeDemo = document.getElementsByClassName("iframeDemo")[0];

    // Get the <span> element that closes the modal
    var btnclose = document.getElementsByClassName("close-btn")[0];

    // When the user clicks the button, open the modal 
    cppDemo.onclick = function() {
      iframeDemo.src = "https://www.youtube.com/embed/zloACRRVU2Y?si=MmCMB_TH1gvGUUgG";
      appmodal.style.display = "block";
    };
    rDemo.onclick = function() {
      iframeDemo.src = "https://www.youtube.com/embed/qtkmSLOAi0I?si=aTf4t6-v-Nwt6jG8";
      appmodal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    btnclose.onclick = function() {
      iframeDemo.src = "#";
      appmodal.style.display = "none"; 
    };
}
