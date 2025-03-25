/**
 * Testes unitários para funções do AluraMidi
 * Executar com: npx jest
 */

/**
 * @jest-environment jsdom
 */

import { obterTeclaDoInstrumento, tocaSom } from '../funcoes.js';

describe('Função obterTeclaDoInstrumento', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="tecla tecla_pom">Pom</button>
      <button class="tecla tecla_clap">Clap</button>
    `;
  });

  test('retorna a tecla correta para KeyQ', () => {
    const tecla = obterTeclaDoInstrumento('KeyQ');
    expect(tecla.classList.contains('tecla_pom')).toBe(true);
  });

  test('retorna a tecla correta para KeyW', () => {
    const tecla = obterTeclaDoInstrumento('KeyW');
    expect(tecla.classList.contains('tecla_clap')).toBe(true);
  });

  test('retorna null para tecla inexistente', () => {
    const tecla = obterTeclaDoInstrumento('KeyP');
    expect(tecla).toBeNull();
  });
});

describe('Função tocaSom', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <audio id="som_tecla_pom" src="sounds/keyq.wav"></audio>
    `;
    // Mock do método play
    const audio = document.querySelector('#som_tecla_pom');
    audio.play = jest.fn();
  });

  test('executa o som correspondente ao id de áudio', () => {
    tocaSom('#som_tecla_pom');
    const audio = document.querySelector('#som_tecla_pom');
    expect(audio.play).toHaveBeenCalled();
  });
});
