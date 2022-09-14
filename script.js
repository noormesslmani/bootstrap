const fullName = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')
const sendButton = document.getElementById('send-btn')
const errorMsg= document.getElementById('error-msg')
const tablet= document.getElementById('tablet')
const mobile= document.getElementById('mobile')
const desktop= document.getElementById('desktop')
const body= document.getElementById('body')
var inputInfo=[fullName, email, number,message]


//change screen view on tablet icon click
tablet.onclick= function (){
    document.body.style.paddingLeft='200px'
    document.body.style.paddingRight='200px'
}

//change screen view on mobile icon click
mobile.onclick= function (){
    document.body.style.paddingLeft='400px'
    document.body.style.paddingRight='400px'
}

//change screen view on desktop icon click
desktop.onclick= function (){
    document.body.style.paddingLeft='0px'
    document.body.style.paddingRight='0px'
}


//send input to databases on button click
sendButton.onclick= function validate(inputInfo){
    
    //check if the input field are valid
    if (validEmail(inputInfo) && validName(inputInfo) && validNum(inputInfo) && validMsg(inputInfo)){
        errorMsg.textContent=''
        let url
        url='http://localhost/bootstrap/addcontact.php/'
        //send the data to the api 
        fetch(url,{
            method: 'POST',
            body: new URLSearchParams({"fullname":fullName.value, "email":email.value, "phonenumber":number.value, "messages": message.value }),
        })
        window.location.reload()
    }
    else{
        //display errror message if some input is invalid
        errorMsg.textContent='The following are invalid:'
        if(! validEmail(inputInfo)){errorMsg.textContent+=' email '}
        if(! validName(inputInfo)){errorMsg.textContent+=' name '}
        if(! validNum(inputInfo)){errorMsg.textContent+=' number '}
        if(! validMsg(inputInfo)){errorMsg.textContent+=' message '}
    }
}   

//check if email is valid
function validEmail(inputInfo){
    let valid =/^([a-z0-9]{3,})+[@]+([a-z]{2,})+[.]+([a-z]{2,})*$/
    return (valid.test(email.value))
}
//check if he name is valid
function validName(inputInfo){
    return(fullName.value.trim().length>5)
}
//check if phone number is valid
function validNum(inputInfo){
    let valid1= /^[+9613]+([0-9]{6})*$/
    let valid2= /^[+961]+([0-9]{8})*$/
    return (valid1.test(number.value) || valid2.test(number.value) )
}
//check if message is valid
function validMsg(inputInfo){
    return (message.value.length>=100)
}





