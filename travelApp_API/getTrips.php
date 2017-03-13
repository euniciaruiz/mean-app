<?php
        include 'connectDb.php';

        $trips = array();
        $sql = "SELECT * FROM Trip";
        $query = mysqli_query($con, $sql);

        if(mysqli_num_rows($query) > 0){
                while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
                        $perTrip = array();
                        $perTrip["id"] = $row["ID"];
                        $perTrip["travelDate"] = $row['travel_date'];
                        $perTrip["amount"] = $row['amount'];
                        
                        $dest_id = $row['destination_id'];
                        $result = mysqli_query($con, "SELECT location FROM Destination WHERE id=$dest_id LIMIT 1");
                        $destination = mysqli_fetch_assoc($result)['location'];
                        
                        $perTrip["location"] = $destination;
                        

                        array_push($trips, $perTrip);
                }

                echo json_encode($trips);
        }else {
                echo json_encode("Sorry, no data found");
        }
?>