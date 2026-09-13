document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), mobile=document.querySelector('.mobile-nav');
 if(menu&&mobile) menu.addEventListener('click',()=>mobile.classList.toggle('open'));
 document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile?.classList.remove('open')));
 const modal=document.querySelector('#callbackModal');
 const open=()=>{modal?.classList.add('open');document.body.style.overflow='hidden'};
 const close=()=>{modal?.classList.remove('open');document.body.style.overflow=''};
 document.querySelectorAll('[data-callback]').forEach(b=>b.addEventListener('click',open));
 document.querySelector('.modal-close')?.addEventListener('click',close);
 modal?.addEventListener('click',e=>{if(e.target===modal)close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
   document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
   const f=btn.dataset.filter; document.querySelectorAll('.product').forEach(p=>p.classList.toggle('hidden',f!=='all'&&p.dataset.cat!==f));
 }));
 document.querySelectorAll('form.callback-form').forEach(form=>form.addEventListener('submit',async e=>{
   e.preventDefault(); const status=form.querySelector('.form-status'); const submit=form.querySelector('button[type=submit]');
   status.textContent='Отправляем заявку…'; submit.disabled=true;
   const data=new FormData(form); data.append('page',location.href);
   try{const res=await fetch('callback.php',{method:'POST',body:data}); const j=await res.json(); if(!res.ok||!j.ok)throw new Error(j.message||'Ошибка'); status.textContent='Заявка принята. Мы свяжемся с вами как можно скорее.'; form.reset();}
   catch(err){status.innerHTML='Не удалось отправить автоматически. Позвоните: <a href="tel:+79512440683">8 951 244-06-83</a>.';}
   finally{submit.disabled=false;}
 }));
});
