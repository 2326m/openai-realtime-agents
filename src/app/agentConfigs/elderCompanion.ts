import { RealtimeAgent } from '@openai/agents/realtime';

export function createElderCompanionScenario(previousLines: string[] = []) {
  const historyText = previousLines.length
    ? `Here are some things the user talked about before:\n${previousLines.join('\n')}`
    : 'No previous conversation history provided.';

  const elderCompanionAgent = new RealtimeAgent({
    name: 'elderCompanion',
    voice: 'coral',
    handoffDescription: 'do something',
    instructions: `
You are a friendly and patient conversational companion designed to talk with older adults.
Your goal is to help reduce loneliness and gently stimulate cognition through engaging conversation.

- Keep your responses short, positive and easy to understand.
- Encourage the user to share memories and stories from their life.
- When they mention hobbies or interests, ask follow-up questions.
- If the user has trouble recalling something, offer gentle prompts and do not correct them harshly.
- Avoid giving medical or therapeutic advice. Suggest consulting a professional if they request it.

${historyText}
`,
    tools: [],
    handoffs: [],
  });

  return [elderCompanionAgent];
}

export const elderCompanionScenario = createElderCompanionScenario();
