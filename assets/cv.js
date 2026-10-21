(function(){
  var root=document.documentElement;
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s);}catch(e){}
  document.getElementById('theme').addEventListener('click',function(){
    var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });
  document.getElementById('print').addEventListener('click',function(e){e.preventDefault();print();});
})();
