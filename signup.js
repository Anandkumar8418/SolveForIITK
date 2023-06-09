

//Please Subscribe Ash_is_Coding.

function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    otpverify.style.display = "block";
    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random() * 10000);
    
    
    Email.send({
        SecureToken: "ae63c304-8540-4623-8c5e-2077bc51617a ",
        To: email.value,
        From: "Anand7992262498@gmail.com",
        Subject: "This is the for OTP Authentication",
        Body: otp_val
    }).then(
        //if success it returns "OK";
        message => {

            alert("OTP sent to your email " + email.value);

            // now making otp input visible
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click', () => {
                // now check whether sent email is valid
                if (otp_inp.value == otp_val ) {
                    alert("Email address verified...");
                }
                else {
                    alert("Invalid OTP");
                }
            })

        }
    );

}