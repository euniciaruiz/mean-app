<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: X-Requested-With');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT');
        $con = mysqli_connect("localhost", "root", "root", "TravelApp");

?>