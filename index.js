var number = $(".num");
var display = $("#display");
var backspace = $("#backspace");
var delete_num = $('#display span:last-child')
var calling = $(".fa-phone-alt");
var displayed = []

var count = 0;

number.on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    display.append('<span>' + num.trim() + '</span>');
    displayed.push(num);
    count++
  }
});


backspace.on('click', function() {
  $('#display span:last-child').remove();
  displayed.pop();
  console.log(displayed)
  count--;
});



calling.on('click', function(){
//  alert(dsiplayed)
  console.log(displayed);
  var x = displayed.join('')
  alert("Calling " + x);
})
