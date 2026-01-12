import { fetchApi } from '@/api/connection/apiClient';

interface tasksResponse {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export const taskService = {
  getTasks: async (): Promise<tasksResponse> => {
    return fetchApi<tasksResponse>('/tasks', {
      method: 'GET',
    });
  },
};
