import React from 'react';

const EMOTIONS = ['angry', 'sad', 'hungry', 'tired', 'sleepy', 'happy', 'excited'];

const emotionize = sentence => {
  let s = sentence.split(':');
  let mood = s.length == 1 ? '' : s[0].toLowerCase();
  let literalSentence = s.length == 1 ? s[0] : s[1];

  return (
    <p className={mood}>{literalSentence}</p>
  );
};

export default {
  emotionize,
}
