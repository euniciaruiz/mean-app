<?php
        include 'connectDb.php';
        $loc = $_GET['loc'];

        $sql = "SELECT * FROM Destination WHERE location='$loc'";
        $query = mysqli_query($con, $sql);
        
        if(mysqli_num_rows($query) >0){
                while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
                        $destination = array();
                        $destination['id'] = $row['ID'];
                        $destination['type'] = $row['type'];
                        $destination['location'] = $row['location'];
                }

                echo json_encode($destination);
        }else{
                echo json_encode($sql);
                
        }
?>