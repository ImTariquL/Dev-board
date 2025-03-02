let buttons = document.getElementsByClassName("complete-btn");
for (const completeButton of buttons) {
  completeButton.addEventListener("click", function (event) {
    alert("Board Updated Successfully")
    const remove = document.getElementById("remove-btn");
    
    if(remove.innerText <= 0 ){
      alert('No Task Yet');
      return ;
    }
  else{
    const value=  remove.innerText = remove.innerText - 1;
  }
  const added= document.getElementById('added-btn');

  const totalAdded= added.innerText = parseInt(added.innerText) + 1;

  event.target.disabled = true;

  const title=document.getElementsByClassName('card-title')

  const fixContainer=document.getElementById('fix-release')


console.log(event.target.parentNode.parentNode)

// let today= new Date();
// let hour=today.getHours();
// let minute=today.getMinutes();
// let second=today.getSeconds();

// let time=`"hour:" + ${hour}   ` 



    const p=document.createElement('p')
    p.innerText=`
is fixed on  `
p.classList.add('bg-[#F4F7FF]','m-2','pl-2','rounded-xl','text-sm','text-center')

  fixContainer.appendChild(p)
  
  });
}


