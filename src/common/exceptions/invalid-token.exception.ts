import { UnauthorizedException } from '@nestjs/common';

export class InvalidTokenException extends UnauthorizedException {
    constructor(message?: string) {
        super(message || 'Invalid token');
    }
}
