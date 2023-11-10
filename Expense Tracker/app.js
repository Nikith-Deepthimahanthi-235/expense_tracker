const prompt = require('prompt-sync')();

var option;
var updatedBal = 0;
var updatedExp = 0;
var updatedInc = 0;

let tableEntries = [ 
  // { cateogry: "i", amount: 25000 , date : "03/02/2005", name: "income" , description : ""  }, 
  // { cateogry: "e", amount: 18000 , date : "11/11/1111", name: "rent" , description : ""  }, 
  // { cateogry: "e", amount: 5000 ,  date : "22/22/2222", name: "food" , description : ""  }, 
]; 


const intro = () => {

console.log('1. ADD EXPENSE');   
console.log('2. LIST ALL EXPENSES');
console.log('3. DISPLAY SPECIFIC EXPENSE');
console.log('4. LIMIT CHANGE');
console.log('5. DELETE AN EXPENSE');
console.log('6. EXIT');
option = Number(prompt('choose an option '));
switchy();

}

const switchy = () =>{
  switch (option) {
    case 1:
      addItem();
      break;
    case 2:
      console.log(tableEntries);
      output();
      break;
    case 3:
      var spc = prompt('specify the date (dd/mm/yyyy) :');
      specific(tableEntries, 'date' , spc);
      break;
    case 4:
    case 5:
      var d = prompt('specify the date (dd/mm/yyyy) :');
      deletion(tableEntries, 'date', d);
      break;
    case 6:
      return;
    default:{
      console.log('choose an option from 1 to 4');
      intro();
      break;
    }
       
    
  }
  }
const output = () => {
  console.log(`Income is ${updatedInc}`);
  console.log(`Expenditure is ${updatedExp}`);
  console.log(`Balance is ${updatedBal}`);
  repeat();
}

// const specific = ()=>{
//   var j = tableEntries.length;
//   var spc = prompt('enter a specific date: ');
//   while(j--){
//      if( tableEntries[j] 
//          && tableEntries[j].hasOwnProperty("attr") 
//          && (arguments.length > 2 && tableEntries[j][attr] === spc ) ){
//           let found = tableEntries.find(function (element) {
//             return element = spc;
//          }
// }
// }
// }
const specific = (arr, attr, value) => {
  var j = arr.length;
  while(j--){
    if(arr[j]
      && arr[j].hasOwnProperty(attr)
      && (arguments.length > 2 && arr[j][attr]===value)){
        console.log(arr[j]);
      }
  }
  updateTable();
  repeat();
  return arr;
}
const repeat = () =>{
  var ans =prompt('continue? (y/n)');
  if (ans==="y"){
  intro();
  }
  else if(ans==='n')
  console.log('Thanks for ur time!');
  return;
  }


// Function to delete a specific entry 
var deletion = (arr, attr, value) => {
  var i = arr.length;
  while(i--){
     if( arr[i] 
         && arr[i].hasOwnProperty(attr) 
         && (arguments.length > 2 && arr[i][attr] === value ) ){ 

         arr.splice(i,1);

     }
   
   
  }
  console.log("Expense is deleted");
  updateTable();
  repeat();
  return arr;
}

const updateTable = () => { 

  tableEntries.map((e, i) => { 
      // loadItems(e, i); 
  }); 
  updateSummary(); 
} 

// Function to update data expense summary 
const updateSummary=() =>{ 
  let totalIncome = tableEntries.reduce((t, e) => { 
      if (e.cateogry === "i") t += e.amount; 
      return t; 
  }, 0); 
  let totalExpense = tableEntries.reduce((ex, e) => { 
      if (e.cateogry === "e") ex += e.amount; 
      return ex; 
  }, 0); 
  updatedInc = totalIncome; 
  updatedExp = totalExpense; 
  updatedBal = totalIncome - totalExpense; 
 
} 
const addItem = () =>{ 
  let cateogry = prompt('CATEGORY:(i/e)'); 
  let name = prompt('n?'); 
  let amount = prompt('amount? '); 
  let date = prompt('enter date (dd/mm/yyyy) : ');
  let description = prompt('type in description : ');

  // Input validation 
  if (cateogry.value === "y" || Number(amount.value) === 0) 
      return alert("Incorrect Input"); 
  if (Number(amount.value) <= 0) 
      return alert( 
          "Incorrect amount! can't add negative"
      ); 

  // Push new data 
  tableEntries.push({ 
      cateogry: cateogry, 
      name: name, 
      amount: Number(amount), 
      date: date,
      description: description
     
  }); 

  updateTable(); 
  name.value = ""; 
  amount.value = 0; 
  repeat();
} 
updateSummary();
intro();
