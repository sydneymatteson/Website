var pictures = document.querySelectorAll('picture');

pictures.forEach(function( pic ){
  pic.addEventListener('click', function( e ){
     this.classList.toggle('lightbox');
  });
});
