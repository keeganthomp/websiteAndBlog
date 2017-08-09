document.body.addEventListener("keyup", e =>{
    if(e.keyCode == 27){
        window.location.href = "./index.html"
    } else {
        alert("press 'esc' to return home");
    }
})