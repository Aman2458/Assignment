window.addEventListener('DOMContentLoaded', (event) => {
    const sidebarItems = document.querySelectorAll('.sidebar li');
    const contentElement = document.querySelector('.content');

    // Function to update the content based on the clicked item
    const updateContent = (content) => {
      contentElement.innerHTML = content;
    };

    // Add click event listener to each sidebar item
    sidebarItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        const clickedItem = event.target.innerHTML;

        // Update the content based on the click item
        switch (clickedItem) {
          case 'Home':
            updateContent('<h1>Welcome to the Home Page</h1>');
            break;
          case 'Contact':
            updateContent('<h1>Contact Information</h1><p>Phone: 123-456-7890<br>Email: contact@example.com</p>');
            break;
          case 'Information':
            updateContent('<h1>Information Page</h1><p>This is some information about our website.</p>');
            break;
          case 'Guide':
            updateContent('<h1>User Guide</h1><p>Here is a step-by-step guide on how to use our website.</p>');
            break;
          default:
            updateContent('');
        }
      });
    });
  });