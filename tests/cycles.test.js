import test from 'node:test';
import assert from 'node:assert/strict';
import { locateCycle } from '../site/cycles.js';
test('limites entram no novo ciclo sem sobreposição', () => {
  for (let boundary = 7; boundary <= 56; boundary += 7) {
    assert.equal(locateCycle(boundary - 1).index, boundary / 7 - 1);
    assert.equal(locateCycle(boundary).index, boundary / 7);
  }
});
test('infância e idades acima de 63 continuam contempladas', () => {
  assert.equal(locateCycle(0).name, 'Receber');
  for (const age of [56, 63, 80, 100, 125]) assert.equal(locateCycle(age).name, 'Integrar');
  assert.equal(locateCycle('42').name, 'Reorientar');
});
test('não converte entrada vazia ou inválida em idade', () => {
  for (const input of ['', ' ', '-1', '42.5', '4e1', 'abc', null, undefined, true, [], {}, -1, NaN, Infinity, 4.5]) assert.equal(locateCycle(input), null);
});
