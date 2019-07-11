 $(document).ready(function() {
                 $('.error').hide();

                 $(".btn-update").click(function() {
                
    var firstname = document.forms["form12"]["firstname"];
    var lastname = document.forms["form12"]["lastname"];                  
    var email = document.forms["form12"]["email"];    
    var phone = document.forms["form12"]["phone"];    
    var password = document.forms["form12"]["password"];  
   
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
                                  firstname:$('#6').val(),
                                  lastname:$('#7').val(),
                                  email:$('#8').val(),
                                  phone:$('#9').val(),
                                  password:$('#10').val(),
                                  id:$('#11').val()
                                    },
                               type: "POST",
                               url: "/update",
                                 success: function(result) {
                          console.log(result);
                          location.reload();
                        window.alert(result);

                                                           }
                           });
  
                      return false; 

    });
});