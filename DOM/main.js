let container = document.getElementById('container');
document.title = 123;
let pageHeader = document.getElementById('pageHeader');
pageHeader.textContent = "Goodbye World";
pageHeader.innerText = "Goodbye...";

container.innerHTML = "<h3>Hello From inside the container</h3>";
container.style.backgroundColor = 'orange';
container.style.color = 'dark grey';