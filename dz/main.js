const btn=document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    const request=new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.onload=()=>{
        const data=JSON.parse(request.response)
        data.students.map((data)=>{
            document.querySelector('.name').innerHTML=data.name
            document.querySelector('.age').innerHTML=data.age 
        })
           
    }
})

const obj=new XMLHttpRequest()
obj.open("GET", "example.json")
obj.setRequestHeader("Content-type","application/json")
obj.send()
obj.onload = function() {
    if (obj.status === 200) {
      const object = JSON.parse(obj.responseText);
      console.log(object);
    } 
};
