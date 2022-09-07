getUsers = async (year) => {
    let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    } 
    
}

myFunction = async (year) => {
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
        let htmlSegment = `<ul class="user" data-test-id="match-list">
                                <li class = "match">${"Match " + user.name + ' won by ' + user.winner }</li>
                        </ul>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#myMain');
    container.innerHTML = html;
}
