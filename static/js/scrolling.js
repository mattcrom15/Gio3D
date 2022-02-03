
var logo = document.querySelector('.logo');
var logoWidth = logo.getAttribute('width');
var logoheight = logo.getAttribute('height');
var smallWH = [165,64];
var smallMobileWH = [125,48];
var scrollImageMax = 160;
var bigWH = [496,192]
var bigMobileWH = [248,96];
var hamburger = document.querySelector('.hamburger-menu');

var diff = logoWidth - smallWH[0];
var pps = diff/scrollImageMax;


document.body.addEventListener('load',function(){
    window.scrollY = 0;
    console.log('loaded');
});
document.body.addEventListener('reload',function(){
    window.scrollY = 0;
});

function MenuClose(){
    hamburger.setAttribute('menu','closed');
    document.querySelector('.nav-items').style.display = 'block';
    document.querySelector('.nav-items').style.opacity = '0';
    hamburger.style.webkitFilter = 'invert(1)';
    document.querySelector('.nav-items').style.width = '0';
    document.querySelector('.close-ico').style.display ='none';

}

function MenuOpen(){
    hamburger.setAttribute('menu','open');
    document.querySelector('.nav-items').style.display = 'block';
    hamburger.style.webkitFilter = 'invert(1) sepia(100%) saturate(300%) brightness(70%) hue-rotate(140deg)';
    document.querySelector('.close-ico').style.display ='block';
    document.querySelector('.nav-items').style.opacity = '1';
    document.querySelector('.nav-items').style.width = '100%';

}

function hamburgerMenu() {
    if (hamburger.getAttribute('menu') == 'open'){
        console.log('menu-open');
        MenuClose();

    }else{
        console.log('menu-closed');
        MenuOpen();
        
    }
};

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var links = document.querySelectorAll('.nav-link');
    var activeLink = document.querySelector('.nav-active');
    var menu = document.querySelectorAll('.nav-item');
    console.log(window.scrollY);

    if (window.scrollY <= 288){
       
        menu.forEach(menuitem => {
           menuitem.children[0].setAttribute('class','nav-link');
           
        });
        document.getElementById('home').setAttribute('class','nav-active');
    
    
    }else if (window.scrollY >=288){
        menu.forEach(menuitem => {
           menuitem.children[0].setAttribute('class','nav-link');
           
        });
        document.getElementById('location').setAttribute('class','nav-active');

    }

    if (window.scrollY >=1347){
        menu.forEach(menuitem => {
           menuitem.children[0].setAttribute('class','nav-link');
           
        });
        document.getElementById('threat').setAttribute('class','nav-active');
    }

    if(window.scrollY >=2900){
        menu.forEach(menuitem => {
            menuitem.children[0].setAttribute('class','nav-link');
            
         });
         document.getElementById('hcih').setAttribute('class','nav-active');
        
    }
    


    if (window.scrollY >= 50){
        if (window.innerWidth <= 700){
            console.log('mobile');
            logo.setAttribute('width',smallMobileWH[0]);
            logo.setAttribute('height',smallMobileWH[1]);
        }else{
            logo.setAttribute('width',smallWH[0]);
            logo.setAttribute('height',smallWH[1]);
            links.forEach(element => {
                element.style.color = '#9BB8D2';
            });
            activeLink.style.color = '#9BB8D2';
            activeLink.style.borderColor = '#9BB8D2';
            console.log('desktop');
        }
        logo.style.webkitFilter = 'invert(1) sepia(100%) saturate(300%) brightness(70%) hue-rotate(140deg)';
        hamburger.style.webkitFilter = 'invert(1) sepia(100%) saturate(300%) brightness(70%) hue-rotate(140deg)';
        logo.style.paddingTop = '10px';
        header.style.boxShadow = "10px 10px 9px 0px rgba(0,0,0,0.04)";
        header.style.background = '#fff';
        
        
        
    } else{
        if (window.innerWidth <= 700){
            console.log('mobile');
            logo.setAttribute('width',bigMobileWH[0]);
            logo.setAttribute('height',bigMobileWH[1]);
        }else{
            logo.setAttribute('width',bigWH[0]);
            logo.setAttribute('height',bigWH[1]);
            links.forEach(element => {
                element.style.color = '#fff';
            
            });
            activeLink.style.color = '#fff';
            activeLink.style.borderColor = '#fff';
        }
        logo.style.webkitFilter = 'invert(1)';
        hamburger.style.webkitFilter = 'invert(1)';
        logo.style.paddingTop = '25px';
        header.style.boxShadow = "10px 10px 9px 0px rgba(0,0,0,0)";
        header.style.background = 'none';
        
        
    }

});



function Loc(){
    document.querySelector('.right-container').scrollIntoView(false);
    // window.scrollTo(0,868);
    var menu = document.querySelectorAll('.nav-item');
    menu.forEach(menuitem => {
       menuitem.children[0].setAttribute('class','nav-link');
       
    });
    document.getElementById('location').setAttribute('class','nav-active');
    if (hamburger.getAttribute('menu') == 'open'){
        MenuClose();
    
    }else{
        //pass
    }

}

function Home(){
    window.scrollTo(0,0);
    var menu = document.querySelectorAll('.nav-item');
    menu.forEach(menuitem => {
       menuitem.children[0].setAttribute('class','nav-link');
       
    });
    document.getElementById('home').setAttribute('class','nav-active');
    if (hamburger.getAttribute('menu') == 'open'){
        MenuClose();
    
    }else{
        //pass
    }

}

function Threats(){
    document.querySelector('.left-container-2').scrollIntoView(false);
    // window.scrollTo(0,1936);
    var menu = document.querySelectorAll('.nav-item');
    menu.forEach(menuitem => {
       menuitem.children[0].setAttribute('class','nav-link');
       
    });
    document.getElementById('threat').setAttribute('class','nav-active');
    if (hamburger.getAttribute('menu') == 'open'){
        MenuClose();
    
    }else{
        //pass
    }
}

function HowHelp(){
    document.querySelector('.center-container').scrollIntoView();
    // window.scrollTo(0,3094);
    var menu = document.querySelectorAll('.nav-item');
    menu.forEach(menuitem => {
       menuitem.children[0].setAttribute('class','nav-link');
       
    });
    document.getElementById('hcih').setAttribute('class','nav-active');
    if (hamburger.getAttribute('menu') == 'open'){
        MenuClose();
    
    }else{
        //pass
    }
}

