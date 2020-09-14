import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLAPIModule } from '@/graphql-api/graphql-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLAPIModule,
  ],
})
export class AppModule {}
