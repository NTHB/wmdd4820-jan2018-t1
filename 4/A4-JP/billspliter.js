const billSpliter = {
    amount: 12312,
    tax: 23, //%
    tip: 22, //%
    numberPeople: 222,
    split() {
        let plusTax = this.amount + ((this.tax / 100) * this.amount);
        let totalTip = plusTax*(this.tip/100);
        return ((plusTax + totalTip)/this.numberPeople).toFixed(2);
    }
};
console.log(billSpliter.split());