
export interface AIPlanStep {
  title: string;
  description: string;
  promptExample: string;
}

export interface AIWorkflowResponse {
  projectName: string;
  summary: string;
  steps: AIPlanStep[];
}

export interface ChartData {
  name: string;
  traditional: number;
  aiAssisted: number;
}
