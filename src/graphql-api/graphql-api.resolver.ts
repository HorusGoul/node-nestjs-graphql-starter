import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class GraphQLAPIResolver {
  @Query('api_version')
  public version(): string {
    return '1.0.0';
  }
}
