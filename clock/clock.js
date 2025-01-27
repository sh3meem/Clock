function getTime(){

    // created a object for predefined class in javascript 
    const time = new Date

    // calling method from the class using the object and assigning it to a constant variable
    const hour = time.getHours() //Retrives the current time
    console.log(hour);
    
    const min = time.getMinutes()
    console.log(min);

    const sec = time.getSeconds()   
    console.log(sec);

    result.innerHTML=`${hour} : ${min} : ${sec}  ${hour>=12? 'PM' : 'AM'} `

// setTimeout  creating a loop to update the time every second.

    setTimeout(()=>{
        getTime()
    },1000)
}


getTime()