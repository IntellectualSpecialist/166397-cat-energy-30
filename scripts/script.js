var i=document.querySelector(".main-nav__list"),s=document.querySelector(".main-nav__burger"),_=document.querySelector(".main-nav"),t=document.querySelector(".slider"),n,a,d,u;i.classList.add("main-nav__list--closed");s.classList.remove("main-nav__burger--active");_.classList.remove("main-nav--nojs");s.addEventListener("click",()=>{i.classList.contains("main-nav__list--closed")?(i.classList.remove("main-nav__list--closed"),s.classList.add("main-nav__burger--active")):(i.classList.add("main-nav__list--closed"),s.classList.remove("main-nav__burger--active"))});t&&(n=t.querySelector(".slider__control"),a=getComputedStyle(n));function L(){t&&(window.addEventListener("pointerup",l),n.addEventListener("pointerdown",c),window.addEventListener("touchend",l),n.addEventListener("touchstart",c))}function c(e){d=parseInt(a.getPropertyValue("--left"),10),u=e.type.includes("touch")?e.touches[0].clientX:e.clientX,window.addEventListener("pointermove",o),window.addEventListener("touchmove",o,{passive:!1})}function o(e){e.cancelable&&e.preventDefault();let v=(e.type.includes("touch")?e.touches[0].clientX:e.clientX)-u,m=d/100+v/t.clientWidth,r=Math.min(Math.max(m,0),1);n.style.setProperty("--left",`${r*100}%`),t.style.setProperty("--persent",`${r*100}%`)}function l(){window.removeEventListener("pointermove",o),window.removeEventListener("touchmove",o)}L();
