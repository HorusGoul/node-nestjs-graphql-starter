import { CustomScalar } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function GraphQLScalar<T = unknown, K = unknown>() {
  type ScalarType = CustomScalar<T, K>;

  abstract class GraphQLScalarAbstract implements ScalarType {
    protected abstract scalar: GraphQLScalarType;

    parseValue(
      ...params: Parameters<ScalarType['parseValue']>
    ): ReturnType<ScalarType['parseValue']> {
      return this.scalar.parseValue(...params);
    }

    serialize(
      ...params: Parameters<ScalarType['serialize']>
    ): ReturnType<ScalarType['serialize']> {
      return this.scalar.serialize(...params);
    }

    parseLiteral(
      ...params: Parameters<ScalarType['parseLiteral']>
    ): ReturnType<ScalarType['parseLiteral']> {
      return this.scalar.parseLiteral(...params);
    }
  }

  return GraphQLScalarAbstract;
}
