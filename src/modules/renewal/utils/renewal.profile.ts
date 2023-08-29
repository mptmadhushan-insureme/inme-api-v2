/**
 * @fileOverview - notification domain request dto to entity vs entity to response dto
 * mapping implementation using auto mapper profile
 */
import {
    Mapper,
    MappingProfile,
    createMap,
    forMember,
    ignore,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';

import { Injectable } from '@nestjs/common';

// import { CreateRenewalDto, UpdateRenewalDto } from '../dto/request';
// import { RenewalResponseDto } from '../dto/response';
import { RenewalEntity } from '../entities';

@Injectable()
export class NotificationProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    get profile(): MappingProfile {
        return mapper => {
            // createMap(mapper, RenewalEntity, RenewalResponseDto);
            createMap(
                mapper,
                // CreateRenewalDto,
                RenewalEntity,
                forMember(dest => dest.id, ignore()),
            );
            // createMap(mapper, RenewalResponseDto, UpdateRenewalDto);
            // createMap(mapper, UpdateRenewalDto, RenewalEntity);
        };
    }
}
