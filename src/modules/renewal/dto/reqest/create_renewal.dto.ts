import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class RenewalCreateDto {

    // @IsNotEmpty()
    readonly title: string;

    // @IsNotEmpty()
    readonly sub_title: string;

    // @IsNotEmpty()
    readonly date: string;

    // @IsNotEmpty()
    readonly documents: string;
    
    // @IsNotEmpty()
    readonly repeat: string
}
