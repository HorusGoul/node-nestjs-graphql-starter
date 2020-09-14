import { Scalar } from '@nestjs/graphql';
import { createIntScalar } from 'graphql-scalar';
import { GraphQLScalar } from './graphql-scalar.adapter';

const name = 'PaginationAmount';

@Scalar(name)
export class PaginationAmountScalar extends GraphQLScalar() {
  protected scalar = createIntScalar({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    name,
    minimum: 1,
    maximum: 100,
  });
}
