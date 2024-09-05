
async function register() { 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value; 
    const username = document.getElementById("username").value; 
    const phoneNumber = document.getElementById("phonenumber").value; 
    const rePassword = document.getElementById("re-password").value; 
    const certificateFile = document.getElementById("certificate").files[0]; 
    const profilePhotoFile = document.getElementById("profile-photo").files[0];  
 
    const formData = new FormData(); 
    formData.append('email', email); 
    formData.append('password', password); 
    formData.append('user_name', username); 
    formData.append('profile_photo', profilePhotoFile);  
    formData.append('certificate', certificateFile); 
    formData.append('phone_number', phoneNumber); 
    formData.append('password_confirmation', rePassword); 
 

    localStorage.setItem("email", email);   

    try { 
        
        const response = await fetch("https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth/register", { 
            method: 'POST', 
            body: formData
        }); 
 
        const data = await response.json(); 
        console.log(data); 

        await new Promise(resolve => setTimeout(resolve, 9000));
 
        if (response.ok) { 
            window.location.href = "verification.html"; 
        } 
    } catch (error) { 
        console.error("Error:", error); 
    } 
}