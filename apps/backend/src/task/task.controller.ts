import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll() {
    const tasks: Task[] = await this.taskService.getTasks();
    return { success: true, tasks };
  }
}
