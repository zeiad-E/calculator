function infixToPostfix(infix) {
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3 // You can add more operators and adjust their precedence as needed
    };
  
    const output = [];
    const stack = [];
    const tokens = infix.match(/(?:\d+\.\d+|\d+|[-+*/^()])/g);
  
    for (const token of tokens) {
      if (!isNaN(token)) {
        output.push(token); // If it's a number, add it to the output
      } else if (token in precedence) {
        while (
          stack.length > 0 &&
          stack[stack.length - 1] in precedence &&
          precedence[token] <= precedence[stack[stack.length - 1]]
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          output.push(stack.pop());
        }
        if (stack[stack.length - 1] === '(') {
          stack.pop(); // Pop the opening parenthesis
        }
      }
    }
  
    while (stack.length > 0) {
      output.push(stack.pop());
    }
  
    return output.join(' ');
  }
  
  
  // Example usage:
  /*
  const infixExpression = "3 + 4 * 2 / (1 - 5) ^ 2";
  const postfixExpression = infixToPostfix(infixExpression);
  console.log(postfixExpression); // Output: "3 4 2 * 1 5 - 2 ^ / +"
*/
  
  function evaluatePostfix(postfix) {
    const stack = [];
    const tokens = postfix.split(' ');
    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
        console.log(`num true test ${token}`);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        console.log(`operand 1= ${operand1}    operand 2=${operand2}`);
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            console.log(`operand1 + operand2=> ${operand1} + ${operand2} = ${operand1+operand2}`);
            break;
          case '-':
            stack.push(operand1 - operand2);
            console.log(`operand1 - operand2=> ${operand1} - ${operand2} = ${operand1-operand2}`);

            break;
          case '*':
            stack.push(operand1 * operand2);
            console.log(`operand1 * operand2=> ${operand1} * ${operand2} = ${operand1*operand2}`);

            break;
          case '/':
            stack.push(operand1 / operand2);
            console.log(`operand1 / operand2=> ${operand1} / ${operand2} = ${operand1/operand2}`);

            break;
            case '^':
          stack.push(Math.pow(operand1, operand2));
          break;

          // Add more operators as needed
        }
      }
    }
  console.log(`push the last result = ${stack[0]}`);
    return stack[0]; // The result will be at the top of the stack
  }
  
  const infixExpression = "10 * 0.5";
  const postfixExpression = infixToPostfix(infixExpression);
 // const result = evaluatePostfix(postfixExpression);
  //console.log(infixExpression+"        "+postfixExpression+ "         " +result); // Output: 3.5
  
const container =document.querySelector('.container');
let output="";
let outVal=document.querySelector('#output');
container.addEventListener('click',function(e){

    if((e.target.id !='c')&&(e.target.id!='del')&&(e.target.id!='='))
    
{
    if((isNaN(e.target.id))&&(e.target.id!='.'))
    {

        let o=" "+e.target.id+" ";
        console.log(o);
        output+=o;
        outVal.value=output;
    }else{
        let o=e.target.id;
        console.log(o);
        output+=o;
        outVal.value=output;
    }
}else if(e.target.id==='c')
{
    output="";
    outVal.value=output;
}else if(e.target.id==='del'){

    const lastChar = output.charAt(output.length - 1);

    if(lastChar===' ')
    {
        const newStr = output.slice(0, -3);
        output=newStr;
        outVal.value=output;
    }else{
        const newStr = output.slice(0, -1);
        output=newStr;
        outVal.value=output;
    }
}else if(e.target.id==='='){
    const infixExpression = output;
    const postfixExpression = infixToPostfix(infixExpression);
    const result = evaluatePostfix(postfixExpression);
    outVal.value=result;
    output="";
}
})