import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

interface Task {
  id: number;
  title: string;
  description: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly supabaseService: SupabaseService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  healthCheck(): string {
    return 'OK';
  }

  @Get('supabase-test')
  async supabaseTest() {
    const client = this.supabaseService.getClient();
    return {
      success: true,
      message: 'Supabase client is connected',
      clientInitialized: !!client,
    };
  }

  @Get('tasks')
  async getTasks() {
    const client = this.supabaseService.getClient();
    const { data, error } = await client.from('Task').select('*').eq('nonPermernentDelete', false);

    if (error) {
      return { success: false, error: error.message };
    }

    const tasks: Array<Task> = data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      completed: item.completed,
    }));

    return { success: true, tasks };
  }
}
