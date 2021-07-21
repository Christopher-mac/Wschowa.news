
const window_wide_width = window.matchMedia("(min-width: 1140px)");

if (window_wide_width.matches) {

     // active show on scroll
     const body = document.body;
     let lastScroll = 0;

     window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset

          if (currentScroll <= 0) {
               body.classList.remove("scroll-up")
          }

          if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
               body.classList.remove("scroll-up")
               body.classList.add("scroll-down")

          }

          if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
               body.classList.remove("scroll-down")
               body.classList.add("scroll-up")

          }
          lastScroll = currentScroll
     })

     // search bar
     const search_icon = document.querySelector('.search_icon');
     const search_bar = document.querySelector('.search_bar');

     const searchClick = () => {
          search_bar.classList.toggle('search_bar--active')
     }

     search_icon.addEventListener('click', searchClick)
} else {
     // hamburger_menu

     const hamburger = document.querySelector('.hamburger_menu')
     const nav_mobile = document.querySelector('.nav_mobile')

     const handleClick = () => {
          hamburger.classList.toggle('hamburger_menu--active')
          nav_mobile.classList.toggle('nav_mobile--active')
     }

     hamburger.addEventListener('click', handleClick)

}




// const topNavLink = document.querySelectorAll('#first')

// let i;

// const navAnimation = () =>{
//      topNavLink.style.backgroundColor = 'red'
// }

// const navkAnimation = () =>{
//      topNavLink.style.backgroundColor = '#202123'
// }

// for (i = 0; i < topNavLink.length; i++) {
//      topNavLink[i].addEventListener('mouseover', navAnimation);
//      topNavLink[i].addEventListener('mouseout', navkAnimation);
// }
// topNavLink.addEventListener('mouseover', navAnimation);
// topNavLink.addEventListener('mouseout', navkAnimation);


// document.querySelectorAll('#first').onmouseover = function() {mouseOver()};
// document.querySelectorAll('#first').onmouseout = function() {mouseOut()};

// function mouseOver() {
//      document.querySelectorAll('#first').style.color = "red";
//    }

//    function mouseOut() {
//      document.querySelectorAll('#first').style.color = "black";
//    }