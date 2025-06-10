export const HISTORY_KEY = 'elderCompanionHistory';

export interface StoredMessage {
  role: 'user' | 'assistant';
  text: string;
}

export interface StoredConversation {
  timestamp: number;
  messages: StoredMessage[];
}

export function loadConversations(): StoredConversation[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as StoredConversation[];
  } catch {
    return [];
  }
}

export function saveConversation(messages: StoredMessage[]) {
  if (typeof window === 'undefined') return;
  const conversations = loadConversations();
  conversations.push({ timestamp: Date.now(), messages });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(conversations));
}

export function loadConversationLines(): string[] {
  const conversations = loadConversations();
  const lines: string[] = [];
  conversations.forEach((conv) => {
    conv.messages.forEach((m) => {
      lines.push(`${m.role === 'assistant' ? 'Assistant' : 'User'}: ${m.text}`);
    });
  });
  return lines;
}
