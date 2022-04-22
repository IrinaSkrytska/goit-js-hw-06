const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
   decrement() {
       this.value -= 1; 
    }
};
const IncrementButton = document.querySelector('[data-action="increment"]');
const DecrementButton = document.querySelector('[data-action="decrement"]');
const ValueEl = document.querySelector('#value');

IncrementButton.addEventListener("click", function () {
    counterValue.increment();
    ValueEl.textContent = counterValue.value;
    console.log(counterValue);
});

DecrementButton.addEventListener("click", function () {
    counterValue.decrement();
    ValueEl.textContent = counterValue.value;
    console.log(counterValue);
});
