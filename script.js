let string="";
let memory=0;
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try {
                string=eval(string)       
                
                document.querySelector('input').value=string;
            } catch (error) {
                console.error(error)
            }
            }
            else if(e.target.innerHTML=='AC'){
                string=""
                document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=='M+'){
                memory+=parseFloat(string)||0;
                document.querySelector('input').value="";
            }
            else if(e.target.innerHTML=='M-'){
                memory-=parseFloat(string)||0;
                document.querySelector('input').value="";
            }

            else if(e.target.innerHTML=='Back'){
                string=string.slice(0,-1);
                
                document.querySelector('input').value=string;
            }

            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
            }
        
        
    })
})