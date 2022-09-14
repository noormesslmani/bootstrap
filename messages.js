const showMessages= document.getElementById('show-messages')
//display messages on window load
window.onload= async function (){
    let url1
    url1='http://localhost/bootstrap/getmessages.php/'
    const response = await fetch (url1)
    const data = await response.json()
    console.log(data)
    for (let i=0;i<data.length;i++){ //loop over the data
        let para = document.createElement("p") //create a new p to display a message
        para.setAttribute('class','all-messages')
        para.innerText = data[i].messages;
        showMessages.appendChild(para); //append p to showMessages div
    }
}