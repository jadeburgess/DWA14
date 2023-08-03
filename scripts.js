// //original code without Lit Framework 
// const MAX_NUMBER = 15
// const MIN_NUMBER = -5

// const number = document.querySelector('[data-key="number"]')
// const subtract = document.querySelector('[data-key="subtract"]')
// const add = document.querySelector('[data-key="add"]')

// const addHandler = () => {
//   const newValue = parseInt(number.value) + 1
//   number.value = newValue.toString()

//   if (add.disabled === true) {
//     add.disabled = false
//   }

//   if (newValue >= MAX_NUMBER) {
//     add.disabled = true
//   }
// };

// const subtractHandler = () => {
//   const newValue = parseInt(number.value) - 1
//   number.value = newValue.toString()

//   if (subtract.disabled === true) {
//     subtract.disabled = false
//   }

//   if (newValue <= MIN_NUMBER) {
//     subtract.disabled = true
//   }
// };

// add.addEventListener('click', addHandler)
// subtract.addEventListener('click', subtractHandler)

//Lit Framework
import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'; // Importing necessary modules from the lit library hosted on jsdelivr CDN

// Defining a new class "tallyCount" that extends "LitElement"
class tallyCount extends LitElement{
  // CSS styles defined using the "css" tag template literal from lit    
  static styles = css ` 
  /* CSS variables used for color styling */
        :root {
    --color-green: #31c48d;
    --color-white: #ffffff;
    --color-dark-grey: #33333d;
    --color-medium-grey: #424250;
    --color-light-grey: #d2d6dc;
}


* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: var(--color-medium-grey);
    color: var(--color-white);
    display: flex;
    flex-direction: column;
}

.header{
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;

   
}
 header h1{
    font-size: 3.5rem;
    color:  var(--color-dark-grey);
 }

 .footer{
    font-size: 1.3rem;
    text-align: center;
    background: var(--color-dark-grey);
    color: var(--color-light-grey);
    justify-self: flex-end;
 }

 .footer a {
    color: var(--color-white);
 }

 /* controls */

.controls{
    background: yellow;
    display: flex;
    justify-content: space-around;
    color: black;
}

/* counter */
.counter{
    background: var(--color-dark-grey);
}

.counter_value{
    width: 100%;
    height: 18rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5rem;
    font-weight: 900;
    background: none; /* This makes the background see through */
    color: var(--color-white);
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
}

.counter_button{
    background: none;
    width: 50%;
    border-color: #d2d6dc;
    color: var(--color-dark-grey);
    font-size: 5rem;
    height: 10rem;
    transition: transform 0.3s;
    transform: translateY(0);
}

.message{
  text-align: center;
  height: 50px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

.counter_button:active{
  background: var(--color-medium-grey);
  transform: translateY(2%);
}

.counter_button:disabled {
   opacity: 0.2;
}
.counter_actions{
    display: flex;
}

.counter_button_first{
    border-right: 1px solid var(--color-light-grey);
}

.reset_button{
   background: none;
   width: 10%;
   border-color: #d2d6dc;
   color: var(--color-dark-grey);
   height: 10rem;
   transition: transform 0.3s;
   transform: translateY(0);
   font-family: Arial, Helvetica, sans-serif;
}

      `
      // Static properties representing the custom element properties
     static properties = {
          count: {type: Number}, // The current count value (initialized to 0)
          maxCount: {type: Number} // The maximum allowed count value (initialized to 15)
     }

     // Constructor for the custom element
     constructor(){
        super(),
        // Initializing the count and maxCount properties
        this.count = 0;
        this.maxCount = 15;
     }

     // Method to increment the count
     increment(){
        if(this.count < this.maxCount){
            this.count++;
        }
     }

      // Method to decrement the count
     decrement(){
      if(this.count >= -5){
         this.count--;
      }
     }

     // Method to reset the count to 0
     reset(){
      this.count = 0;
     }

    // Method to render the custom element
     render(){
       // Generating a message based on the count value
      let message = '';
      if(this.count === -5){
         message = 'Minimum reached';
      }else if(this.count === this.maxCount){
         message = 'Maximum reached';
      }else{
         message = '';
      }

       // Checking if the count has reached the maximum or minimum allowed values
      const isMaxCountReached = this.count === this.maxCount;
      const isMinCountReached = this.count === -5;

       // Checking if the count has reached the maximum or minimum allowed values
     return html`
   <header class="header">
        <h1>Tally App</h1>
   </header>
     
    <main class="counter">
        <div class="counter_value">${this.count}</div>
      <div class="counter_actions">
        <button data-key="add" class="counter_button  counter_button_first"
          @click = ${this.decrement} ?disabled =${isMinCountReached}
          >-
        </button>
        <button class="reset_button" @click = ${this.reset}>Reset</button>
        <button data-key="subtract" class="counter_button" 
          @click = ${this.increment} ?disabled =${isMaxCountReached}
          >+
        </button>
       
       </div> 
       <br>
       <div class="message">${message}</div>

    </main>
    <footer class="footer">
      <p>Inspired by <a href="https://tallycount.app/">Tally Count</a>. Note that this is merely a practice project for learning JavaScript</p>
    </footer>
     `
   }
}
// Defining the custom element "tally-count"
 customElements.define('tally-count', tallyCount)