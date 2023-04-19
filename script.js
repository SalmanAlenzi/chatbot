// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
		dropdownMenu.classList.remove('show')
	}
})




// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<br/><br/><br/><p class="chatbot-text" sentTime="${currentTime}">${input}</p><br/>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<br/><br/><br/><p class="chatbot-text1" sentTime="${currentTime}">${response}</p><br/>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here

    if (input == "Salam"){
        
        const responses = ["Welcome to chatbot"];
    
   
    return responses;

    }
     else if (input == "salman"){
        
        const responses = ["Hi salman, How are u?"];
    
   
    return responses;

    }
     else if (input == "Hi"){
        
        const responses = ["Hi , How are you?"];
    
   
    return responses;

    }
     else if (input == "Abdullah"){
        
        const responses = ["Hi Abdullah, How are you today?"];
    
   
    return responses;

    }
    else if (input == "How are you?"){
        
        const responses = ["I Fine thank you."];
    
   
    return responses;

    }
   else{

   	  return "Error!";
   }  
  }

  
