const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
formData.email = document.querySelector('input[type="email"]');
formData.message = document.querySelector('textarea');

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email.value = parsedData.email;
    formData.message.value = parsedData.message;
  }
});
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (!formData.email.value.trim() || !formData.message.value.trim()) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
form.addEventListener('input', onFormInput);
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
