<?php
    include 'connect.php';
    $data = file_get_contents("php://input");
    $obj = json_decode($data,true);

    $sujet = $obj['sujet'];
    $lieu =  $obj['lieu'];
    $datee = $obj['datee'];
    $heure = $obj['heure'];
    $participants = $obj['participants'];


    $req = "INSERT INTO reunions(id,sujet,lieu,datee,heure,participants) VALUES (null,'$sujet','$lieu','$datee','$heure','$participants')";

    $result = mysqli_query($link,$req);
    if($result){
        echo json_encode("Insert Success");
    }
    else{
        echo json_encode("Insert failled");
    }
?>