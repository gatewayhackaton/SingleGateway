window.onload = ()=>{
    let bnt = document.getElementById("rpButton");
    let close = document.getElementsByClassName("close");
    bnt.addEventListener("click",(e)=>{
        e.preventDefault();
        let modal = document.getElementsByClassName("modal");
        modal[0].style.display = "block";
    });
    close[0].addEventListener("click", (e)=>{
        e.preventDefault();
        let modal = document.getElementsByClassName("modal");
        modal[0].style.display = "none";
    })
}