function showapipopup() {
    document.getElementById('apipopup').style.display = 'block';
}


async function logapi() {
    const identifier = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 

    const formData = new FormData();
    formData.append('identifier', identifier);
    formData.append('password', password);

    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/login" , 
        {
            method : 'POST',
            body: formData
        }
    );
    const data = await response.json();
    console.log(data);

    showapipopup();
}


function getCodeAsString() {
    const inputs = document.querySelectorAll('#apipopup .code-input');
    let codeString = '';
    inputs.forEach(input => {
        codeString += input.value;
    });
    return codeString;
}


async function confirm2FACode(){
    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);
    formData.append('TwoFactorAuth', getCodeAsString());

    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/confirm-2fa-code" , 
        {
            method : 'POST',
            body: formData
        }
    );
    const data = await response.json();
    console.log(data);

    await new Promise(resolve => setTimeout(resolve, 7000));

    const token = data.access_token;
    localStorage.setItem("access-token", token);   

    console.log("access token:", token);

    refreshToken();
    await new Promise(resolve => setTimeout(resolve, 7000));


    if (response.ok) { 
        window.location.href = "index.html"; 
    }
}

async function resend2FACode(){
    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);

    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/resend-2fa-code" , 
        {
            method : 'POST',
            body: formData
        }
    );
    const data = await response.json();
    console.log(data);
}


async function refreshToken() {
    //const token = localStorage.getItem("access-token");

    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/refresh-token" , 
            {
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("access-token")}`
                }
            }
        );
    
    const data = await response.json();
    console.log(data);

    console.log("refreshed token:", data.access_token);

    localStorage.setItem("access-token", data.access_token);

}

