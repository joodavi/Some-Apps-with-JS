var bin2Dec = document.getElementById("convert");

bin2Dec.addEventListener('click', () => {
  binaryNumber = document.getElementById("binary").value;
  var binaryLength = (binaryNumber.length);
  var decimalNumber = document.getElementById("decimal");
  var sum = 0;
  if(binaryLength > 8){
    decimalNumber.innerHTML = "Number above 8 digits. Try again with a binary with 8 digits or less."
  } else {
    sum = 0;
    for(expoent=0; expoent<=binaryLength; expoent++){
      let isolatedBinaryNumber = binaryNumber%10;
      isolatedBinaryNumber = Math.floor(isolatedBinaryNumber);
      binaryNumber =  binaryNumber/10;
      convertedBinartyNumber = isolatedBinaryNumber * (Math.pow(2,expoent))
      sum = sum + convertedBinartyNumber;
    }
    decimalNumber.innerHTML = sum;
  }
})