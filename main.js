import './style.css'

//document.querySelector('#app').innerHTML = `
//  <p class="live">
//    website is live
//  </p>
//`

const currentDay = document.querySelector('#current-day');
const currentTime = document.querySelector('#current-time');

const date = new Date();
const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); 
const utcTime = date.toISOString().slice(0, -5) + 'Z';

currentDay.textContent = dayOfWeek;
currentTime.textContent = utcTime;
