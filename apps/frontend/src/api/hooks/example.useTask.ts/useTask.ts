import { taskService } from '@/api/services/example.task.services.ts/task.service';
import { useQuery } from '@tanstack/react-query';

export const useTask = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getTasks(),
  });
};
