const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let savedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

form.elements.email.value = savedData.email ? savedData.email.trim() : '';
form.elements.message.value = savedData.message ? savedData.message.trim() : '';

form.addEventListener('input', event => {
  savedData.email = event.currentTarget.elements.email.value.trim();
  savedData.message = event.currentTarget.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(savedData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailForm = event.currentTarget.elements.email.value.trim();
  const messageForm = event.currentTarget.elements.message.value.trim();

  if (!emailForm || !messageForm) {
    alert('Please fill all form fields');
    return;
  }

  console.log(savedData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
