import { fetchApi } from '@/api/connection/apiClient';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface tasksResponse {
  success: boolean;
  tasks: Task[];
}



export const taskService = {
  getTasks: async (): Promise<tasksResponse> => {
    return fetchApi<tasksResponse>('/tasks', {
      method: 'GET',
    });
  },
};
