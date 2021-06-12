const toggleQuote = (function () {
    const quoteElement = document.getElementById('quote');
    const states = [
        {
            display: 'block',
            buttonText: 'Hide Quote'
        },
        {
            display: 'none',
            buttonText: 'Show Quote'
        }
    ];
    let currState = 1;
    return function (buttonElement) {
        currState = (currState + 1) % states.length;
        quoteElement.style.display = states[currState].display;
        buttonElement.innerText = states[currState].buttonText;
    }
})();