let showNumber =(()=>{
    let numberDisplay = document.querySelector("#numberDisplay");
    let letterDisplay = document.querySelector("#areaMsg")
    let postClickCode = document.querySelector("#postClickCode"); 
    
    document.addEventListener("keydown",(tecla)=>{
        letterDisplay.innerHTML = '';
        numberDisplay.textContent = tecla.keyCode;
        postClickCode.textContent= String.fromCharCode(tecla.keyCode);
        letterDisplay.style.cssText = 'display: none';
    })
})();
