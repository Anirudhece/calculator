let calcScreen= document.getElementById('input');
let button= document.querySelectorAll('button');

let input= ''; //string which will show the operation on screen

for(let item of button){
    item.addEventListener('click', (e)=>{
        let text= e.target.innerText ;
        // console.log(text);
        
        if(text=='C'){
            calcScreen.value= '';
            input= calcScreen.value;
        }
        
        else if(text=='='){
            calcScreen.value=eval(calcScreen.value);
        }
        
        else{
            input += text;
            calcScreen.value=input;
        }

    });
    
}