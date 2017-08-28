const EMOTIONS = {
  'angry': 'angry',
  'sad': 'sad',
  'hungry': 'hungry',
  'tired': 'tired',
  'sleepy': 'sleepy',
};

const emotionize = sentence => {
  // split sentence at ':' into array
  let s = sentence.split(':');
  // store first half of array into a variable mood
  let mood = s[0];
  return mood;
  // determine what the first half of mood is
  // style accordingly, return a list item or something
};

export default {
  emotionize,
}
