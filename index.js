// const name = "vamsi"
// const filteredName = name.includes('v')
// console.log(filteredName)
// const s = "mississippi"
// const p = "mis*is*p*."
// console.log(s==p)


// function vamsi(marks){
//     try{
//         if(marks >= 90){
//             return "Excellent"
//         }
//         else if(marks >= 80){
//             return "Very Good"
//         }
//         else if(marks >= 70){
//             return "Good"
//         }
//         else{
//             return "Fail"
//         }
//     }
//     catch(error){
//         console.error("Error on vamsi function",error)
//     }
// }

const express = require('express')
const port = 3000
const app = express()
const data1={
    id : 1,
     name : "vamsi",
     age : 23,
     mobile : 2641651536,
    location : "mtm"
}

console.log(data1)
 
app.get('/api/user',(req,res)=>{
    res.json(data1)
})

app.listen(port,()=>
console.log("server starting at port number :",port)
)

function marks(marks){

if(marks>=90 & marks<=100){
    return "Distinction"
}

else if(marks>=80 & marks<=89){
    return "Very Good"
}

else if(marks>=70 & marks<=79){
    return "Good"
}

else if(marks>=60 & marks<=69){
    return "Average"
}

else{
    return "Fail"
}
}

console.log("Result is : ",marks(89))