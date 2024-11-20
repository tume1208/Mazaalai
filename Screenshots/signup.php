<?php

include 'connect.php';


 if(isset($_POST['signUp'])){
    $firstName=$_POST['fName'];
    $lastName=$_POST['lName'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

      $checkEmail="SELECT * From users where email='$email'";
      $result=$conn->query($checkEmail);
      if($result->num_rows>0){
        echo"Өөр Email хаяг ашиглана уу. ";
      }
      else{
        $insertQuery="INSERT INTO users(firstName,lastName,email,password)
                      VALUES('$firstName','$lastName','$email','$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location: index.php");
            }
            else{
                echo "Error:" .$conn->error;
            }
      }  

}

 if(isset($_POST['signIn'])){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $sql="SELECT * FROM users WHERE email='$email' and password='$password'";
    $result=mysqli_query($conn, $sql);
    $row=mysqli_fetch_array($result, MYSQLI_ASSOC);
    $count=mysqli_num_rows($result);
    if($count==1){
        header("Location: homepage.php");
        exit();
    }
    else{ echo '<script>
        window.index.html="index.php";
        alert("Email эсвэл Password буруу.")
      </script>';
    }
}
?>
