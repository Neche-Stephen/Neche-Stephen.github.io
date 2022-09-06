

// fetch('https://jsonmock.hackerrank.com/api/football_competitions?year=2011')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

 

//   async function getUsers() {
//     let url = 'https://jsonmock.hackerrank.com/api/football_competitions?year=2011';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function renderUsers() {
//     let users = await getUsers();
//     let html = '';
    // users.data.forEach(user => {
    //     let htmlSegment = `<div class="user">
    //                         <h2>${users.data[0].name} ${users.data[0].name}</h2>
    //                     </div>`;

    //     html += htmlSegment;
    // });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();

{/* <h2>${users.data[0].name} ${users.data[0].name}</h2> */}
async function getUsers() {
    let url = 'https://jsonmock.hackerrank.com/api/football_competitions?year=2011';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = `<div class="user">
                            <ul>
                                <li>${'Total Matches: ' + users.total}</li>
                                <li>${"Match " + users.data[0].name + ' won by ' + users.data[0].winner }</li>
                        </div>`;


    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();

