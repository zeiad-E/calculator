container.addEventListener('click', function (e) {

    if ((e.target.id != 'c') && (e.target.id != 'del') && (e.target.id != '=')) {
        if ((isNaN(e.target.id)) && (e.target.id != '.')) {

            let o = " " + e.target.id + " ";
            console.log(o);
            output += o;
            outVal.value = output;
        } else {
            let o = e.target.id;
            console.log(o);
            output += o;
            outVal.value = output;
        }
    } else if (e.target.id === 'c') {
        output = "";
        outVal.value = output;
    } else if (e.target.id === 'del') {

        const lastChar = output.charAt(output.length - 1);

        if (lastChar === ' ') {
            const newStr = output.slice(0, -3);
            output = newStr;
            outVal.value = output;
        } else {
            const newStr = output.slice(0, -1);
            output = newStr;
            outVal.value = output;
        }
    } else if (e.target.id === '=') {
        const infixExpression = output;
        const postfixExpression = infixToPostfix(infixExpression);
        const result = evaluatePostfix(postfixExpression);
    }
});
