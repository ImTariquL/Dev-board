let buttons = document.getElementsByClassName("complete-btn");
for (const completeButton of buttons) {
  completeButton.addEventListener("click", function (event) {
    const remove = document.getElementById("remove-btn");
    
    if(remove.innerText <= 0 ){
      alert('No Task Yet');
      return ;
    }
  else{
    const value=  remove.innerText = remove.innerText - 1;
  }
  event.target.disabled = true;


  const fixContainer=document.getElementById('fix-release')



    const p=document.createElement('p')
    p.innerText=`
fix   `

  fixContainer.appendChild(p)
  
  });
}


