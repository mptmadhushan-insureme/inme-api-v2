import { UnauthorizedException } from '@nestjs/common';

export class BlockedUserException extends UnauthorizedException {
    constructor() {
        const errorCode = 'BLOCKED_USER';
        const message =
            'Sorry, your account is now blocked. You have reached the maximum login attempts. Please contact info@swingzen.com for further support';
        const response = {
            statusCode: 401,
            error: 'Unauthorized',
            message,
            errorCode,
        };
        super(response);
    }
}
