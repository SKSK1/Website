document.getElementById("welcome").style.color = "white";

window.addEventListener('scroll',(event) => {
    document.getElementById("top").style.visibility = "visible";
    document.getElementById("bar").style.position = "fixed";
    document.getElementById("welcome").style.padding = "70px";
    document.getElementById('bar').style.backgroundImage = 'linear-gradient(to bottom, rgba(44,44,44,1) 70%, rgba(44,44,44,0.5) 85%, rgba(44,44,44,0) 100%)';
});