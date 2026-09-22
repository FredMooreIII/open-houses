/* Photo lightbox — shared by every listing. */
(function(){
  var lb=document.getElementById('lb'), lbi=document.getElementById('lbi');
  if(!lb) return;
  function open(el){ var img=el.querySelector('img'); lbi.src=img.src; lbi.alt=img.alt; lb.classList.add('on'); }
  function close(){ lb.classList.remove('on'); lbi.removeAttribute('src'); }
  document.querySelectorAll('.g-item').forEach(function(el){
    el.addEventListener('click',function(){open(el);});
    el.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();open(el);} });
  });
  document.getElementById('lbx').addEventListener('click',close);
  lb.addEventListener('click',function(e){ if(e.target!==lbi) close(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
})();
