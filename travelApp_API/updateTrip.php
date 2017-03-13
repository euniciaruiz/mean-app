<?php
        include 'connectDb.php';

        $id= $_POST['id'];
        $amount = $_POST['amount'];
        $location = $_POST['location'];

        $sql = "UPDATE Trip SET amount=$amount, destination_id=$location WHERE ID=$id";
        $query = mysqli_query($con, $sql);

        if($query){
                echo json_encode('successfully updated trip!');
        }else {
                echo json_encode($sql);
        }
?>