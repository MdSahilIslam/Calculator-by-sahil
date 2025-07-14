let eqs = "";

let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("input");

let char = [".","%","+","-","/","*","^"];
let char2 = ["%","+","-","/","*","^"]
let expression = ["NaN","undefined","Infinity"]

buttons.forEach((button) => {
    
        button.addEventListener("click",() => {
            try {
               
                if (button.innerText === "C") {
                    eqs = "";
                    input.value = eqs;
                } else if ( button.innerText === "=" ){
                    if (eqs.includes("%")) {
                        let percent = eqs.split("%");
                        console.log(percent[0],"--",eval(percent[1]));

                        if (eval(percent[1]) === undefined)  {
                            eqs = (eval(percent[0]/100)).toString();
                            input.value = eqs;
                        }else {
                            eqs = (eval(percent[0]/100)*eval(percent[1])).toString();
                            // console.log(eqs);
                            input.value = eqs;
                        }
                        
                    } else if (eqs.includes("^")) {
                        let power = eqs.split("^");
                        eqs = (eval(power[0])**eval(power[1]) ).toString();
                        // console.log(eqs);
                        input.value = eqs;
                    } else {
                        eqs = eval(eqs).toString();
                        input.value = eqs;
                        console.log(eqs)
                    }

                

                } else if ( button.innerText === "X") {
                    eqs = eqs.slice(0,(eqs.length - 1));
                    input.value = eqs;
                } else if (button.innerText === "%"){
                        if (eqs.includes("%")) {

                        }else {
                            eqs = eqs + button.innerText;
                            input.value = eqs;
                        }
                } else if (expression.includes(input.value)) {
                    eqs = button.innerText;
                    input.value = eqs;

                } else if (button.innerText === "^"){
                    if (eqs.includes("^")) {

                    } else {
                        eqs = eqs + button.innerText;
                        input.value = eqs;
                    }  
                } else if (char.includes(button.innerText)) {
                    if (char.includes(eqs[eqs.length-1]) || button.innerText === ".") {
                        if  ( button.innerText === ".") {
                            let eqs1 = eqs;
                            eqs = eqs_spliter(eqs,button);
                            if (eqs === undefined) {
                                eqs = eqs1;
                            }

                            input.value = eqs ;
                        };
                    }else {
                        eqs = eqs + button.innerText;
                        input.value = eqs;
                        // console.log(eqs);
                    }
                }
                else {
                    eqs = eqs + button.innerText;
                    input.value = eqs;
                    // console.log(eqs);
                }
            
            }
            catch (err){
                console.log(err);
            }
    })
    
    
    
}
)

function eqs_spliter(eqs,button) {
    let parts = [''];
    for (let i of eqs) {
        if (char2.includes(i)) {
            parts = eqs.split(i);
            // console.log(parts[parts.length-1]);
        }
    }

    console.log(parts);
    if (parts[parts.length-1].includes(".") ) {
        console.log("3rd upper last part");
    } else {
        if (eqs.includes(".") && 
            (eqs.includes("+")===false) &&
            (eqs.includes("-")===false) &&
            (eqs.includes("*")===false) &&
            (eqs.includes("/")===false) &&
            (eqs.includes("%")===false) &&
            (eqs.includes("^")===false)) {
            ;
            
        }else {
            eqs = eqs + button.innerText;
            
            return eqs;
            
        }
       
    }
}

// console.log("don".length);
// console.log("don".slice(0,"don".length-1))