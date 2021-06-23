// ---- menu Start -----
        
const menu = document.querySelector('.menu');
const menuMain = menu.querySelector('.manu-main');
const goBack = menu.querySelector('.go-back');
const menuTrigger =  document.querySelector('.mobile-menu-trigger');
const closeMenu = menu.querySelector('.mobile-menu-close');
let subMenu;

// Select DropDown Items
menuMain.addEventListener('click', (e) =>{
    if(!menu.classList.contains('active')){
        return;
    }

    if(e.target.closest('.menu-item-has-children')){
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

// Go Back Function
goBack.addEventListener('click', () => {
    hideSubMenu();
});

// Menu Trigger Func
menuTrigger.addEventListener('click', () =>{
    toggleMenu();
});

// Close Menu Function
closeMenu.addEventListener('click', () => {
    toggleMenu();
});

// For Menu Disappear to click on overlay yani kesi bhi jagha
document.querySelector('.menu-overlay').addEventListener('click', () =>{
    toggleMenu();
});

// toggle Menu func
function toggleMenu(){
    menu.classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
};

// Get Text of items heading
function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector('.sub-manu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-tittle').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active');
}

// Hide Sub Menu's of targated Item
function  hideSubMenu(){
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.current-menu-tittle').innerHTML = '';
    menu.querySelector('.mobile-menu-head').classList.remove('active');

}

window.onresize = function() {
    if(this.innerWidth > 991){
        if(menu.classList.contains('active')){
            toggleMenu();
        }
    }
}
// ---- menu End -----
// ---- searchbar start ----
// Search Bar
const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const searchdata = document.querySelector('.search-data');

searchBtn.onclick = () => {
searchBox.classList.add('active');
searchInput.classList.add('active');
searchBtn.classList.add('active');
cancelBtn.classList.add('active');
if(searchInput.value != ""){
    let values = searchInput.value;
searchdata.classList.remove('active');
    searchdata.innerHTML= "You Just Typed : " + "<span style='font-weight: 600; letter-spacing: 1px;'>" + values +"</span>";
}else{
    searchdata.innerHTML = ""
}
}

cancelBtn.onclick = () => {
searchBox.classList.remove('active');
searchInput.classList.remove('active');
searchBtn.classList.remove('active');
cancelBtn.classList.remove('active');
searchdata.classList.add('active');
searchInput.value = '';
}

// ---- searchbar end ----
// ---- Portfolio ----
const porfolioTrigger = document.querySelector('.portfolio__trigger');
const porfolioCatagoriesMenu = document.querySelector('.main__portfolio__menu');
const porfolioContentMain = document.querySelector('.profile__content');
const portfolioListItem = document.querySelectorAll('.portfolio__menu__items');
const contentTabs = document.querySelectorAll('.portfolio__content__main');

function deacContent(){
    contentTabs.forEach(item => {item.classList.remove('active')})
}
function deacMenu(){
    portfolioListItem.forEach(item => {item.classList.remove('active')})
}

// tabs Func Define
function changeTabs(item){
    deacMenu()
    var activeListItem = document.querySelector(`.${item}`);
    console.log(activeListItem);
    activeListItem.classList.add('active');
    var activeContent = document.querySelector(`#${item}-content`);
    deacContent()
    activeContent.classList.add('active')  
}

porfolioTrigger.addEventListener('click',()=>{
    porfolioTrigger.classList.toggle('active');
    porfolioCatagoriesMenu.classList.toggle('active');
    porfolioContentMain.classList.toggle('active');
})

// Descrtiption Of Images
function popupTogglerFunc(path){
    const bodyScroll = document.querySelector('body');
    const mainPopupBox = document.querySelector('.popupdetail');
    const img = document.querySelector('.popup__img__main img');
    img.src = path;
    // bodyScroll.classList.toggle('active');
    mainPopupBox.classList.toggle('active');
}