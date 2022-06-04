const newsletterBtn = document.querySelector('.newsletter__btn');
const emailInput = document.querySelector('.newsletter__input');
const newsletterMsg = document.querySelector('.newsletter__msg');

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubscribeBtn = (e) => {
	e.preventDefault();
	emailInput.classList.add('active');
	newsletterMsg.classList.add('active');

	if (!emailInput.value) {
		newsletterMsg.innerText = 'Enter email';
	} else if (!emailInput.value.match(emailRegex)) {
		newsletterMsg.innerText = 'Looks like this is not an email';
	} else {
		newsletterMsg.innerText = 'Check your email please';
	}
};

newsletterBtn.addEventListener('click', handleSubscribeBtn);
