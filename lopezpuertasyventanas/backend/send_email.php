<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $lname = htmlspecialchars($_POST['lname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    // Collect form data and handle optional checkboxes
    $puertas = isset($_POST['puertas']) ? htmlspecialchars($_POST['puertas']) : '';
    $ventanas = isset($_POST['ventanas']) ? htmlspecialchars($_POST['ventanas']) : '';
    $puertasDeGaraje = isset($_POST['puertasDeGaraje']) ? htmlspecialchars($_POST['puertasDeGaraje']) : '';
    $puertasDeCloset = isset($_POST['puertasDeCloset']) ? htmlspecialchars($_POST['puertasDeCloset']) : '';

    $message = htmlspecialchars($_POST['message']);

    $services = [$puertas, $ventanas, $puertasDeGaraje, $puertasDeCloset];
    // Set the recipient email address
    $to = "joshuamercadorivera@yahoo.com"; /* lopezpuertaventas94@outlook.com */

    // Create the email subject and body
    $subject = "Solicitud de Cotización de " . $name . " " . $lname;
    $body = "Nombre: " . $name . " " . $lname . "\n";
    $body .= "Teléfono: " . $phone . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Servicio de Interés:\n";

    // Loop through services to add them to the body if they are not empty
    foreach ($services as $service) {
        if (strlen($service) > 0) {  // Check if the service is not empty
            $body .= "\t" . $service . "\n";
        }
    }
      
    $body .= "Mensaje / Comentarios:\n" . "\t" .$message . "\n";

    // Set email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
        echo "<script>
            setTimeout(function() {
                window.location.href = '/';
            }, 3000); // 2000 milliseconds = 2 seconds
        </script>";
    } else {
        echo "Failed to send message.";
    }
}
?>
