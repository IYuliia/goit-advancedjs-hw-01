import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
window.addEventListener('load', onLoad);
form.addEventListener('submit', onFormSubmit);

let savedData = {
  email: '',
  message: '',
};

function onInputChange() {
  savedData = {
    email: form.email.value,
    message: form.message.value,
  };
  const savedDataJSON = JSON.stringify(savedData);
  localStorage.setItem(STORAGE_KEY, savedDataJSON);
}

function onLoad() {
  const savedStateJSON = localStorage.getItem(STORAGE_KEY);
  if (savedStateJSON) {
    try {
      const savedState = JSON.parse(savedStateJSON);
      form.email.value = savedState.email;
      form.message.value = savedState.message;
    } catch (error) {
      console.error('Error parsing JSON from local storage:', error);
    }
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (savedData.email === '' || savedData.message === '') {
    alert('Please fill in all fields before submitting.');
    return;
  }

  console.log(savedData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
