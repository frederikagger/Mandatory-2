const createAlert = (text) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("alert");
  const content = document.createTextNode(text);
  newDiv.append(content);
  return newDiv;
};

const removeAlert = async () => {
    setTimeout(()=> {
        const alert = document.querySelector(".alert");
        alert.parentNode.removeChild(alert);
    }, 5000)
}