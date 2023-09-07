
// NOTES 
// event listener waits for an event to happen
// parenthesis'll call the function immediately after loading so we don't use in this case 
// document.querySelector("button").addEventListener("click", handleClick)  ; 
// function handleClick() {
//     alert("i got clicked "); 
// }

// we can also use anonymouse function 
// document.querySelectorALl("set").addEventListener("click",function() {
//     alert("I got clicked!"); 
// })



// playing audio 
// var audio = new Audio('sounds/tom-1.mp3'); 
// audio.play(); 



// constructor function 
// function bellboy(name, age, yearsofexperience, city) {
//     this.name = name; 
//     this.age = age; 
//     this.yearsofexperience = yearsofexperience; 
//     this.city = city; 
// }


// new keyword is used for constructor function  
// var household = new bellboy("tom",19, 0, tokyo); 
// console.log(household.name)




var numberofitems = document.querySelectorAll(".drum").length ; 

for(i = 0 ; i < numberofitems; i++) {


    // detecting click 
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttoninnerHTML = this.innerHTML; 

        makesound(buttoninnerHTML); 
        

        
    })

    // detecting keyboard press for the whole document 
    document.addEventListener("keypress",function(event) {
        makesound(event.key); 

       buttonanimation(event.currentkey); 

    })
    
    
    

    // sound for click and soundpress 
    
        function makesound(key) {
            switch(key) { 
                case "w": 
                var audio = new Audio('sounds/tom-1.mp3'); 
                audio.play();
                break; 
    
                case "a": 
                var audio = new Audio('sounds/tom-2.mp3'); 
                audio.play();
                break; 
                
                case "s": 
                var audio = new Audio('sounds/tom-3.mp3'); 
                audio.play();
                break; 
    
                case "d": 
                var audio = new Audio('sounds/tom-4.mp3'); 
                audio.play();
                break; 
    
                case "j": 
                var audio = new Audio('sounds/snare.mp3'); 
                audio.play();
                break; 
    
                case "k": 
                var audio = new Audio('sounds/kick-bass.mp3'); 
                audio.play();
                break; 

    
                case "l": 
                var audio = new Audio('sounds/crash.mp3'); 
                audio.play();
                break; 
    
                default: console.log(key); 
            }
        }

        function buttonanimation(currentkey) {

            var activebutton = document.querySelector("." + currentkey); 
            
            
            activebutton.classList.add("pressed"); 

            setTimeout(function() {
                activebutton.classList.remove("pressed");
            },100); 
        

        }


}

