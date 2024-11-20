
        var Mainimg = document.getElementById("Mainimg");
        var smallimg = document.getElementsByClassName("small-img");
  
       for (var i=0; i<smallimg.length; i++){
        smallimg[i].onclick = function() {
          Mainimg.src = this.src;
        }
       }