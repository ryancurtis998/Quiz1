  $(document).ready(function(){
     $("input[type='button']").click(function(){
         var quesone = parseInt($("input[name='question1']:checked").val());
         var questwo = parseInt($("input[name='question2']:checked").val());
         var questhree = parseInt($("input[name='question3']:checked").val());
         var quesfour = parseInt($("input[name='question4']:checked").val());
         var quesfive = parseInt($("input[name='question5']:checked").val());
         var quessix = parseInt($("input[name='question6']:checked").val());
         var quesseven = parseInt($("input[name='question7']:checked").val());
         var queseight = parseInt($("input[name='question8']:checked").val());
         var quesnine = parseInt($("input[name='question9']:checked").val());
         var questen = parseInt($("input[name='question10']:checked").val());
         var total = quesone + questwo + questhree + quesfour + quesfive + quessix + quesseven + queseight + quesnine + questen;
         document.getElementById('result').innerHTML = "You have scored " + total;

      });
});
// scrolldown progress bar
$(window).scroll(function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr('value', position);

});
