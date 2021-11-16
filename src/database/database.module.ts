import { Module, Global } from '@nestjs/common';

const API_KEY_DB = '12345678';
const API_KEY_PROD_DB = '87654321';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY_DB',
      useValue:
        process.env.NODE_ENV === 'production' ? API_KEY_PROD_DB : API_KEY_DB,
    },
  ],
  exports: ['API_KEY_DB'],
})
export class DatabaseModule {}
