// closure
// closures protect variables form global scope
// inner func has access to everything inside and outside of it

const globalVariable = 'global var';

function outterFunc(param1) {
  const variable1 = 'var one';

  function innerFunc(param2) {
    const variable2 = 'var two';

    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }

  console.log(innerFunc('param one'));
}

console.log(outterFunc('param two'));
