import { UnauthorizedException } from '@nestjs/common';

export class TokenNotFoundException extends UnauthorizedException {
    constructor(message?: string) {
        super(message || 'Token not found');
    }
}
