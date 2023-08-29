import { Injectable, Inject } from '@nestjs/common';

import { RenewalEntity } from '../entities';
import { RenewalResponseDto } from '../dto/response/response_renewal.dto';
import { RenewalCreateDto } from '../dto/reqest/create_renewal.dto';
import { RENEWAL_REPOSITORY } from '../../../common/constants';

@Injectable()
export class RenewalService {
    constructor(@Inject(RENEWAL_REPOSITORY) private readonly renewalRepository: typeof RenewalEntity) { }

    async create(renewal: RenewalCreateDto): Promise<RenewalEntity> {
        return await this.renewalRepository.create<RenewalEntity>({ ...renewal });
    }
    async findAll(renewal: RenewalResponseDto): Promise<RenewalEntity[]> {
        return await this.renewalRepository.findAll<RenewalEntity>({

        });
    }
    async findOneById(id: number): Promise<RenewalEntity> {
        return await this.renewalRepository.findOne<RenewalEntity>({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedRenewal]] = await this.renewalRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedRenewal };
    }

}
