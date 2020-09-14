import { Scalar } from '@nestjs/graphql';
import { GraphQLScalar } from './graphql-scalar.adapter';
import GraphQLJSON from 'graphql-type-json';

@Scalar('JSON')
export class JSONScalar extends GraphQLScalar() {
  protected scalar = GraphQLJSON;
}
