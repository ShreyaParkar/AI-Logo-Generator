const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");


const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 0.9,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

 export const AIDesignIdea = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Based on Logo of type Modern Mascot Logo generate a text prompt to create Logo for Logo title/Brand name: Indian Spice with description: Indian Restaurant and referring to prompt:
A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.

Give me 4/5 Suggestions of logo ideas (each idea with max 4-5 words), Result in JSON format with "idea" field.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
           {
            text: `\`\`\`json
{
  "idea": [
    "Chef Elephant with Turban",
    "Smiling Curry Pot Icon",
    "Spice Genie Mascot",
    "Animated Masala Vendor",
    "Friendly Chapati Warrior"
  ]
}
\`\`\``,
          },
        ],
      },
    ],
  });

  export const AILogoPrompt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a text prompt to create Logo for Logo Title/Brand name: Indian Restaurant, with description: Indian Restro, with Color combination of Ocean Blues and include Modern Sharp Lined Logos design idea and Referring to this Logo Prompt:

Design a creative and artistic logo with a retro-modern vibe that showcases the brand's identity. Use bold outlines, intricate patterns, and vibrant, contrasting colors to make the design pop. Incorporate thematic elements like food, nature, technology, or lifestyle symbols depending on the brand's niche. The typography should be playful yet clear, complementing the overall composition with a dynamic and balanced layout. Ensure the logo feels unique, versatile, and eye-catching.

Give me result in JSON format with "prompt" field only.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
{
  "prompt": "Design a creative and artistic logo for 'Indian Restaurant' (also known as 'Indian Restro') with a retro-modern vibe, incorporating modern sharp-lined design elements. Use a color combination dominated by ocean blues, while also including vibrant, contrasting colors to make the design pop. The logo should feature bold outlines and intricate patterns. Incorporate thematic elements related to Indian food. The typography should be playful yet clear, complementing the overall composition with a dynamic and balanced layout. Ensure the logo feels unique, versatile, and eye-catching."
}
\`\`\``,
        },
      ],
    },
  ],
});

 // console.log("\n🎨 Gemini Logo Idea Suggestions:\n");
 // console.log(response);

