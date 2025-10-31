// Menu toggle
const toggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('show');
});

// Form demo: validation + fake "sent" message
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const msg = form.querySelector('#message').value.trim();
  if(!name || !email || !msg){
    alert('Merci de remplir tous les champs.');
    return;
  }
  // Demo behavior: show message and clear
  alert('Merci — message reçu (demo).');
  form.reset();
});

// Insert current year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());