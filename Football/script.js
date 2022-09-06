// myFunction = () => {
//     var box = document.getElementById('myMain');
//     if (!box.style.display || box.style.display == "none") {
//         box.style.display = "block";
//     }
//     else {
//         box.style.display = "none";
//     }
// }

// // let array = 

// fetch('https://jsonmock.hackerrank.com/api/football_competitions?year=2011')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


async function getUsers(year) {
    // let year = document.querySelector('.2011')
    // year = year.innerHTML
    let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    } 
    
}

async function myFunction(year) {
    console.log(year)
    let users = await getUsers(year);
    if (users.total == 0){
        let html = ''
        html = `<div data-test-id="no-result">No Matches Found</div>`
        let container = document.querySelector('#myMain');
        container.innerHTML = html;
        return
    }
    
    let html = `<p class = "total_match">${'Total Matches: ' + users.total}</p>`
    users.data.forEach((user)=> {
        let htmlSegment = `<div class="user">
                                <p class = "match">${"Match " + user.name + ' won by ' + user.winner }</p>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#myMain');
    container.innerHTML = html;
}
