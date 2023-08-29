import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';

import { RenewalService } from '../services';
import { RenewalEntity as RenewEntity } from '../entities';
import { RenewalResponseDto } from '../dto/response/response_renewal.dto';
import { RenewalCreateDto } from '../dto/reqest/create_renewal.dto';

@Controller({ path: 'renewal' })
export class RenewalController {
    constructor(private readonly renewalService: RenewalService) { }

    @Post()
    async create(@Body() renewal: RenewalCreateDto, @Request() req): Promise<RenewEntity> {
        // create a new renewal and return the newly created renewal
        return await this.renewalService.create(renewal);
    }
    
    @Get()
    async findAll(renewal: RenewalResponseDto,) {
        // get all renewal in the db
        return await this.renewalService.findAll(renewal);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() post: RenewalCreateDto, @Request() req): Promise<RenewEntity> {
        // get the number of row affected and the updated renewal
        const { numberOfAffectedRows, updatedRenewal } = await this.renewalService.update(id, post);

        // if the number of row affected is zero, it means the renewal doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Renewal doesn\'t exist');
        }

        // return the updated renewal
        return updatedRenewal;
    }

}
