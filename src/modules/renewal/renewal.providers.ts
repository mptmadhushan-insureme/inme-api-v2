import { RenewalEntity } from './entities';
import { RENEWAL_REPOSITORY } from '../../common/constants';

export const renewalProviders = [
    {
        provide: RENEWAL_REPOSITORY,
        useValue: RenewalEntity,
    },
];
