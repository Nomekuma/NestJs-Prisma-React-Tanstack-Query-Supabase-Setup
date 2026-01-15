import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('health')
  async supabaseTest() {
    const client = this.supabaseService.getClient();
    return {
      success: true,
      message: 'Supabase client is connected',
      clientInitialized: !!client,
    };
  }
}
