document.getElementById("open").addEventListener("click",()=>{
    document.getElementById("menu").style.visibility="visible"
    document.getElementById("menu").style.position="static"

    document.getElementById("page").style.visibility="hidden"
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden' 
})

document.getElementById("fechar").addEventListener("click",()=>{
    document.getElementById("menu").style.visibility="hidden"
    document.getElementById("menu").style.position="absolute"

    document.getElementById("page").style.visibility="visible"
    document.body.style.overflow = "visible"
})