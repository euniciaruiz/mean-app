<?php
        include 'connectDb.php';
        
        $destinations = array();
        $sql = "SELECT * FROM Destination";
        $query = mysqli_query($con, $sql);

        if(mysqli_num_rows($query) > 0){
                while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
                        $perDestination = array();
                        $perDestination['id'] = $row['ID'];
                        $perDestination['type'] = $row['type'];
                        $perDestination['location'] = $row['location'];

                        array_push($destinations, $perDestination);
                }

                echo json_encode($destinations);
        }else {
                echo json_encode("Sorry, no data found");
        }
?>