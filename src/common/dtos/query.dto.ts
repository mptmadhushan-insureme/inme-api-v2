// import { toNumber } from '@common/util';
import { Transform } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
    // @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
    @ApiProperty({ required: false, default: 1 })
    offset: number;
    // @Transform(({ value }) =>
    //     toNumber(value, { default: 100, min: 0, max: 1000 }),
    // )
    @ApiProperty({ required: false, default: 100 })
    limit: number;
    @ApiProperty({ required: false })
    sortBy?: string;
}
