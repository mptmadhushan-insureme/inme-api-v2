import { UnauthorizedException } from '@nestjs/common';

export class InactiveUserException extends UnauthorizedException {
    constructor(nextActionToken: string, customMessage?: string) {
        const errorCode = 'INACTIVE_USER';
        const message =
            customMessage ||
            'The user account is in inactive status. Please verify the email address first to sign in.';
        const response = {
            statusCode: 401,
            error: 'Unauthorized',
            message,
            errorCode,
            nextActionToken,
        };
        super(response);
    }
}
