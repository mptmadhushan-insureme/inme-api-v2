import { UnauthorizedException } from '@nestjs/common';

export class IdentityProviderException extends UnauthorizedException {
    constructor(message?: string) {
        super(message || 'User not found in the pool');
    }
}
