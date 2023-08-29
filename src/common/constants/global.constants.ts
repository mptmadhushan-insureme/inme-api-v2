/**
 * @fileOverview - managing application global constants
 */
export enum CONFIG_NAMESPACES {
    APP = 'APP',
    AWS = 'AWS',
    FIREBASE = 'FIREBASE',
    EMAIL_TEMP = 'EMAIL_TEMP',
    JWT = 'JWT',
    APP_STORE = 'APP_STORE',
    PLAY_STORE = 'PLAY_STORE',
}

export enum Role {
    User = 'user',
    Admin = 'admin',
    Super_Admin = 'super-admin',
}

export const APPLICATION_NAME = 'SwingZen';

export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
export const RENEWAL_REPOSITORY = 'RENEWAL_REPOSITORY';
export const POST_REPOSITORY = 'POST_REPOSITORY';
