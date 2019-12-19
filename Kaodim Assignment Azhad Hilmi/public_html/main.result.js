var cleaningPrice = localStorage.getItem('cleaningPackage');
var selectedPackage = localStorage.getItem('selectedPackage');
var aircondPrice = localStorage.getItem('aircondPrice');


var aircondUnits = [100, 180, 260, 500];
var cleaningPackage = [
    {
        package: 'Chemical Cleaning',
        price: 100
    },
    {
        package: 'Deep Cleaning',
        price: 180
    },
];



var res1 = document.querySelector('#result1');
var res2 = document.querySelector('#result2');

var q1 = document.querySelector('#q1');
var q2 = document.querySelector('#q2');

var totalPrice = document.querySelector('#total-price');
res1.value = aircondPrice;
res2.value = cleaningPrice;

for(var i = 0; i < this.aircondUnits.length; i++){
    var check = this.aircondUnits[i] == parseInt(this.aircondPrice) ? 'checked' : '';
    console.log(check);
    q1.insertAdjacentHTML("beforebegin",`<input type="radio" name="answer" value="${this.aircondUnits[i]}" ${check}> ${i+1}<br>`)
}
for(var i = 0; i < this.cleaningPackage.length; i++){
    var check = this.cleaningPackage.price == this.selectedPackage[this.selectedPackage.indexOf(this.cleaningPackage.price)] ? 'checked' : ''
    q2.insertAdjacentHTML("beforebegin",`<input type="checkbox" name="answer" value="${this.cleaningPackage[i].price}" ${check}> ${this.cleaningPackage[i].package}<br>`)
}

totalPrice.innerHTML = parseInt(this.aircondPrice) + parseInt(this.cleaningPrice);
