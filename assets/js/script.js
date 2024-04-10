function moveButton(event) {
    let button = document.getElementById('myButton');
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let buttonX = button.offsetLeft + button.offsetWidth / 2;
    let buttonY = button.offsetTop + button.offsetHeight / 2;

    let distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));
    let threshold = 100; 
    if (distance < threshold) {
      let newLeft = Math.random() * (window.innerWidth - button.offsetWidth);
      let newTop = Math.random() * (window.innerHeight - button.offsetHeight);
      
      
      newLeft = Math.max(newLeft, 4); 
      newLeft = Math.min(newLeft, window.innerWidth - button.offsetWidth - 4); 
      newTop = Math.max(newTop, 4); 
      newTop = Math.min(newTop, window.innerHeight - button.offsetHeight - 4); 

      button.style.left = newLeft + 'px';
      button.style.top = newTop + 'px';
    }
  }