

//Please Subscribe Ash_is_Coding.

function sendOTP() {
    const email = document.getElementById('email');
    var regExp = new RegExp("[a-z0-9\.-_]*@iitk\.ac\.in$", "i");
    match = email.value.match(regExp);
    


    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random() * 10000);
    console.log(otp_val);

    Email.send({
        SecureToken: "ae63c304-8540-4623-8c5e-2077bc51617a ",
        To: email.value,
        From: "Anand7992262498@gmail.com",
        Subject: "This is the for OTP Authentication",
        Body: otp_val
    }).then(
        //if success it returns "OK";
        message => {
            if (match) {

                otpverify.style.display = "block";
                alert("OTP sent to your email " + email.value);

                // now making otp input visible
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');

                otp_btn.addEventListener('click', () => {
                    // now check whether sent email is valid
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified...");
                    }
                    else {
                        alert("Invalid OTP");
                    }
                })
            } else { alert("Not an email of IITK :)"); }

        }
    );

}