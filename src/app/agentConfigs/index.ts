import { simpleHandoffScenario } from './simpleHandoff';
import { customerServiceRetailScenario } from './customerServiceRetail';
import { chatSupervisorScenario } from './chatSupervisor';
import {
  elderCompanionScenario,
  createElderCompanionScenario,
} from './elderCompanion';

import type { RealtimeAgent } from '@openai/agents/realtime';

export const allAgentSets: Record<string, RealtimeAgent[]> = {
  simpleHandoff: simpleHandoffScenario,
  customerServiceRetail: customerServiceRetailScenario,
  chatSupervisor: chatSupervisorScenario,
  elderCompanion: elderCompanionScenario,
};

export { createElderCompanionScenario };

export const defaultAgentSetKey = 'chatSupervisor';
