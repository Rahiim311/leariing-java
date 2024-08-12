// let proudect = prompt("wahts your Proudct");
// let enterTotal =+prompt("Enter the Total");
//  let tax=  enterTotal * 14 /100 ;
// let msg = "Your proudect finaly price is  "  +     (enterTotal +tax) ;
// console.log(msg);
//  document.write(msg);
//  window.alert(msg);


let proudect   = prompt("wahts your Proudct");
let enterTotal = + prompt("paid up");
let yourphone =prompt("Enter your phone");
let yourname =prompt("Enter your name");
let tax=  enterTotal * 14 /100 ; 


let msg = "                                 --  invoice --" +  ('\n')+  
"                        Wednesday, June 5, 2024"+  ('\n')+  
"Your proudect is  =  " + proudect + ('\n') + 
"Customer Number  =  " + yourphone + ('\n') + 
"Customer name  =  " + yourname + ('\n') + 
"Paid up = "+ enterTotal  +('\n')  +
"Tax = " +(tax)    + ('\n')  +
"Total = " +(  enterTotal +tax)  +  ('\n')  +
"We are happy to meet you today and we wich to you a nice day"
;
console.log(msg);
document.write(msg);
window.alert(msg);