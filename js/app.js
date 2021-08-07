

class Tamagotchi { 
    constructor(name) {
        this.name = name
        this.hunger = 0
        this.boredom = 0
        this.sleepy = 0
        this.age = 0
        this.alive = true

    }

   ageUp() {
       this.age += 0.25 

   }

   morph() {
       if (this.age >= 1) {
            let img = document.querySelector("#pet")
            img.style.width = "300px"
            img.style.height = "300px"

            let imgCon = document.querySelector(".imgContainer")
            imgCon.style.top = "25%" ;
            imgCon.style.left = "40%" ;

            // document.body.style.image.src = 'i.imgur.com/qPupfNO.png'
            
            // console.log('picture change')
       }
   }

    eatFood() {

        if(this.hunger > 0 ) {
            this.hunger -= 3
                if(this.hunger < 0) {
                    this.hunger = 0
                }
        // show pet bouncing up and down
        console.log('sleepy:', this.sleepy, ' age:', this.age, ' hunger:',this.hunger, ' boredom:', this.boredom)
            }
    }



    playToy () {
        //show pet moving side
        if(this.boredom > 0 ) {
        this.boredom -= 3
            if(this.boredom < 0) {
                this.boredom = 0
            }
        console.log('sleepy:', this.sleepy, ' age:', this.age, ' hunger:',this.hunger, ' boredom:', this.boredom)
        }
    }


    lightsOut() {
        //change background to dark blue (w/ nightsky pic?)
        //  darkBG.getElementsByClassName.backgroundcolor = 'navy'

        this.boredom += 1
        this.sleepy -= 5
        this.age += 1
        this.hunger += 2

        console.log('sleepy:', this.sleepy, ' age:', this.age, ' hunger:',this.hunger, ' boredom:', this.boredom)
    }

    
}

//=======Start with Prompt========

let userInput = prompt('What is your pets name?')
const newPet = new Tamagotchi(userInput)
console.log(newPet)




// Buttons =======================

// feedMe.addEventListener('click', () => gamePlay.feedMePlz())


const feedButton = document.querySelector('#left-feed')
feedButton.addEventListener("click", () => newPet.eatFood())

const playButton = document.querySelector('#middle-sleep')
playButton.addEventListener("click", () => newPet.playToy())

const sleepButton = document.querySelector('#right-play')  
sleepButton.addEventListener("click", () => newPet.lightsOut())

//=============================


// document.getElementById("animate").animate(
//     dead 
//   )

//   let dead = [
//     // { color: '#431236', offset: 0.3},
//     { transform: 'rotate(360deg)' },
//   ];

// let rotate360 = [
//     { transform: 'rotate(360deg)' }
//   ];

    
  

//======================start============================



//===== Life funciton/variable/ increase time? 

let petLife = startLife(newPet)
console.log('OUTSIDE' , newPet.alive)


function startLife() {
    return window.setInterval(function(){
        newPet.ageUp()
        newPet.hunger += 0.5
        newPet.boredom += 0.5
        newPet.sleepy += 0.25
        newPet.morph();
        

        console.log( 'INSIDE', newPet.alive)


        //========== Metric Display ============


        let ageDisplay = document.querySelector("#age-display");
        ageDisplay.innerHTML = `Age: ${newPet.age}`


        let hungerDisplay = document.getElementById("hunger-display");
        hungerDisplay.innerHTML = `Hunger: ${newPet.hunger}`


        let boredomDisplay = document.getElementById("boredom-display");
        boredomDisplay.innerHTML = `Boredom: ${newPet.boredom}`


        let sleepDisplay = document.getElementById("sleep-display");
        sleepDisplay.innerHTML = `Sleep: ${newPet.sleepy}`




        console.log('sleepy:', newPet.sleepy, ' age:', newPet.age, ' hunger:',newPet.hunger, ' boredom:', newPet.boredom)
        

    } , 1000)
    
}






//pet dies?

const checkDead = window.setInterval(function(){
    if (newPet.age >= 50 || newPet.hunger >= 10 || newPet.boredom >= 10 || newPet.sleepy >= 10){
        newPet.alive = false
    
        if(newPet.alive === false){
            console.log('dead')
            
    
    //     //rotate 90 degrees, 
    //     //change picture to dead pic
    
            window.clearInterval(petLife)
            window.clearInterval(checkDead)
            console.log('checkDead function' , newPet.alive)
            alert(`Your ${newPet.name} died!`)
        }
    }
    
}, 500)




// const checkDead = window.setInterval(function(){
//     if (newPet.age >= 50 || newPet.hunger >= 10 || newPet.boredom >= 10 || newPet.sleepy >= 10){
//         newPet.alive = false
    
//     }
    
//     if ( newPet.alive = false) {
//         //rotate 90 degrees, 
//         //change picture to dead pic
    
//         window.clearInterval(startLife)
//     }
//     console.log(newPet.alive)
    
//     }, 500)


