(()=>{const e=async e=>{try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=ae1abda2439bece21312504ac8a5fba7`),o=await n.json();document.querySelector("#wrapper").style.animation="fadein 2s";const r=document.querySelector(".weather"),a=document.querySelector(".location"),c=document.querySelector(".date"),i=document.querySelector(".temp"),m=document.querySelector("#weather-img"),u=document.querySelector("#feels-temp"),d=document.querySelector("#humidity"),l=document.querySelector("#wind-speed");document.querySelector(".container-error").textContent="";const s={temp:Math.floor(o.main.temp-273.15),humidity:o.main.humidity,feels_like:Math.floor(o.main.feels_like-273.15),weather:o.weather[0].description,name:o.name,wind_speed:o.wind.speed,img:o.weather[0].icon},p=t(s.weather);r.textContent=p,a.textContent=s.name,c.textContent=(new Date).toISOString().slice(0,10),i.textContent=`${s.temp}°C`,u.textContent=`${s.feels_like}°C`,d.textContent=`${s.humidity}%`,l.textContent=`${s.wind_speed}m/s`,m.src=`http://openweathermap.org/img/wn/${s.img}@2x.png`}catch(e){document.querySelector("#wrapper").style.animation="",document.querySelector(".container-error").textContent="Location not found."}},t=e=>e.charAt(0).toUpperCase()+e.slice(1);e("Moldova"),(()=>{const t=document.querySelector("#location"),n=document.querySelector("#submit"),o=document.querySelector("#wrapper");n.addEventListener("click",(()=>{o.style.animation="",e(t.value)}))})()})();