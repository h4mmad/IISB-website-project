      $(document).ready(function(){
        $("#buttonTaha").click(function(){
        $("#taha").slideToggle();
        });
        $("#buttonVision").click(function(){
            $("#vision").slideToggle();
            $("#buttonVision").toggleClass("bi-arrow-up-circle-fill", 5000, "easeOutSine");
            });
        $("#buttonJameel").click(function(){
                $("#jameel").slideToggle();
                });
      });    
     