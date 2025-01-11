function updateContent(title, description, image) {
    // Update content title
    document.getElementById('content-title').innerText = title;
  
    // Update content description
    document.getElementById('content-description').innerText = description;
  
    // Update image
    document.getElementById('content-image').src = image;
  
    // Highlight active menu item
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
  