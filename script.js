let calScreen = document.querySelector( "#screen" );
const numbers = document.querySelectorAll( ".number" );
const clearBtn = document.querySelector( "#ce");
const sqrtOp = document.querySelector( "#squareRoot" );
const divisionOp = document.querySelector( "#division" )
const modOp = document.querySelector( "#modulo" )
const multiplicationOp = document.querySelector( "#multiplication" );
const subtractionOp = document.querySelector( "#minus" );
const additionOp = document.querySelector( "#plus" );
const resultOp = document.querySelector( "#result" );

let curNumber = '0'; 
let memory = '';
let mathSymbol = '';
let isCounted = false;



function writing( figure ){
  if( figure === '0' ){
    if( ( curNumber.length != 1 ) && ( curNumber != '0' ) )
      curNumber += figure;
  }
    
   
  if( ( figure === '.' ) && ( curNumber.includes( '.' ) === false ) )
   curNumber += figure;
   
  if( ( figure != '.' ) && ( figure != '0' ) ){

    if( curNumber === '0' )
      curNumber = figure;
    else
      curNumber += figure;
  }

  calScreen.textContent = curNumber;
}

function count( operator ){
  if( operator === '+' )
    wynik = parseFloat( memory ) + parseFloat( curNumber );
  if( operator === '-' )
    wynik = parseFloat( memory ) - parseFloat( curNumber );
  if( operator === '*' )
    wynik = parseFloat( memory ) * parseFloat( curNumber );
  if(operator === '%')
    wynik = parseFloat( memory ) % parseFloat( curNumber );
  if( operator === '/' ){
    if( ( parseFloat( memory ) != 0) && ( parseFloat( curNumber ) === 0 ) )
      wynik = "ERROR";
    else
      wynik = parseFloat( memory ) / parseFloat( curNumber );
  }

  curNumber = wynik.toString();
  mathSymbol = '';
  memory = '';
  calScreen.textContent = curNumber;
}


clearBtn.addEventListener( "click", (e) => {
  e.preventDefault(); 
  curNumber = '0';
  calScreen.textContent = '0';
  mathSymbol = '';
  memory = '';
});

numbers.forEach( (button) => {
  button.addEventListener( "click", (e) => {
    e.preventDefault();
    writing( button.textContent );
    console.log(curNumber);
  });
});

additionOp.addEventListener( "click", (e) => {
  e.preventDefault();
  mathSymbol = '+';
  if( isCounted === false )
    memory = curNumber;
  curNumber = '0';
  calScreen.textContent = curNumber;
  isCounted = true;
});

subtractionOp.addEventListener( "click", (e) => {
  e.preventDefault();
  mathSymbol = '-';
  if( isCounted === false )
    memory = curNumber;
  curNumber = '0';
  calScreen.textContent = curNumber;
  isCounted = true;
});

multiplicationOp.addEventListener( "click", (e) => {
  e.preventDefault();
  mathSymbol = '*';
  if( isCounted === false )
    memory = curNumber;
  curNumber = '0';
  calScreen.textContent = curNumber;
  isCounted = true;
});

divisionOp.addEventListener( "click", (e) => {
  e.preventDefault();
  mathSymbol = '/';
  if( isCounted === false )
    memory = curNumber;
  curNumber = '0';
  calScreen.textContent = curNumber;
  isCounted = true;
});

modOp.addEventListener( "click", (e) => {
  e.preventDefault();
  mathSymbol = '%';
  if( isCounted === false )
    memory = curNumber;
  curNumber = '0';
  calScreen.textContent = curNumber;
  isCounted = true;
});

sqrtOp.addEventListener( "click", (e) => {
  e.preventDefault();
  curNumber = Math.sqrt( parseFloat( curNumber ) ).toString();
  calScreen.textContent = curNumber;
  memory = '';
  mathSymbol = '';
  isCounted = false;
});

resultOp.addEventListener( "click", (e) => {
  e.preventDefault();
  if( mathSymbol != '')
    count( mathSymbol );
  isCounted = false;
});