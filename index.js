const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "Innovation distinguishes between a leader and a follower.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "Turn your wounds into wisdom.",
  "What we think, we become.",
  "Happiness depends upon ourselves."
];

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function getRandomImageUrl() {
  return `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 10000)}`;
}

function getRandomText() {
  return SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
}

/**
 * Generate dummy data based on a model schema.
 * @param {Object} model - The model schema, e.g. { name: 'text', age: 'number', avatar: 'image', isActive: 'boolean' }
 * @param {number} count - Number of dummy objects to generate
 * @returns {Array<Object>} Array of dummy data objects
 */
function generateDummyData(model, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const obj = {};
    for (const key in model) {
      const type = model[key];
      if (type === 'text') {
        obj[key] = getRandomText();
      } else if (type === 'boolean') {
        obj[key] = getRandomBoolean();
      } else if (type === 'number') {
        obj[key] = getRandomNumber();
      } else if (type === 'image') {
        obj[key] = getRandomImageUrl();
      } else {
        obj[key] = null;
      }
    }
    result.push(obj);
  }
  return result;
}

module.exports = {
  generateDummyData,
}; 