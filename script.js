let div = document.querySelector("div");
let obj = {
    A : "sounds/1.mp3",
    B : "sounds/2.mp3",
    C : "sounds/3.mp3",
    D : "sounds/4.mp3",
    E : "sounds/5.mp3",
    F : "sounds/6.mp3",
    G : "sounds/7.mp3",
    H : "sounds/8.mp3",
    I : "sounds/9.mp3",
    J : "sounds/10.mp3",
    K : "sounds/11.mp3",
}
let h4 = document.querySelector("h4");

div.addEventListener('click', function(ele){
   console.dir(ele.target.innerHTML);
  
     let key = ele.target.innerHTML;
    //  console.log(obj[sound]);
     let currentSound = null;
     if(obj[key]){
        currentSound = new Audio(obj[key]).play();        
     }

});