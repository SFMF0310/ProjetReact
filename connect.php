<?php
    $link = mysqli_connect('localhost','root','','meetings');   
    if(!$link){
        echo ('connection failled');
    }

?>