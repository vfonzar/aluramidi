// Mapeamento entre códigos de teclas e instrumentos
const mapaTeclas = {
    KeyQ: 'pom',
    KeyW: 'clap',
    KeyE: 'tim',
    KeyA: 'puff',
    KeyS: 'splash',
    KeyD: 'toim',
    KeyZ: 'psh',
    KeyX: 'tic',
    KeyC: 'tom'
  };
  
  // Função que retorna o botão correspondente ao instrumento com base na tecla pressionada
  function obterTeclaDoInstrumento(code) {
    const instrumento = mapaTeclas[code];
    if (!instrumento) return null;
    return document.querySelector(`.tecla.tecla_${instrumento}`);
  }
  
  // Função que toca o som do elemento de áudio identificado por ID
  function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
  }
  
  export { mapaTeclas, obterTeclaDoInstrumento, tocaSom };
  