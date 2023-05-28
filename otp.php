<!DOCTYPE html>
<html>
    <head>
        <title>OTP Checker</title>
        <style>
        body {
    height: 600px;
    background-color: #1fd1f9;
    background-image: linear-gradient(purple, violet, cyan);
}
.card
{
    position: absolute;
    padding:20px;
    margin:120px 90px;     
    background:rgba(255,255,255,0.4);
    background-size: cover;
    border-radius: 9px;
    line-height: 1.1em;
    box-shadow: 3px 3px 5px 5px cyan;
    height: 300px;
    top: 50px;
    left: 20px;
    right: 20px;
    margin: 80px auto;
    backdrop-filter: blur(3px);
}
input
{
       background: rgba(255,255,255,0.4);
       display:block;
       margin:21px auto;
       text-align:center;
       outline:none;
       padding:14px 14px;
       width:200px;
       border:5px;
       border-radius:14px;
       font-size:15px;
       color: purple;
       box-shadow: 2px 2px 3px 3px #00FFCD;
}
::placeholder
{
    color: gray;
    font-size:15px;
   
}
button {
      
    color: Violet;
    font-size:18px;
    text-decoration: none;
    border:5px;
    border-radius:14px;
    height: 40px;
    width:200px;
    text-align:center;
    outline:none;
    text-align: center;
    box-shadow: 2px 2px 3px 3px #00FFCD;
    background: rgba(255,255,255,0.4);
   
}
        </style>
    </head>
    <script>
    var tno = ((1000000*Math.random()) | 0);
var otp = ((10000*Math.random()) | 0);
alert("Dear Sir/Madam, "+otp+ " is your OTP (One Time Password) for transaction number TN"+tno+"\n"+"Pease do not share this with anyone");
var flag = false;
function button()
{
    var eotp = document.getElementById("myotp").value;
    if (flag == false)
    {
    if(eotp==otp)
    {
        alert("Correct OTP. Your account is verified!😊")
        flag = true;
    }
    else
    {
        alert("Incorrect OTP.😟 Try again!")
    }
    }
    else
    {
        alert("Your account is already verified😊")
    }
}
function resend()
{
    otp = ((10000*Math.random()) | 0);
    alert("Dear Sir/Madam, "+otp+ " is your OTP (One Time Password) for transaction number TN"+tno+"\n"+"Pease do not share this with anyone");
}
    </script>
    <body>
    <div style = "vertical-align: center">
    <div class="card">
    <center>
    <br> <br>
        <input type="Number" id="myotp" placeholder="Enter OTP">
        <br><br>
        <button onclick = button();><b>Verify OTP</b></button>
        <br><br>
        <p style = "font-family: courier, helvetica, times, serif;" onclick = resend();><b>Resend OTP</b></p>
        </center>
        </div>
    </div>
    </body>
</html>
