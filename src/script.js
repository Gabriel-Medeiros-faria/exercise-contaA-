window.onload = () => {
    let counter = 0;
    function updateCounter() {
        const counterElement = document.querySelector(".counter");
        counterElement.textContent = counter;
    }
    const buttonSum = document.querySelector(".sum");
    buttonSum.addEventListener("click", () => {
        counter++;
        updateCounter();
    });
    const buttonSub = document.querySelector(".sub");
    buttonSub.addEventListener("click", () => {
        counter--;
        updateCounter();
    });
}