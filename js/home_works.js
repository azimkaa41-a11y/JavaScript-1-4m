const inputGmail = document.querySelector("#gmail_input")
const btnGmail = document.querySelector("#gmail_button")
const resultGmail = document.querySelector("#gmail_result")
const parentBlok = document.querySelector('.parent_block')
const childBlok = document.querySelector('.child_block')


const regex = /^[a-zA-Z0-9.%+-]+@gmail\.com$/;

btnGmail.onclick = () => {
    if(regex.test(inputGmail.value)){
        resultGmail.innerHTML = 'правильно  крууто'
        resultGmail.style.color = 'green'
    }else{
        resultGmail.innerHTML = 'введите правильно  '
        resultGmail.style.color = 'red'
    }

}
let posX = 0;
const parent = parentBlok.clientWidth; 
const child = childBlok.offsetWidth; 
const move  = () => {
      posX++
    if(posX <= 448){ 
    childBlok.style.left = `${posX}px`
     requestAnimationFrame(move)
    }
}
move()




// let newNumber = 0;
// const newFunction = () => {
//     newNumber++ ;
//     console.log(newNumber);
//    if(newFunction < 500){
//     newFunction();
//    }
// }
// newFunction();