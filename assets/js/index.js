$('.scroll').on("click",function(e){
  Window.alert('el otro')
  e.preventDefault();
  var target = $( $(this).attr("href") );
  if(target.length){
    $("html, body").animate({ scrollTop: target.offset().top },100,"easeInOutQuad");
  }
});

$('input.checkbox').click(function(){
  if($('input.checkbox').is(':checked')){
    $('.theme').attr('href', 'dark.css');
  }else{
    $('.theme').attr('href', 'light.css')
  }

})  
        
const btn = document.querySelector('span.light');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})
;

