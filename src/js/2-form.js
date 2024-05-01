const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
});
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    return alert('Fill please all fields');
  }
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
form.addEventListener('input', onFormInput);
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
