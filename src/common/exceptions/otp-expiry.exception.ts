import { BadRequestException } from '@nestjs/common';

export class OtpExpiryException extends BadRequestException {
    constructor(private readonly otpSentEvery: number) {
        const errorCode = 'OTP_TO_MANY_REQUEST';
        const message = `New otp generation only allowed every ${otpSentEvery} minutes`;
        const response = {
            statusCode: 429,
            error: 'Too Many Requests',
            message,
            errorCode,
        };
        super(response);
    }
}
