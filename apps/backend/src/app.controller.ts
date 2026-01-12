import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseService } from './supabase/supabase.service';

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
}
