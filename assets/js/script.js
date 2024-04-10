function moveButton(event) {
  let button = document.getElementById('myButton');
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let buttonX = button.offsetLeft + button.offsetWidth / 2;
  let buttonY = button.offsetTop + button.offsetHeight / 2;

  let distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));
  let threshold = 100; 

  if (distance < threshold) {
    var newLeft = Math.random() * (window.innerWidth - button.offsetWidth);
    var newTop = Math.random() * (window.innerHeight - button.offsetHeight);
    
    
    newLeft = Math.max(newLeft, 4); 
    newLeft = Math.min(newLeft, window.innerWidth - button.offsetWidth - 4);
    newTop = Math.max(newTop, 4); 
    newTop = Math.min(newTop, window.innerHeight - button.offsetHeight - 4); 

    button.style.left = newLeft + 'px';
    button.style.top = newTop + 'px';
  }
}


function celebrate() {
  alert("gg ta gagné");

  
  for (let i = 0; i < 100; i++) {
    let yoga = document.createElement('div');
    yoga.innerText = 'yoga';
    yoga.style.position = 'absolute';
    yoga.style.left = Math.random() * window.innerWidth + 'px';
    yoga.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(yoga);
  }
}