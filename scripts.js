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
import { css, html, LitElement } from './node_modules/@lit';
import { reactiveElement } from '@lit/reactive-element';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

class MyTallyCounter extends LitElement {
  static styles = css`
    /* Add your styles here if needed */
  `;

  static properties = {
    counterValue: { type: Number },
    isMinimumReached: { type: Boolean },
    isMaximumReached: { type: Boolean },
  };

  constructor() {
    super();
    this.counterValue = 0;
    this.isMinimumReached = false;
    this.isMaximumReached = false;
  }

  incrementCounter() {
    const newValue = this.counterValue + 1;
    this.counterValue = newValue;
    this.checkMinMaxState();
  }

  decrementCounter() {
    const newValue = this.counterValue - 1;
    this.counterValue = newValue;
    this.checkMinMaxState();
  }

  checkMinMaxState() {
    this.isMinimumReached = this.counterValue <= MIN_NUMBER;
    this.isMaximumReached = this.counterValue >= MAX_NUMBER;
  }

  render() {
    return html`
      <header class="header">
        <h1 class="header__title">Tally Count (Lit)</h1>
      </header>
      <main class="counter">
        <input
          class="counter__value"
          data-key="number"
          type="number"
          .value=${this.counterValue}
          readonly
        />
        <div class="counter__actions">
          <button
            @click=${this.decrementCounter}
            ?disabled=${this.isMinimumReached}
            class="counter__button counter__button-first"
          >
            -
          </button>
          <button
            @click=${this.incrementCounter}
            ?disabled=${this.isMaximumReached}
            class="counter__button"
          >
            +
          </button>
        </div>
      </main>
      <footer class="footer">
        <span class="footer__text">
          Inspired by <a class="footer__link" href="https://tallycount.app/">Tally Count</a>.
          Note that this is merely a practice project for learning Lit.
        </span>
      </footer>
    `;
  }
}

customElements.define('my-tally-counter', MyTallyCounter);

// Get references to the buttons
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

// Create an instance of the MyTallyCounter component
const tallyCounter = document.createElement('my-tally-counter');

// Append the component to the DOM
document.body.appendChild(tallyCounter);

