const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(d){t.disabled||(t.disabled=!0,n=setInterval(o,1e3));e.disabled&&(e.disabled=!1)})),e.addEventListener("click",(function(d){clearInterval(n),t.disabled&&(t.disabled=!1);e.disabled||(e.disabled=!0)}));let n=null;const a=document.createElement("div");function o(){return d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}a.classList.add("button-center"),d.insertBefore(a,d.children[1]),a.append(t,e),t.classList.add("start-button"),e.classList.add("stop-button");
//# sourceMappingURL=01-color-switcher.6ff1b138.js.map