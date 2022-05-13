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

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

