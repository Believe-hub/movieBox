const showMenu = document.querySelector('.icons');
let menuOption = document.querySelector('.slide-bar');
const removeMenu = document.querySelector('.remove-menu');
const menuOption2 = document.querySelector('.menu');

showMenu.onclick = () => {
    console.log(menuOption);
    menuOption.classList.add('show-menu');

}
removeMenu.onclick = () => {
    menuOption.classList.remove('show-menu');

}

