function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  
  // Smooth scroll when menu links are clicked
  const links = document.querySelectorAll('.menu-links a');
  
  links.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.querySelector(".menu-links");
      menu.classList.remove("open"); // Close the menu on click
      const icon = document.querySelector(".hamburger-icon");
      icon.classList.remove("open"); // Optionally remove icon state if needed
  
      // Smooth scroll to section
      const targetId = this.getAttribute('href'); // Get the target section id
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  
  
  
  
  
  
  // scrolled for mobile 
    