<?php
        include 'connectDb.php';

        $loc = $_POST["location"];
        $type = $_POST["type"];

        $sql = "INSERT INTO Destination (type, location) VALUES('$type', '$loc')";
        $query = mysqli_query($con, $sql);
        if($query){
                echo json_encode("successfully inserted into database!");
        }else {
                echo json_encode($sql);
                // echo json_encode("I'm sorry but something went wrong in inserting data into the database");
        }
?>