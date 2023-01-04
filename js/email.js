

Email.send({
    Host : "smtp.gmail.com",
    Username : "username",
    Password : "password",
    To : 'turtoi.a.m@gmail.com','andreea_pupaza@yahoo.com',
    From : "you@isp.com",
    Subject : "Confirmari",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
