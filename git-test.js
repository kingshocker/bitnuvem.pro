const exec = require('child_process').exec;

let arquivosModificadosAdicionados = null;
let arquivosModificadosNaoAdicionados = null;

function executar(comando, callback) {
  exec(comando, function(erro, stdout, stderr) {
    if (erro) {
      console.error(stderr);
      throw erro;
    }
    callback(stdout);
  });
};

function transformarSaidaArray(texto) {
  let array = texto
      .replace(/\n\r/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/\n$/g, '')
      .split('\n');
  for (let i = 0, length = array.length; i < length; i++) {
    if (array[i] == '') {
      array.splice(i, 1);
    }
  }
  return array;
}

function verificarDiferencas() {
  if (
    (arquivosModificadosAdicionados === null)
    || (arquivosModificadosNaoAdicionados === null)
  ) {
    return;
  }

  arquivosModificadosAdicionados.forEach(function(itemAdicionado) {
    arquivosModificadosNaoAdicionados.forEach(function(itemNaoAdicionado) {
      if (itemAdicionado == itemNaoAdicionado) {
        throw new Error('Foi verificado que um arquivo adicionado para o commit foi modificado e essa modificação não foi adicionada!');
      }
    });
  });
}

executar('git diff --name-only --cached', function(stdout) {
  arquivosModificadosAdicionados = transformarSaidaArray(stdout);
  verificarDiferencas();
});

executar('git ls-files -m', function(stdout) {
  arquivosModificadosNaoAdicionados = transformarSaidaArray(stdout);
  verificarDiferencas();
});

