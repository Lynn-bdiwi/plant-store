
function getCodeAsString() {
    const inputs = document.querySelectorAll('#flex-container .flex');
    let codeString = '';
    inputs.forEach(input => {
        codeString += input.value;
    });
    return codeString;
}

async function verifyCode() {

    const formData = new FormData();
    formData.append('email', localStorage.getItem("email"));
    formData.append('verification_code', getCodeAsString());
    
    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/verify-code" , 
        {
            method : 'POST',
            body: formData
        }
    );

    const data = await response.json();
    console.log(data);


    await new Promise(resolve => setTimeout(resolve, 7000));
    window.location.href="login page.html"

}


async function resendConfirmCode(){
    const formData = new FormData();
    formData.append('email', localStorage.getItem("email"));

    const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/resend-verification-code" , 
        {
            method : 'POST',
            body: formData
        }
    );
    const data = await response.json();
    console.log(data);
}
