
const convert = () => {
    const resultElement = document.getElementById("resultElement");
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  const  milesToKm = unit === 'milesToKm';
  let result = 0;
  
  if (milesToKm === true){
    result = Math.round(inputValue * 1.60934);
  }
  else{
    result = Math.round(inputValue / 1.60934);
  }
  const resultString = inputValue + " miles are " + result + " km";
  console.log(resultString);
  resultElement.innerHTML = resultString;
  }