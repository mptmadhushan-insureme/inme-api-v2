import { HttpException, HttpStatus } from '@nestjs/common';

export class AppStoreException extends HttpException {
    constructor(
        private readonly responseCode: number,
        private readonly responseMessage: string,
    ) {
        let statusCode: HttpStatus;
        let errorCode: string;
        let message: string;

        switch (responseCode) {
            case 400:
                statusCode = HttpStatus.BAD_REQUEST;
                errorCode = 'INVALID_TRANSACTION_ID';
                message = `Invalid request: ${responseMessage}`;
                break;
            case 401:
                statusCode = HttpStatus.UNAUTHORIZED;
                errorCode = 'INVALID_JWT_TOKEN';
                message = `Invalid JWT token: ${responseMessage}`;
                break;
            case 404:
                statusCode = HttpStatus.NOT_FOUND;
                errorCode = 'TRANSACTION_ID_NOT_FOUND';
                message = `Transaction ID not found: ${responseMessage}`;
                break;
            case 429:
                statusCode = HttpStatus.TOO_MANY_REQUESTS;
                errorCode = 'RATE_LIMIT_EXCEEDED';
                message = `Rate limit exceeded: ${responseMessage}`;
                break;
            case 500:
                statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                errorCode = 'SERVER_ERROR';
                message = `Server error: ${responseMessage}`;
                break;
            default:
                statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                errorCode = 'UNKNOWN_ERROR';
                message = `Unknown error: ${responseMessage}`;
                break;
        }

        const response = {
            statusCode,
            error: HttpStatus[statusCode],
            message,
            errorCode,
        };

        super(response, statusCode);
    }
}
