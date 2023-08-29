import { BadRequestException } from '@nestjs/common';

export class ExpiredTokenException extends BadRequestException {
    constructor(message?: string) {
        super(message || 'Token expired');
    }
}
