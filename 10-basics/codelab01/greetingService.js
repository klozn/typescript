function generateGreeting(person) {
    return "Hello there, " + person;
}
var user = "Jimmy McJimmens";
document.getElementById("content").innerText = generateGreeting(user);
