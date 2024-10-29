function randomizePositions() {
    const textContainers = document.querySelectorAll('.text-container');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const headerHeight = 70; // Set the height of the header area to avoid
  
    textContainers.forEach((container) => {
      let overlap = true;
  
      while (overlap) {
        // Generate random coordinates, ensuring top is at least headerHeight
        const randomTop = Math.floor(Math.random() * (screenHeight - headerHeight - 100)) + headerHeight;
        const randomLeft = Math.floor(Math.random() * (screenWidth - 200)); // Adjust -200 for the box width
  
        container.style.top = `${randomTop}px`;
        container.style.left = `${randomLeft}px`;
  
        const containerRect = container.getBoundingClientRect();
  
        // Check for overlap with other text containers
        overlap = Array.from(textContainers).some((otherContainer) => {
          if (otherContainer === container) return false; // Skip itself
  
          const otherRect = otherContainer.getBoundingClientRect();
          return !(
            containerRect.right < otherRect.left ||
            containerRect.left > otherRect.right ||
            containerRect.bottom < otherRect.top ||
            containerRect.top > otherRect.bottom
          );
        });
      }
    });
  }
  
  // Run the function when the page loads
  window.onload = randomizePositions;
