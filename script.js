$(document).ready(function () {
  showChat();

  $(document).ready(function () {
    $('#bar').css('width', '0%');
  });

  $('.p-step-button').on('click', function () {
    var currentStep = $('.step.active');
    var nextStep = currentStep.next('.step');
    var steps = document.querySelectorAll('div.step').length;

    currentStep.hide();
    currentStep.removeClass('active');
    nextStep.show();
    nextStep.addClass('active');

    var currentIndex = currentStep.index();
    var progress = (currentIndex + 1) * (100 / steps);
    $('#bar').css('width', progress + '%');
  });

  $('.lastStepBtn').on('click', function () {
    $("#regForm").ajaxSubmit({
      dataType: 'json',
      success: processJson,
      error: function () {
        $('.action-button-loading').hide();
        $('.error').html('<p style="padding: 24px;color: white; text-align: center;"> Something went wrong. Please try again. </p>');
      }
    });
  })

  $('.show-data div').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step2');
    const messageElement = document.querySelector('.message-1-step2');
    const userPhotoElement = document.querySelector('.user-photo-step2');

    showNextSteps(typingElement, messageElement, userPhotoElement);
  })

  $('.show-data-for-step-4').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step4');
    const messageElement = document.querySelector('.message-1-step4');
    const userPhotoElement = document.querySelector('.user-photo-step4');

    showNextSteps(typingElement, messageElement, userPhotoElement);
  })

  $('.show-data-for-step-5').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step6');
    const messageElement = document.querySelector('.message-1-step6');
    const userElement = document.querySelector('.p-chat-user-step6');
    showNextSteps(typingElement, messageElement, userElement)
  })

  $('.show-data-for-step-6').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step6');
    const messageElement = document.querySelector('.message-1-step6');
    const userElement = document.querySelector('.p-chat-user-step6');

    showNextSteps(typingElement, messageElement, userElement);
  })
  $('.show-data-for-step-7').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step7');
    const messageElement = document.querySelector('.message-1-step7');
    const userElement = document.querySelector('.p-chat-user-step7');

    showNextSteps(typingElement, messageElement, userElement);
  })

  $('.show-data-for-step-8').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step8');
    const messageElement = document.querySelector('.message-1-step8');
    const userElement = document.querySelector('.p-chat-user-step8');

    showNextSteps(typingElement, messageElement, userElement);

  })

  $('.show-data-for-step-9').on('click', () => {
    const typingElement = document.querySelector('.typing-1-step9');
    const messageElement = document.querySelector('.message-1-step9');
    const userElement = document.querySelector('.p-chat-user-step9');

    showNextSteps(typingElement, messageElement, userElement);
  })

  const usernameField = document.querySelector('#uname');
  const nextBtnName = document.querySelector("#nextBtnUserName");
  const emailField = document.querySelector('#email');

  usernameField.addEventListener("keyup", function () {
    console.log(this.value);

    if (this.value.length < 5) {

      this.setCustomValidity("De gebruikersnaam moet minimaal 5 tekens lang zijn.");
      this.reportValidity();
      nextBtnName.disabled = true;
    } else {
      this.setCustomValidity("");
      nextBtnName.disabled = false;

      fetch(`https://www.staging.ondeugende.date/controller/validation/index.php?addr=12345432sdfhkjhsjdggt3234pl,kjhsgsff&username=${usernameField.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
        .then(response => response.json())
        .then(data => {
          if (data.status === true) {
            console.log(data)
            this.setCustomValidity("")
            nextBtnName.disabled = false;
          }
          else {
            console.log(data);
            this.setCustomValidity(data.message);
            this.reportValidity();
            nextBtnName.disabled = true;
          }
        })
        .catch((error) => {
          console.error('Error:' + error);
        })
    }
  });

  emailField.addEventListener('keyup', function () {
    var email = document.getElementById('email').value;
    var nextBtn = document.getElementById('nextBtnEmail');

    if (!validateEmail(email)) {
      console.log("ovde sam");
      this.setCustomValidity("De e-mail is niet geldig");
      this.reportValidity();
      nextBtn.disabled = true;
    }
    else {
      this.setCustomValidity("");
      nextBtn.disabled = false;

      fetch(`https://www.staging.ondeugende.date/controller/validation/index.php?addr=12345432sdfhkjhsjdggt3234pl,kjhsgsff&email=${emailField.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

      })
        .then(response => response.json())
        .then(data => {
          if (data.status === true) {
            console.log(data);
            this.setCustomValidity("");
            this.reportValidity();
            nextBtn.disable = false;
          }
          else {
            console.log(data);
            this.setCustomValidity(data.message)
            this.reportValidity();
            nextBtn.disable = true;
          }
        })
    };
  })
})
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

function showNextSteps(typing, message, user) {

  typing.classList.remove('hidden');

  setTimeout(() => {
    typing.classList.add('hidden');
    message.classList.remove('hidden');
    user.classList.remove('invisible');
  }, 2000);
}


const showChat = () => {
  document.querySelector('.typing-1').classList.add('hidden');
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
    }, 20);
  }, 1500);

  setTimeout(function () {
    document.querySelector('.typing-2').classList.remove('hidden');
    document.querySelector('.p-chat-user-2').classList.remove('hidden');
    document.querySelector('.p-chat-user-1').classList.add('invisible');
  }, 2000);

  setTimeout(function () {

    document.querySelector('.typing-2').classList.add('hidden');
    document.querySelector('.message-2').classList.remove('hidden');
    document.querySelector('.p-chat-user-1').classList.add('invisible');
    setTimeout(function () {
      document.querySelector('.message-2').classList.add('visible');
    }, 10);
  }, 3000);
}


function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function processJson(response) {
  if (!response.status) {
    alert('fail')
  } else {
    alert('success')
    setTimeout(function () {
      window.location.href = '/';
    }, 10000);
  }
}
