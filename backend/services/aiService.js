const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function predictDeviceFailure(deviceData) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Predict device failure likelihood for: ${JSON.stringify(deviceData)}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function recommendRecyclingOptions(deviceData) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Recommend recycling options for: ${JSON.stringify(deviceData)}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { predictDeviceFailure, recommendRecyclingOptions };
