const contactMe = document.getElementById('contactme-form');

function isLowerCase(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

contactMe.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullname = document.getElementById('name');
  const email = document.getElementById('email').value;
  const message = document.getElementById('message');
  const displayErrorMessge = document.getElementById('validate-message');
  //   console.log(email)

  if (isLowerCase(email)) {
    contactMe.submit();
  } else {
    displayErrorMessge.innerHTML = `Email address should be in lower case, try to re-enter email like this : ${email.toLowerCase()}`;
  }
});
