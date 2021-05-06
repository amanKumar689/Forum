var element=document.getElementsByClassName('nav-link');

CHANGER();
window.addEventListener("resize" , CHANGER); 
function CHANGER(){
    if(window.innerWidth>=768)
    {  
        console.log("fired");
    // console.log("printing more");
    for (const link of element) {
       
       link.classList.add('btn-primary');
    } 
}
else if(window.innerWidth<768)
{  
    // console.log("printing less");
    for (const link of element) {
        link.classList.remove('btn-primary');
       
     }  
    }
}

