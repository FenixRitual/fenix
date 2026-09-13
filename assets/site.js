document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-btn');
  const mobile=document.querySelector('.mobile-nav');
  if(menu&&mobile){
    menu.addEventListener('click',()=>{
      const open=mobile.classList.toggle('open');
      menu.setAttribute('aria-expanded',open?'true':'false');
    });
    document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{
      mobile.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('click',e=>{
      if(!mobile.contains(e.target)&&!menu.contains(e.target)){
        mobile.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
      }
    });
  }
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.product').forEach(p=>p.classList.toggle('hidden',f!=='all'&&p.dataset.cat!==f));
  }));
});
