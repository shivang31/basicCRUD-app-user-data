 $(document).ready(function() {
                 $('.error').hide();

                 $(".btn-primary").click(function() {
                
    var firstname = document.forms["formx"]["firstname"];
    var lastname = document.forms["formx"]["lastname"];                  
    var email = document.forms["formx"]["email"];    
    var phone = document.forms["formx"]["phone"];    
    var password = document.forms["formx"]["password"];  
   
    if (firstname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        firstname.focus(); 
        return false; 
    } 
     if (lastname.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lastname.focus(); 
        return false; 
    }
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value<1000000000||phone.value>9999999999)                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (password.value=="")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    }   
   

                     $.ajax({
                               data:{
                                  firstname:$('#1').val(),
                                  lastname:$('#2').val(),
                                  email:$('#3').val(),
                                  phone:$('#4').val(),
                                  password:$('#5').val()
                                    },
                               type: "POST",
                               url: "/add",
                                 success: function(result) {
                          console.log(result);
                        window.alert(result);
                      location.reload()
                                                           }
                           });
  
                      return false; 

    });
});