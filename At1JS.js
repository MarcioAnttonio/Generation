const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o salário: ", function(salarioStr) {
  rl.question("Digite o abono: ", function(abonoStr) {

    let salario = parseFloat(salarioStr);
    let abono = parseFloat(abonoStr);

    let novoSalario = salario + abono;

    console.log("Novo salário: R$ " + novoSalario.toFixed(2));

    rl.close();
  });
});