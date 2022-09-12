const fullName = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')
const sendButton = document.getElementById('send-btn')
const errorMsg= document.getElementById('error-msg')
const tablet= document.getElementById('tablet')
const mobile= document.getElementById('mobile')
const body= document.getElementById('body')
const inputInfo=[fullName, email, number,message]

tablet.onclick= function (){
    document.body.style.paddingLeft='200px'
    document.body.style.paddingRight='200px'
}

mobile.onclick= function (){
    document.body.style.paddingLeft='400px'
    document.body.style.paddingRight='400px'
}

console.log('Hello')
sendButton.onclick=()=>{console.log('Hello')}

 sendButton.onclick= function validate(inputInfo){
    if (validEmail(inputInfo) && validName(inputInfo) && validNum(inputInfo) && validMsg(inputInfo)){
        errorMsg.textContent=''
    }
    else{
        errorMsg.textContent='The following are invalid:'
        if(! validEmail(inputInfo)){errorMsg.textContent+=' email '}
        if(! validName(inputInfo)){errorMsg.textContent+=' name '}
        if(! validNum(inputInfo)){errorMsg.textContent+=' number '}
        if(! validMsg(inputInfo)){errorMsg.textContent+=' message '}
    }
}

function validEmail(inputInfo){
    //let valid=''
    let valid=/^([a-zA-Z0-9._~-]{3,})+@([a-zA-Z0-9-]{3,})+((?:\.[a-zA-Z0-9-]+){2,})*$/
    return (valid.test(email.value))
    //return (false)
}
function validName(inputInfo){
    return(fullName.value.trim().length>5)
}
function validNum(inputInfo){
    if (number.value.substring(0,3)=="+961"){
        if(number.value.substring(4)==3){
            return(number.value.length==11)
        }
        else{
            return(number.value.length==12)
        }
    }
}
function validMsg(inputInfo){
    return (message.value.length>=100)
}
