<?php
  // home.php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  $message = "Welcome, " . "Gaurav";
  echo json_encode([
    'message' => $message,
    'stats'   => ['stores' => 423, 'exams' => 128]
  ]);
?>
