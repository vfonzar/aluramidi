import { obterTeclaDoInstrumento, tocaSom } from './funcoes.js';

// Aguarda o carregamento do DOM para iniciar a lógica
window.onload = function () {
    // Seleciona todas as teclas e configura o clique do mouse para tocar o som correspondente
    const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas.forEach(tecla => {
        const instrumento = tecla.classList[1].replace('tecla_', '');
        const idAudio = `#som_tecla_${instrumento}`;

        // Ao clicar, toca o áudio referente ao instrumento
        tecla.onclick = () => tocaSom(idAudio);
    });

    // Detecta pressionamento de tecla (keydown): toca som e aplica classe visual
    document.addEventListener('keydown', (evento) => {
        // Verifica se a tecla pressionada corresponde a algum instrumento
        const tecla = obterTeclaDoInstrumento(evento.code);
        
        if (tecla) {
            // Extrai o nome do instrumento, monta o seletor do áudio e toca o som
            const instrumento = tecla.classList[1].replace('tecla_', '');
            const idAudio = `#som_tecla_${instrumento}`;
            tocaSom(idAudio);
            tecla.classList.add('ativa');
        }

        // Se a tecla pressionada for Enter ou Espaço, adiciona classe 'ativa' no elemento focado
        if (evento.code === 'Enter' || evento.code === 'Space') {
            if (document.activeElement.classList.contains('tecla')) {
                document.activeElement.classList.add('ativa');
            }
        }
    });

    // Detecta soltura de tecla (keyup): remove a classe visual 'ativa'
    document.addEventListener('keyup', (evento) => {
        // Se a tecla solta for Enter ou Espaço, remove classe 'ativa' do elemento focado
        if (evento.code === 'Enter' || evento.code === 'Space') {
            if (document.activeElement.classList.contains('tecla')) {
                document.activeElement.classList.remove('ativa');
            }
        }

        // Remove a classe 'ativa' da tecla mapeada
        const tecla = obterTeclaDoInstrumento(evento.code);
        if (tecla) {
            tecla.classList.remove('ativa');
        }
    });
};
