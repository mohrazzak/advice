fetch("https://api.adviceslip.com/advice")
  .then((e) => {
    return e.json();
  })
  .then((e) => {
    document.querySelector(".advice").innerHTML = `"${e.slip.advice}"`;
    document.querySelector(".h-text").innerHTML = `ADVICE ${e.slip.id}`;
  });

document.querySelector(".btn").addEventListener("click", () => {
  location.reload();
});
