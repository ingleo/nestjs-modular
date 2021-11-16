import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
    private configService: ConfigService,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    const apiKey = this.configService.get<string>('API_KEY');
    const dbName = this.configType.database.name;
    return `Hello World! ${apiKey} - ${dbName}`;
  }
}
