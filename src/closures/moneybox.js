/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(20);
moneyBox(20); // No recuerda de esta manera la cantidad anterior */

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins;
}


// Cada variable guarda el valor de 
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(25);

const anaMoneyBox = moneyBox();
anaMoneyBox(5);
anaMoneyBox(10);
anaMoneyBox(12);