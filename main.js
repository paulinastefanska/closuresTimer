const clock = () => {
  let seconds = 0;
  document.body.textContent = "You have been here for " + 0 + " seconds";
  const timer = () => {
    seconds++;
    document.body.textContent = "You have been here for " + seconds + " seconds";
  }
  return timer;
}

const start = clock();

setInterval(start, 1000);