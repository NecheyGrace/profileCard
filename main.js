function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');

  function updateTime() {
    const now = new Date();
    const utcString = now.toUTCString();
    timeElement.textContent = utcString;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateUTCTime();
});
