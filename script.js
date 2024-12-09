const weight = document.querySelector('.weight')
const height = document.querySelector('.height')
const button = document.querySelector('.button')
const result = document.querySelector('.result')

function calculateBMI(){
let hvalue = height.value;
let wvalue = weight.value;
let BMI = wvalue/(hvalue*hvalue);
if(BMI < 18.5){
   
    result.textContent = Underweight
}else if(BMI < 24.9){
    result.textContent = Normal weight 
}else if(BMI < 29.9){
    result.textContent = OverWeight
}else if(BMI < 34.9){
    result.textContent = Obesity (class I)
}else if(BMI < 39.9){
    result.textContent = Obesity (class II)
}else if(40.0 > BMI){
    result.textContent = Obesity (class III - severe obesity)
}else{
    result.textContent = Value not founded

}

}
button.addEventListener('click',calculateBMI)