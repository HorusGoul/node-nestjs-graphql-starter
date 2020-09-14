import { Module } from '@nestjs/common';
import { DateScalar } from './date.scalar';
import { PaginationAmountScalar } from './pagination-amount.scalar';
import { JSONScalar } from './json.scalar';

@Module({
  providers: [DateScalar, PaginationAmountScalar, JSONScalar],
  exports: [DateScalar, PaginationAmountScalar, JSONScalar],
})
export class ScalarsModule {}
