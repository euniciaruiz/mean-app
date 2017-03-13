<?php
        include 'connectDb.php';
        $id = $_GET['id'];

        $sql = "SELECT * FROM Trip WHERE ID=$id";
        $query = mysqli_query($con, $sql);
        
        if(mysqli_num_rows($query) >0){
                while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
                        $trip = array();
                        $trip['id'] = $row['ID'];
                        $trip['amount'] = $row['amount'];
                        $dest_id = $row['destination_id'];
                        
                        $destination = array();

                        $sql2 = "SELECT * FROM Destination WHERE ID=$dest_id";
                        $query2 = mysqli_query($con, $sql2);

                        while($row2 = mysqli_fetch_array($query2, MYSQLI_ASSOC)){
                                $destination['id'] = $row2['ID'];
                                $destination['type'] = $row2['type'];
                                $destination['location'] = $row2['location'];
                        }

                        $trip['location'] = $destination;
                }

                echo json_encode($trip);
        }else{
                echo json_encode('Sorry, no data found');
                
        }
?>