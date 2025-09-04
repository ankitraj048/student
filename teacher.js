const teacher = [
    {name:"Rohan singh" , subject :"IOT"},
        {name:"Pathak" , subject :"OOPs"},
            {name:"navneet Gupta" , subject :"DBMS"},
                {name:"Palak saini" , subject :"OS"},
]

function showTeachers(){
    teacher.map(t => {
        console.log(`teacher name is : ${t.name} and subject is ${t.subject}`)
    })
}

showTeachers()

function addTeacher(teacherdata){

    teacher.push(teacherdata)
}

addTeacher({name : "ankit" , subject:"NA"})

showTeachers()