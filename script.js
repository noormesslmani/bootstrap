const fullName = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')
const sendButton = document.getElementById('send-btn')
const errorMsg= document.getElementById('error-msg')
const tablet= document.getElementById('tablet')
const mobile= document.getElementById('mobile')
const body= document.getElementById('body')
var inputInfo=[fullName, email, number,message]

tablet.onclick= function (){
    document.body.style.paddingLeft='200px'
    document.body.style.paddingRight='200px'
}

mobile.onclick= function (){
    document.body.style.paddingLeft='400px'
    document.body.style.paddingRight='400px'
}


sendButton.onclick= function validate(inputInfo){
    console.log('Hello')

    if (validEmail(inputInfo) && validName(inputInfo) && validNum(inputInfo) && validMsg(inputInfo)){
        errorMsg.textContent=''
        let url
        url='http://localhost/bootstrap/addcontact.php/'
        fetch(url,{
            method: 'POST',
            body: new URLSearchParams({"fullname":fullName.value, "email":email.value, "phonenumber":number.value, "messages": message.value }),
        })
        window.location.reload()
    }
    else{
        errorMsg.textContent='The following are invalid:'
        if(! validEmail(inputInfo)){errorMsg.textContent+=' email '}
        if(! validName(inputInfo)){errorMsg.textContent+=' name '}
        if(! validNum(inputInfo)){errorMsg.textContent+=' number '}
        if(! validMsg(inputInfo)){errorMsg.textContent+=' message '}
    }
}   

/*.then(response => response.json())
.then(data => 
    {
        //check if gender result is null
        if (data.palind){
            result.textContent+= 'This word is a palindrome'
        }
        else{
            result.textContent+= 'This word is not a palindrome'
        }      
    })*/


function validEmail(inputInfo){
    let valid =/^([a-z0-9]{3,})+[@]+([a-z]{2,})+[.]+([a-z]{2,})*$/
    return (valid.test(email.value))
}
function validName(inputInfo){
    return(fullName.value.trim().length>5)
}
function validNum(inputInfo){
    let valid1= /^[+9613]+([0-9]{6})*$/
    let valid2= /^[+961]+([0-9]{8})*$/
    return (valid1.test(number.value) || valid2.test(number.value) )
}
function validMsg(inputInfo){
    return (message.value.length>=100)
}
