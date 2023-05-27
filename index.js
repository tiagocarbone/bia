botao = document.getElementById("myBtn")
p = document.getElementById("myP")


botao.addEventListener("click", ()=> {
    botao.style.display = "none";
    p.style.display = "flex";
})