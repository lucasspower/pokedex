(()=>{"use strict";!function(){const e=document.querySelector("[data-icon-random]"),t=document.querySelector("[data-search]"),n=document.querySelector("#namePokemon"),o=document.querySelector(".pokemon"),c={fire:"#ffb9a7",grass:"#b4fcb9",electric:"#fff2af",water:"#b5baff",ground:"#fddab6",rock:"#ffffcb",ghost:"#c9b8ce",ice:"#cceaff",fairy:"#f5cdfc",poison:"#c2fdce",bug:"#ffce89",dragon:"#97b3e6",psychic:"#eaeda1",flying:"#f3dede",fighting:"#fafdc8",normal:"#ecd6d6"},a=(e,t,n)=>{const o=document.createElement(e);return o.innerText=t,o.classList.add(n),o},r=e=>{e.preventDefault();const t=n.value.toLowerCase();o.innerHTML="",f(t),n.focus()},s=()=>{n.focus();const e=Math.floor(150*Math.random());o.innerHTML="",e&&f(e)},d=()=>{o.classList.add("err"),o.innerText="pokemon nao encotrado",o.style.backgroundColor="red",console.clear()},f=async e=>{o.innerHTML="";try{const t=await(async e=>{const t=await fetch("https://pokeapi.co/api/v2/pokemon/"+e);if(404!==t.status)return t.json();d()})(e);if(t){const e=t.name,n=t.types[0].type.name,r=t.types,s=t.id,d=a("h2",e,"name-pokemon"),f=document.createElement("img");f.src=`https://pokeres.bastionbot.org/images/pokemon/${s}.png`,f.setAttribute("alt",e);const i=r.map((e=>e.type.name)).join(" | "),p=a("span",`Type: ${i}`,"type");o.style.backgroundColor=`${c[n]}`,o.appendChild(d),o.appendChild(f),o.appendChild(p)}}catch(e){d()}};["click","touchstart"].forEach((n=>{e.addEventListener(n,s),t.addEventListener(n,r)})),s(),n.focus()}()})();