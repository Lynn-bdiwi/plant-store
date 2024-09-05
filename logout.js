

var t = localStorage.getItem('access-token');
console.log("Token: " + t);

async function logout() {
    
    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/logout" , 
        {
            method : 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            },
        }
    );

    const data = await response.json();
    console.log(data);


    await new Promise(resolve => setTimeout(resolve, 7000));
    window.location.href="login page.html"

}

