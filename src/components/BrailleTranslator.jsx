import React, { useState } from 'react';

const brailleMap = {
  a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑', f: '⠋', g: '⠛', h: '⠓',
  i: '⠊', j: '⠚', k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕', p: '⠏',
  q: '⠟', r: '⠗', s: '⠎', t: '⠞', u: '⠥', v: '⠧', w: '⠺', x: '⠭',
  y: '⠽', z: '⠵', ' ': ' ',
  1: '⠼⠁', 2: '⠼⠃', 3: '⠼⠉', 4: '⠼⠙', 5: '⠼⠑', 6: '⠼⠋', 7: '⠼⠛',
  8: '⠼⠓', 9: '⠼⠊', 0: '⠼⠚',
  ',': '⠂', ';': '⠆', ':': '⠒', '.': '⠲', '!': '⠖', '¡': '⠖', '(': '⠶', ')': '⠶', 
  '?': '⠦', '¿': '⠦', '/': '⠌', '-': '⠤', "'": '⠄', '"': '⠐', '@': '⠈', '*': '⠡',
  '&': '⠯', '%': '⠜', '+': '⠬', '=': '⠿', '<': '⠣', '>': '⠜', '[': '⠪', 
  ']': '⠻', '{': '⠸', '}': '⠾', '\\': '⠳', 'á': '⠷', 'é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾', 'ü': '⠳'
}

const translateToBraille = (text) => {
  return text.split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      return '⠨' + (brailleMap[char.toLowerCase()] || '');
    } else {
      return brailleMap[char] || '';
    }
  }).join('');
};

const BrailleTranslator = () => {
  const [brailleText, setBrailleText] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setBrailleText(translateToBraille(inputText));
  };

  return (
    <div>
      <h1>Traducción a Braille</h1>
      <input type="text" className='inputBraille' placeholder="Introduce texto" onChange={handleInputChange} />
      <p className="braille-output">{brailleText}</p>
      <style jsx={'true'}>{`
        .braille-output {
          font-size: 24px;
          letter-spacing: 2px;
          max-width: 800px;
        }
        .inputBraille {
          height: 200px;
          width: 50%;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default BrailleTranslator;
