const contactMe = document.getElementById('contactme-form');

function isLowerCase(str) {
  return !/[A-Z]/.test(str);
}

contactMe.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const displayErrorMessge = document.getElementById('validate-message');
  if (isLowerCase(email)) {
    contactMe.submit();
  } else {
    displayErrorMessge.innerHTML = `Email address should be in lower case, try to re-enter email like this : ${email.toLowerCase()}`;
  }
});