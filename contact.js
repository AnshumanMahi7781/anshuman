let SenderName = document.getElementById("SenderName");
let SenderMail = document.getElementById("SenderMail");
let SenderMsg = document.getElementById("SenderMsg");
let SendBtn = document.getElementById("SendBtn");
let ErrorMsg = document.getElementById("ErrorMsg");
let str;

function ErrorShow(Msg){
    ErrorMsg.style.opacity = "1";
    ErrorMsg.textContent = Msg;

    setTimeout(() => {
        ErrorMsg.style.opacity = "0";
    }, 3000);
}
SendBtn.addEventListener('click', ()=>{
if(SenderName.value ==""){
    str= "First Enter Your Name";
    ErrorShow(str);
    SenderName.focus();
}else if(SenderMail.value == ""){
    str= "Enter Your Email";
    ErrorShow(str);
    SenderMail.focus();
}else if(SenderMsg.value == ""){
    str= "Enter Message";
    ErrorShow(str);
    SenderMsg.focus();
}else{
    let parms = {
        name: SenderName.value,
        email: SenderMail.value,
        message: SenderMsg.value,
      };
      const serviceID = "service_48gcxqs";
      const templateID = "template_910oydg";
      emailjs
        .send(serviceID, templateID, parms)
        .then((res) => {
            SenderName.value = '';
            SenderMail.value = '';
            SenderMsg.value = '';
            SenderName.focus();
            str= "Message Sent Successfully";
            ErrorMsg.style.backgroundColor = "#28a745";
            ErrorShow(str);
        })
        .catch((err) => ErrorShow("There Was Some Problem !"));
}
})