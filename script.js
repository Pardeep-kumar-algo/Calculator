let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string  = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        let btnValue = e.target.innerHTML;

        if(btnValue == '='){
            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (btnValue == 'AC'){
            string = "";
            input.value = string;
        }

        else if(btnValue == 'DEL'){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // 👉 Operator press hone par auto evaluate
        else if(['+','-','*','/','%'].includes(btnValue)){
            try {
                if(string !== ""){
                    string = eval(string).toString(); 
                    input.value = string;
                }
            } catch {
                input.value = "Error";
                string = "";
            }
            string += btnValue; 
            input.value = string;
        }

        // 👉 Scientific Buttons Functionality
        else if(btnValue === 'sin'){
            string = Math.sin(eval(string) * Math.PI / 180).toString(); 
            input.value = string;
        }
        else if(btnValue === 'cos'){
            string = Math.cos(eval(string) * Math.PI / 180).toString(); 
            input.value = string;
        }
        else if(btnValue === 'tan'){
            string = Math.tan(eval(string) * Math.PI / 180).toString(); 
            input.value = string;
        }
        else if(btnValue === 'log'){
            string = Math.log10(eval(string)).toString(); 
            input.value = string;
        }
        else if(btnValue === '√'){
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        }
        else if(btnValue === 'x²'){
            string = (eval(string) ** 2).toString();
            input.value = string;
        }
        else if(btnValue === 'π'){
            string += Math.PI.toString();
            input.value = string;
        }
        else if(btnValue === 'e'){
            string += Math.E.toString();
            input.value = string;
        }

        else{
            string += btnValue;
            input.value = string;
        }
    })
})
