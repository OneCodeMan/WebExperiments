import React from 'react';

const EMOTIONS = {
  'angry': 'angry',
  'sad': 'sad',
  'hungry': 'hungry',
  'tired': 'tired',
  'sleepy': 'sleepy',
  'happy': 'happy',
  'excited': 'excited',
};

const emotionize = sentence => {
  let s = sentence.split(':');
  let mood = s.length == 1 ? '' : s[0];
  let literalSentence = s.length == 1 ? s[0] : s[1];

  return (
    <p className={mood}>{literalSentence}</p>
  );
};

export default {
  emotionize,
}
