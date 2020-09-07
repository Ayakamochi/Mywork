console.log('testing logging');

// layout/theme.liquid
//Modal Actions
//center modal based on window size
function centerModal(){
   var modal = $('.modal.open');
   var mWidth = modal.outerWidth()
   var mHeight = modal.outerHeight();
   var width = $(window).width();
   var height = $(window).height();
   if((width % 1) != 0){
      width = Math.round(width)
   }
   if((height % 1) != 0){
      height = Math.round(height)
   }
   var topPos = (height / 2) - (mHeight / 2);
   var leftPos = (width / 2) - (mWidth / 2); 
   modal.css({top: topPos, left:leftPos})
}
//open modal and overlay
function openModal(){
   $('.modal').removeClass('hidden').addClass('open');
   $('.modal--overlay').removeClass('hidden').addClass('open');
   $('body').css('overflow', 'hidden');
   centerModal();
}

//close modal and overlay
function closeModal(overlay){
   $(overlay).addClass('hidden').removeClass('open');
   $('.modal.open').addClass('hidden').removeClass('open');
   $('body').css('overflow', 'auto');
}



//MAKING THE AJAX CALL
function addItem(form_id) {
   $.ajax({
      type: 'POST', 
      url: '/cart/add.js',
      dataType: 'json', 
      data: $('#'+form_id).serialize(),
      success: addToCartOk,
      error: addToCartFail
   });
}





document.onload = function() {
  document.getElementById("AddToCart").addEventListener("submit", function(event){
  console.log('testing logging2');
  event.preventDefault()
});
  
}