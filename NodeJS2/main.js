// Current Working Directory
// const cwd = process.cwd();
// console.log(cwd);

// Release mostra no terminal o produto Node
// const release = process.release;
// Stringify transforma em string
// console.log(JSON.stringify(release, null, 4));

const parametros = process.argv.slice(2);

const hasOpn = parametros.includes('-opn');
let op1, op2;

const hasOp = parametros.includes('-op');
let op;
let resultado;

if (!hasOp) {
    console.log('Informar operação com parâmetro -op');
    process.exit();
} else {
    op = parametros[parametros.indexOf('-op') + 1];
    if (!['+', '-', 'x', '/'].includes(op)) {
        console.log('Operação Inválida');
        process.exit();
    }
}

if (!hasOpn) {
    console.log('Informar operandos com parâmetro -opn');
    process.exit();
} else {
    op1 = Number(parametros[parametros.indexOf('-opn') + 1]);
    op2 = Number(parametros[parametros.indexOf('-opn') + 2]);
    if (isNaN(op1) || isNaN(op2)) {
        console.log('Operandos Inválidos');
        process.exit();
    }
}

switch (op) {
    case '+':
        resultado = op1 + op2;
        break;
    case '-':
        resultado = op1 - op2;
        break;
    case 'x':
        resultado = op1 * op2;
        break;
    case '/':
        if (op2 === 0) {
            console.log('Impossível divisão por zero');
            process.exit();
        }
        resultado = op1 / op2;
        break;
    default:
        break;
}

console.log(`Resultado de ${op1} ${op} ${op2} = ${resultado}`);
