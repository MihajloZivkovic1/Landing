$(document).ready(function () {
  showChat();
  $('.p-step-button').on('click', function () {

    var currentStep = $('.step.active');
    var nextStep = currentStep.next('.step');
    currentStep.hide();
    currentStep.removeClass('active');
    nextStep.show();
    nextStep.addClass('active');
    var steps = document.querySelectorAll('div.step').length;

    var progress = ($('.step.active').index() + 1) * (100 / steps);
    $('#bar').css('width', progress + '%');
  });


  $('.show-data div').on('click', () => {
    showChatStepTwo()
  })

  $('.show-data-for-step-4').on('click', () => {
    console.log("usao sam u 4 korak");
    showChatStepFour()
  })

  $('.show-data-for-step-5').on('click', () => {
    console.log("usao sam u ovu funk");
    showChatStepSix()
  })
  $('.show-data-for-step-6').on('click', () => {
    console.log("usao sam u ovu funk");
    showChatStepSix();
  })
  $('.show-data-for-step-7').on('click', () => {
    showChatStepSeven()
  })

  $('.show-data-for-step-8').on('click', () => {
    showChatStepEight()

  })

  $('.show-data-for-step-9').on('click', () => {
    showChatStepNine();
  })

  const usernameField = document.querySelector('#uname');
  const nextBtnName = document.querySelector("#nextBtnUserName");

  usernameField.addEventListener("keyup", function () {
    if (this.value.length < 5) {
      console.log("ovde sam");
      this.setCustomValidity("Username should be at least 5 characters long");
      this.reportValidity();
      nextBtnName.disabled = true;
    } else {
      this.setCustomValidity("");
      nextBtnName.disabled = false;
    }
  });

  document.getElementById('email').addEventListener('keyup', function () {
    var email = document.getElementById('email').value;
    var nextBtn = document.getElementById('nextBtnEmail');

    if (!validateEmail(email)) {
      console.log("ovde sam");
      this.setCustomValidity("Email is not valid");
      this.reportValidity();
      nextBtn.disabled = true;
    }
    else {
      this.setCustomValidity("");
      nextBtn.disabled = false;
    }
  })


});

// function showNextStep(typing, message, user, typing2, message2, user2) {

//   setTimeout(function () {
//     typing.classList.add('hidden');
//     message.classList.remove('hidden');
//     user.classList.remove('invisible');
//     setTimeout(function () {
//       message.classList.add('visible');
//     }, 10);
//   }, 3500);

//   setTimeout(function () {
//     document.querySelector('.typing-2').classList.remove('hidden');
//   }, 4500);

//   setTimeout(function () {
//     typing2.classList.add('hidden');
//     message2classList.remove('hidden');
//     user.classList.add('invisible');
//     user2.classList.remove('hidden');
//     setTimeout(function () {
//       message2.classList.add('visible');
//     }, 10);
//   }, 6000);
// }


const showChat = () => {
  document.querySelector('.typing-1').classList.add('hidden');
  // document.querySelector('.p-chat-user-1').classList.add('invisible');
  document.querySelector('.message-1').classList.add('hidden');
  document.querySelector('.typing-2').classList.add('hidden');
  document.querySelector('.p-chat-user-2').classList.add('hidden');
  document.querySelector('.message-2').classList.add('hidden');
  document.querySelector('.typing-1').classList.remove('hidden');

  setTimeout(function () {
    document.querySelector('.typing-1').classList.add('hidden');
    document.querySelector('.message-1').classList.remove('hidden');
    document.querySelector('.p-chat-user-1').classList.remove('invisible');
    setTimeout(function () {
      document.querySelector('.message-1').classList.add('visible');
    }, 10);
  }, 3500);

  setTimeout(function () {
    document.querySelector('.typing-2').classList.remove('hidden');
  }, 4500);

  setTimeout(function () {
    document.querySelector('.typing-2').classList.add('hidden');
    document.querySelector('.message-2').classList.remove('hidden');
    document.querySelector('.p-chat-user-1').classList.add('invisible');
    document.querySelector('.p-chat-user-2').classList.remove('hidden');
    setTimeout(function () {
      document.querySelector('.message-2').classList.add('visible');
    }, 10);
  }, 6000);
}


