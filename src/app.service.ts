import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('OLD_API_KEY') private oldApiKey: any,
    @Inject('TASKS') private tasks: any[],
    @Inject('API_KEY_DB') private apiKeyDb: string,
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
    private configService: ConfigService,
  ) {}
  getHello(): string {
    const apiKey = this.configService.get<string>('API_KEY');
    const dbName = this.configType.database.name;
    return `<b>Hello World!</b> ${this.oldApiKey.value} - ${apiKey} - ${dbName}- ${this.tasks[2].title} - ${this.apiKeyDb}`;
  }
}
