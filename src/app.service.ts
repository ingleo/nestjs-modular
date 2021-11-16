import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('OLD_API_KEY') private oldApiKey: any,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
    @Inject('API_KEY_DB') private apiKeyDb: string,
    private configService: ConfigService,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    const apiKey = this.configService.get<string>('API_KEY');
    const dbName = this.configType.database.name;
    return `Hello World! ${this.oldApiKey.value} - ${apiKey} - ${dbName}- ${this.tasks[2].title} - ${this.apiKeyDb}`;
  }
}
