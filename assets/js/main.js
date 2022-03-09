// simple query selector function
const grabElement = (element) =>{
    const selector = document.querySelector(element)
    if(selector) return selector;
    throw new Error `Error given ${selector} doesnot exists`
}
//  menu for small screen
const menuGrabButton = grabElement('#menu-toggle-btn');
const menuToggleBtn = ()=>{
    const mobileMenu = grabElement('#menu-items');
    mobileMenu.classList.toggle('activated');
    menuGrabButton.classList.toggle('activated');
    
}
menuGrabButton.addEventListener('click',menuToggleBtn);

// change theme from dark to light or vice versa
const body = document.body;
const themeGrabButton = grabElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')
if(currentTheme){
   body.classList.add('light-theme')
}

const changeTheme = ()=>{
body.classList.toggle('light-theme')
if(body.classList.contains('light-theme')){
    localStorage.setItem('currentTheme','themeAcitvate')
}else{
    localStorage.removeItem('currentTheme')
}
}
themeGrabButton.addEventListener('click',changeTheme);

