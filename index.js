$(document).ready(function(){
    var docked = 0;

    $("#dock li ul").height($(window).height());

    $("#dock .dock").click(function(){
        $(this).parent().parent().addClass("docked").removeClass("free");

        docked += 1;
        var dockH = ($(window).height()) / docked
        var dockT = 0;               

        $("#dock li ul.docked").each(function(){
        $(this).height(dockH).css("top", dockT + "px");
        dockT += dockH;
        });
        $(this).parent().find(".undock").show();
        $(this).hide();

        if (docked > 0)
        $("#content").css("margin-left","250px");
        else
        $("#content").css("margin-left", "60px");
    });

    $("#dock .undock").click(function(){
        $(this).parent().parent().addClass("free").removeClass("docked")
        .animate({right:"-80px"}, 200).height($(window).height()).css("top", "0px");

        docked = docked - 1;
        var dockH = ($(window).height()) / docked
        var dockT = 0;               

        $("#dock li ul.docked").each(function(){
        $(this).height(dockH).css("top", dockT + "px");
        dockT += dockH;
        });
        $(this).parent().find(".dock").show();
        $(this).hide();

        if (docked > 0)
        $("#content").css("margin-left", "40px");
        else
        $("#content").css("margin-left", "80px");
    });

    $("#dock li").hover(function(){
        $(this).find("ul").animate({right:"40px"}, 200);
        }, function(){
            $(this).find("ul.free").animate({right:"-80px"}, 200);
        });
    }); 
   
$(".img-item").click((e)=>{
    let imgSrc = $(e.target).attr("src");//=> as a getter
    $("#maim-img").attr("src" ,imgSrc); // => as asetter
})

// Check javascript has loaded
$(document).ready(function(){

  // Click event of the showPassword button
  $('#showPassword').on('click', function(){

    // Get the password field
    var passwordField = $('#password');

    // Get the current type of the password field will be password or text
    var passwordFieldType = passwordField.attr('type');

    // Check to see if the type is a password field
    if(passwordFieldType == 'password')
    {
        // Change the password field to text
        passwordField.attr('type', 'text');

        // Change the Text on the show password button to Hide
        $(this).val('Hide');
    } else {
        // If the password field type is not a password field then set it to password
        passwordField.attr('type', 'password');

        // Change the value of the show password button to Show
        $(this).val('Show');
    }
  });
});

    // Wait for the DOM to be ready
    $(function() {
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $("form[name='registration']").validate({
          // Specify validation rules
          rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: "required",
            lastname: "required",
            email: {
              required: true,
              // Specify that email should be validated
              // by the built-in "email" rule
              email: true
            },
            password: {
              required: true,
              minlength: 5
            }
          },
          // Specify validation error messages
          messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
              required: "Please enter a password",
              minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
          },
          // Make sure the form is submitted to the destination defined
          // in the "action" attribute of the form when valid
          submitHandler: function(form) {
            form.submit();
          }
        });
      });
    
    