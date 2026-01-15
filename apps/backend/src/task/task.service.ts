import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

@Injectable()
export class TaskService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getTasks(): Promise<Task[]> {
    const client = this.supabaseService.getClient();
    const { data, error } = await client.from('Task').select('*').eq('nonPermernentDelete', false);

    if (error) {
      throw new Error(error.message ?? 'Failed to fetch tasks from Supabase');
    }

    return (data ?? []).map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      completed: item.completed,
    }));
  }
}
