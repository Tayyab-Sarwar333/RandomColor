let getCode = () => {
  let    randomNum = Math.floor(Math.random() * 16777215) 
  let randomCode = "#" +randomNum.toString(16)

  document.body.style.backgroundColor = randomCode;
  document.getElementById("code").innerText = randomCode;
navigator.clipboard.writeText(randomCode);
}


document.getElementById("btn").addEventListener('click', getCode);

//init call 
getCode();
