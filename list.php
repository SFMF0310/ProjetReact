<?php 
    include 'connect.php';
    $req = "SELECT * FROM reunions";
    $resustat = mysqli_query($link,$req);
    if(mysqli_num_rows($resustat)){
        while($row[] = mysqli_fetch_assoc($resustat)){
            $json = json_encode($row);
        }
    }else{
        echo "result not found" ;
    }
    echo($json);
    mysqli_close($link);

?>