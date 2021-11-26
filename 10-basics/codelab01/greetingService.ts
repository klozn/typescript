function generateGreeting(person) {
    return "Hello there, " + person;
}

const user = "Jimmy McJimmens";

document.getElementById("content").innerText = generateGreeting(user);