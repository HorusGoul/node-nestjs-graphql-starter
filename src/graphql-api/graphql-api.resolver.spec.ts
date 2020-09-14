import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLAPIResolver } from './graphql-api.resolver';

describe('GraphQLAPIResolver', () => {
  let resolver: GraphQLAPIResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphQLAPIResolver],
    }).compile();

    resolver = module.get<GraphQLAPIResolver>(GraphQLAPIResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('version should return the current version', () => {
    expect(resolver.version()).toBe('1.0.0');
  });
});
