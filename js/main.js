$(function() {

    $('.show_menu').on('click touch', function(){
        $('nav').toggleClass('out');
        $('.show_menu').toggleClass('close_menu');
    });

    $('#search_btn').on('click', function(){
        $('#search').addClass('showinput');
    });

    $(".contact_form").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        enquiry: "required",
        callback: "required"
      },
      messages: {
        firstname: "Please specify your name",
        lastname: "Please specify your lastname",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain / .com"
        },
        enquiry: "Please your type of enquiry",
        callback: "Please select preferred callback time"
    },

      ignore: '',

    });

});
