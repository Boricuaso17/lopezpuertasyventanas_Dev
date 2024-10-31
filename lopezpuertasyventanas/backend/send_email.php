<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $lname = htmlspecialchars($_POST['lname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "joshuamercadorivera@yahoo.com"; /* lopezpuertaventas94@outlook.com */

    // Create the email subject and body
    $subject = "Solicitud de Cotización de " . $name . " " . $lname;
    $body = "Nombre: " . $name . " " . $lname . "\n";
    $body .= "Teléfono: " . $phone . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Mensaje / Comentarios:\n" . $message . "\n";

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
