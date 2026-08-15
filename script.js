const menuBtn=document.querySelector('.menuBtn');
const menu=document.querySelector('.menu');
menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>{menu?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');if(menuBtn)menuBtn.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
