<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $lname = htmlspecialchars($_POST['lname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = "lopezpuertaventas94@outlook.com";

    // Create the email subject and body
    $subject = "Solicitud de Cotización de " . $name;
    $body = "Nombre: " . $name . "\n";
    $body .= "Teléfono: " . $phone . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Mensaje / Comentarios:\n" . $message . "\n";

    // Set email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message successfully sent!";
    } else {
        echo "Failed to send message.";
    }
}
?>
