window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var chemical = document.querySelector('#chemical');
var deep = document.querySelector('#deep');
var result = document.querySelector('#result');
var totalPrice = 0;
var selectedPackage = [];
chemical.onclick = function(){
    if(chemical.checked){
      totalPrice += parseInt(chemical.value);
      selectedPackage.push(chemical.value);
    }
    else{
      totalPrice -= parseInt(chemical.value);
      var index = selectedPackage.indexOf(chemical.value);
      selectedPackage.splice(index, 1);
    }
    result.value = totalPrice;
    localStorage.setItem('cleaningPackage',totalPrice);
    localStorage.setItem('selectedPackage', selectedPackage)
}
deep.onclick = function(){
  if(deep.checked){
    totalPrice += parseInt(deep.value);
    selectedPackage.push(deep.value);
  }
  else{
    totalPrice -= parseInt(deep.value);
    var index = selectedPackage.indexOf(deep.value);
    selectedPackage.splice(index, 1);
  }
  result.value = totalPrice;
  localStorage.setItem('cleaningPackage',totalPrice);
  localStorage.setItem('selectedPackage', selectedPackage)
}

