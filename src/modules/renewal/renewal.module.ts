import { Module } from '@nestjs/common';

import { RenewalService } from './services';
import { RenewalController } from './controller';
import { renewalProviders } from './renewal.providers';

@Module({
  providers: [RenewalService, ...renewalProviders],
  exports: [RenewalService],
  controllers: [RenewalController]
})
export class RenewalModule { }
