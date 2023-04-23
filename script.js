const arr = prompt("Enter your name and register number separated by a tilde ~").split("~");
document.getElementById("change").innerHTML = "<p>Name: <strong>"+arr[0]+"</strong></p><p>Registration number: <strong>"+arr[1]+"</strong></p>";
