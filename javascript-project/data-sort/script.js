let users = [
    { id: 1, name: "aakash", grid: 9220 },
    { id: 2, name: "pratham", grid: 9544 },
    { id: 3, name: "dixit", grid: 9515 },
    { id: 4, name: "zeel", grid: 8781 },
    { id: 5, name: "priyanka", grid: 7999 },
    { id: 6, name: "aayush", grid: 7733 },
    { id: 7, name: "bhavesh", grid: 9230 },
    { id: 8, name: "vrushita", grid: 9288 },
    { id: 9, name: "het", grid: 9114 },
    { id: 10, name: "poojan", grid: 7966 },
    { id: 11, name: "bhavesh", grid: 9229 }
];

const usersDiv = document.getElementById("place-users");

// Function to render users
const renderUsers = (users) => {
    usersDiv.innerHTML = users.map(user => `
        <div class="col-3">
            <ul class="user">
                <li>ID : ${user.id}</li>
                <li>name : ${user.name}</li>
                <li>grid : ${user.grid}</li>
            </ul>
        </div>
    `).join('');
};

// Initial render of all users
renderUsers(users);

// Select form and the select element inside the form
const select = document.querySelector("form select");
const form = document.querySelector("form");
const search = document.querySelector("#search")
// Add event listener to handle form submission*c
form.onsubmit = (e) => {
    e.preventDefault();
    const searchValue = search.value.trim()
    let userFilter = [...users]
    if(searchValue){
        userFilter = users.filter(
            function (obj) {
                return String(obj.grid).startsWith(searchValue) || String(obj.id).startsWith(searchValue)||(obj.name).startsWith(searchValue)
            }
        )
    }
    let sortedUsers;
    switch (select.value) {
        case '1':
            sortedUsers = userFilter.toSorted((a, b) => a.name.localeCompare(b.name) || a.grid - b.grid);
            break;
        case '2':
            sortedUsers =userFilter.toSorted((a, b) => a.grid - b.grid);
            break;
        default:
            sortedUsers = userFilter;
    }

    renderUsers(sortedUsers);
};
