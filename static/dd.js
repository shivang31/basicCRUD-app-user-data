 $(document).ready(function() {
                 $('.error').hide();
                 $(".btn-primary").click(function() {
                              var dataString = 'firstname='+ firstname +'&lastname='+ lastname + '&email=' + email + '&phone=' + phone+ '&password=' + password;
                              $.ajax({
                                       type: "POST",
                                       url: "/add",
                                       data: dataString});
                              return false;                     
                                     });
              });