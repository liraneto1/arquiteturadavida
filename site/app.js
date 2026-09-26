import { locateCycle } from './cycles.js';
const header = document.querySelector('.site-header');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', updateHeader, { passive: true }); updateHeader();
const form = document.querySelector('#cycle-form');
const ageInput = document.querySelector('#age');
const result = document.querySelector('#cycle-result');
form.hidden = false;
form.addEventListener('submit', e => {
  e.preventDefault();
  const cycle = locateCycle(ageInput.value);
  document.querySelectorAll('.cycle-list li').forEach(item => item.classList.remove('selected'));
  result.replaceChildren();
  if (!cycle) {
    ageInput.setAttribute('aria-invalid', 'true');
    result.textContent = 'Informe sua idade em anos completos, usando um número igual ou maior que zero.';
    return;
  }
  ageInput.removeAttribute('aria-invalid');
  const label = document.createElement('span'); label.className = 'eyebrow'; label.textContent = `CICLO ${String(cycle.index + 1).padStart(2, '0')} · ${cycle.range} ANOS`;
  const title = document.createElement('h3'); title.textContent = cycle.name;
  const question = document.createElement('p'); question.textContent = cycle.question;
  const note = document.createElement('p'); note.className = 'muted'; note.textContent = 'Isso não define quem você é. Sua história tem prioridade sobre o modelo.';
  result.append(label, title, question, note);
  const link = document.createElement('a'); link.className = 'editorial-link'; link.href = `#ciclo-${cycle.index}`; link.textContent = 'Ver este ciclo →'; result.append(link);
  document.querySelectorAll('.cycle-list li')[cycle.index].classList.add('selected');
});
