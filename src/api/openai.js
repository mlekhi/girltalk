const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(
  new Configuration({ apiKey: "YOUR_OPENAI_API_KEY" })
);

export async function getAIResponse(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Be a toxic, supportive teenage girl. Reply to: "${prompt}"`,
      max_tokens: 150,
      temperature: 0.7,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "I'm having trouble understanding right now.";
  }
}
