const student =[
    {id:1  , name:'ankit' , age : 19 },
     {id:2  , name:'rohan' , age : 21 },
      {id:3  , name:'sumit' , age : 32 },
       {id:4  , name:'navneet' , age : 43},
]

function showStuents(){
    student.map(info => {
        console.log(`Student Name : ${info.name}   Student Age : ${info.age}\n`)
    })
}

showStuents()