const showChatStepTwo = () => {
  console.log("ovde sam");
  const typingElement = document.querySelector('.typing-1-step2');
  const messageElement = document.querySelector('.message-1-step2');
  const userPhotoElement = document.querySelector('.user-photo-step2');

  // Show the typing animation
  typingElement.classList.remove('hidden');

  // After 3 seconds, hide the typing animation and show the chat message and user photo
  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userPhotoElement.classList.remove('invisible');
  }, 3000);
}

const showChatStepFour = () => {
  const typingElement = document.querySelector('.typing-1-step4');
  const messageElement = document.querySelector('.message-1-step4');
  const userPhotoElement = document.querySelector('.user-photo-step4');

  typingElement.classList.remove('hidden');

  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userPhotoElement.classList.remove('invisible');
  }, 3000);

}

const showChatStepFive = () => {
  console.log("dasdsad");
  document.querySelector('.typing-1-step5').classList.add('hidden');
  document.querySelector('.p-chat-user-1-step5').classList.add('invisible');
  document.querySelector('.message-1-step5').classList.add('hidden');
  document.querySelector('.typing-2-step5').classList.add('hidden');
  document.querySelector('.p-chat-user-2-step5').classList.add('hidden');
  document.querySelector('.message-2-step5').classList.add('hidden');
  document.querySelector('.typing-1-step5').classList.remove('hidden');

  setTimeout(function () {
    document.querySelector('.typing-1-step5').classList.add('hidden');
    document.querySelector('.message-1-step5').classList.remove('hidden');
    document.querySelector('.p-chat-user-1-step5').classList.remove('invisible');
    setTimeout(function () {
      document.querySelector('.message-1-step5').classList.add('visible');
    }, 10);
  }, 3500);

  setTimeout(function () {
    document.querySelector('.typing-2-step5').classList.remove('hidden');
  }, 4500);

  setTimeout(function () {
    document.querySelector('.typing-2-step5').classList.add('hidden');
    document.querySelector('.message-2-step5').classList.remove('hidden');
    document.querySelector('.p-chat-user-1-step5').classList.add('invisible');
    document.querySelector('.p-chat-user-2-step5').classList.remove('hidden');
    setTimeout(function () {
      document.querySelector('.message-2-step5').classList.add('visible');
    }, 10);
  }, 6000);
}


const showChatStepSix = () => {
  console.log("dasda")
  const typingElement = document.querySelector('.typing-1-step6');
  const messageElement = document.querySelector('.message-1-step6');
  const userElement = document.querySelector('.p-chat-user-step6');

  typingElement.classList.remove('hidden');

  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userElement.classList.remove('hidden');
  }, 3000);

}

const showChatStepSeven = () => {
  console.log("seven");
  const typingElement = document.querySelector('.typing-1-step7');
  const messageElement = document.querySelector('.message-1-step7');
  const userElement = document.querySelector('.p-chat-user-step7');


  typingElement.classList.remove('hidden');

  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userElement.classList.remove('hidden');
  }, 3000);

}

const showChatStepEight = () => {

  const typingElement = document.querySelector('.typing-1-step8');
  const messageElement = document.querySelector('.message-1-step8');
  const userElement = document.querySelector('.p-chat-user-step8');


  typingElement.classList.remove('hidden');

  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userElement.classList.remove('hidden');
  }, 3000);
}

const showChatStepNine = () => {

  const typingElement = document.querySelector('.typing-1-step9');
  const messageElement = document.querySelector('.message-1-step9');
  const userElement = document.querySelector('.p-chat-user-step9');


  typingElement.classList.remove('hidden');

  setTimeout(() => {
    typingElement.classList.add('hidden');
    messageElement.classList.remove('hidden');
    userElement.classList.remove('hidden');
  }, 3000);
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}


