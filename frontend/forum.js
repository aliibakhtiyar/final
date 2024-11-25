document.addEventListener("DOMContentLoaded", function() {
  
  // Select all like buttons
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      button.classList.toggle('liked');
      
      // If the button is liked, change to filled like and color
      if (button.classList.contains('liked')) {
        button.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked'; // Change to filled like icon
        button.querySelector('i').style.color = "rgba(0, 132, 255, 0.54)"; // Change icon color to blue
      } else {
        button.innerHTML = '<i class="fas fa-thumbs-up"></i> Like'; // Change back to regular like icon
        button.querySelector('i').style.color = "grey"; // Reset icon color to grey
      }
    });
  });

});

  
    // Downvote button functionality
    document.addEventListener("DOMContentLoaded", function() {
  
      // Select all downvote buttons
      const downvoteButtons = document.querySelectorAll('.downvote-btn');
  
      downvoteButtons.forEach(button => {
        button.addEventListener('click', function() {
          button.classList.toggle('downvoted');
          
          // If the button is downvoted, change to filled downvote and color
          if (button.classList.contains('downvoted')) {
            button.innerHTML = '<i class="fas fa-thumbs-down"></i> Downvoted'; // Change to filled downvote icon
            button.querySelector('i').style.color = "rgba(209, 16, 16, 0.579)"; // Change icon color to red
          } else {
            button.innerHTML = '<i class="fas fa-thumbs-down"></i> Downvote'; // Change back to regular downvote icon
            button.querySelector('i').style.color = "grey"; // Reset icon color to grey
          }
        });
      });
  
  });
// Save button functionality
const saveButtons = document.querySelectorAll('.save-btn');
saveButtons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('saved');
    
    // If the button is saved, change to filled save icon, text, and color
    if (button.classList.contains('saved')) {
      button.innerHTML = '   <i class="fas fa-bookmark"></i> Saved'; // Change to filled save icon and text
      button.querySelector('i').style.color = "#000000cb"; // Change icon color to blue
    } else {
      button.innerHTML = '   <i class="fas fa-bookmark"></i> Save'; // Change back to regular save icon and text
      button.querySelector('i').style.color = "grey"; // Reset icon color to grey
    }
  });
});

  
  const sendButton = document.getElementById('sendButton');
  const inputBox = document.getElementById('inputBox');
  const popup = document.getElementById('popup');
  const errorPopup = document.getElementById('errorPopup');
  
  sendButton.addEventListener('click', () => {
    // Check if the input is not empty
    if (inputBox.value.trim() === '') {
      // Show the error popup
      errorPopup.classList.remove('hidden');
      errorPopup.classList.add('show');
  
      // Hide the error popup after 3 seconds
      setTimeout(() => {
        errorPopup.classList.remove('show');
        errorPopup.classList.add('hidden');
      }, 3000);
  
      return;
    }
  
    // Clear the input field
    inputBox.value = '';
  
    // Show the success popup
    popup.classList.remove('hidden');
    popup.classList.add('show');
    
  
    // Hide the success popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
      popup.classList.add('hidden');
    }, 3000);
  });
  