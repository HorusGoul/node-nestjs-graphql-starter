import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { resolve } from 'path';
import depthLimit from 'graphql-depth-limit';
import { GraphQLAPIResolver } from './graphql-api.resolver';
import './graphql-api.types';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      introspection: true,
      typePaths: [resolve(__dirname, './**/*.graphql')],
      context: (req) => ({ req: req.request, __gqlContext: true }),
      fieldResolverEnhancers: ['guards'],
      // Caution: you have to change the depthLimit to a custom number
      // This number limits the maximum depth of incoming queries
      validationRules: [depthLimit(999)],
    }),
  ],
  providers: [GraphQLAPIResolver],
})
export class GraphQLAPIModule {}
