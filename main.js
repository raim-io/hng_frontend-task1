import './style.css'

//document.querySelector('#app').innerHTML = `
//  <p class="live">
//    website is live
//  </p>
//`

document.addEventListener("DOMContentLoaded", function () {
	const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
	
	currentDay.textContent = getCurrentDate();
	currentTime.textContent;

    // Update current time in real-time
    setInterval(function () {
        getCurrentTime(currentTime);
    }, 1000);
});

function getCurrentDate() {
	const date = new Date();
	const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
	return dayOfWeek;
}

function getCurrentTime(element) {
    const utcTime = Date.now();
    element.textContent = utcTime;
}
