export const cycles = [
  { range: '0–7', name: 'Receber', question: 'O que você recebeu no começo da sua história?' },
  { range: '7–14', name: 'Aprender', question: 'Quem e o que começou a ensinar você sobre a vida?' },
  { range: '14–21', name: 'Descobrir', question: 'Quem você começou a descobrir que era?' },
  { range: '21–28', name: 'Experimentar', question: 'O que você experimentou quando começou a conduzir mais da própria vida?' },
  { range: '28–35', name: 'Construir', question: 'O que você começou a construir de maneira mais consciente?' },
  { range: '35–42', name: 'Questionar', question: 'A vida que você construiu ainda representa você?' },
  { range: '42–49', name: 'Reorientar', question: 'O que precisa permanecer e o que precisa encontrar uma nova direção?' },
  { range: '49–56', name: 'Transmitir', question: 'O que sua experiência já pode oferecer a outras vidas?' },
  { range: '56–63+', name: 'Integrar', question: 'Que significado emerge quando você observa sua jornada como um todo?' }
];
export function locateCycle(value) {
  if (typeof value !== 'number' && typeof value !== 'string') return null;
  if (typeof value === 'string' && !/^\d+$/.test(value.trim())) return null;
  const age = Number(value);
  if (!Number.isSafeInteger(age) || age < 0) return null;
  const index = Math.min(Math.floor(age / 7), cycles.length - 1);
  return { ...cycles[index], index };
}
