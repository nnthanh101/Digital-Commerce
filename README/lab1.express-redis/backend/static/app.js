
window.onload = function () {
  const incrBtn = document.getElementById('incrBtn');
  const resetBtn = document.getElementById('resetBtn');

  // Get the new value of the counter from the backend...
  const updateCountValue = async function (relativePath) {
    const response = await fetch(relativePath);
    const responseJSON = await response.json();
    const counterElem = document.getElementById('counterValue');
    counterElem.innerText = responseJSON.count;
  };

  incrBtn.onclick = async function () {
    await updateCountValue('/incr');
  };

  resetBtn.onclick = async function () {
    await updateCountValue('/reset');
  }
}