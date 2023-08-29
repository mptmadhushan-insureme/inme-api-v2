import { AutoMap } from '@automapper/classes';

export class RenewalResponseDto {

    @AutoMap()
    title: string;

    @AutoMap()
    sub_title: string;

    @AutoMap()
    date: string;

    @AutoMap()
    documents: string;

    @AutoMap()
    repeat: string
}
