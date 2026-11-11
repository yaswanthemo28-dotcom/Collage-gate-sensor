let entries = 0;
let exits = 0;
let events = [];

function updateDashboard() {

    document.getElementById("entries").innerText = entries;

    document.getElementById("exits").innerText = exits;

    document.getElementById("inside").innerText =
        Math.max(0, entries - exits);

    let table = document.getElementById("eventRows");

    if (events.length === 0) {
        table.innerHTML =
            "<tr><td colspan='2'>No events recorded</td></tr>";
        return;
    }

    table.innerHTML = events.map(event => `
        <tr>
            <td>${event.type}</td>
            <td>${event.time}</td>
        </tr>
    `).join("");
}

function addEntry() {

    entries++;

    events.unshift({
        type: "ENTRY",
        time: new Date().toLocaleTimeString()
    });

    document.getElementById("message").innerText =
        "Entry recorded successfully!";

    events = events.slice(0, 10);

    updateDashboard();
}

function addExit() {

    if (entries - exits <= 0) {
        document.getElementById("message").innerText =
            "No people currently recorded inside.";
        return;
    }

    exits++;

    events.unshift({
        type: "EXIT",
        time: new Date().toLocaleTimeString()
    });

    document.getElementById("message").innerText =
        "Exit recorded successfully!";

    events = events.slice(0, 10);

    updateDashboard();
}

function resetData() {

    entries = 0;
    exits = 0;
    events = [];

    document.getElementById("message").innerText =
        "All data has been reset.";

    updateDashboard();
}

updateDashboard();