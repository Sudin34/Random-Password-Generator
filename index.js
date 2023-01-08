const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let GenerateBtn= document.getElementById("generate-Btn")
let passOne=document.getElementById("pass-one")
let passTwo=document.getElementById("pass-two")
let buttonClicks=1
let ErrorMsg=document.getElementById("error")
GenerateBtn.addEventListener('click',function(){
    let PassLength=document.getElementById("length-el").value
    if(PassLength===""){
        ErrorMsg.textContent="Please specify!"
    } else{
    ErrorMsg.textContent=""
    buttonClicks+=1
    if(buttonClicks>1){
         passOne.textContent=""
          passTwo.textContent =""
          }
    for(i=0;i<PassLength;i++){
        
    randomOne=Math.floor(Math.random()*62)
    randomPassOne=characters[randomOne]
    passOne.textContent += randomPassOne
    randomTwo=Math.floor(Math.random()*62)
    randomPassTwo=characters[randomTwo]
    passTwo.textContent += randomPassTwo
    
    
    }
    }
})

