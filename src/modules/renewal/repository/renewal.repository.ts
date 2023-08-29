// /**
//  * @fileOverview - notification domain data access layer implementation
//  */
// import { IPaginatedQueryResults } from '@common/interfaces';
// import { updateOperationBehavior } from '@common/util';
// import { PrismaService } from 'nestjs-prisma';

// import { Injectable } from '@nestjs/common';

// import { RenewalEntity } from '../entities';

// // @Injectable()
// // export class NotificationsRepository {
// //     constructor(readonly prisma: PrismaService) {
// //         updateOperationBehavior(prisma, 'Notification');
// //     }

// //     /**
// //      * create notification
// //      * @param {RenewalEntity} notification
// //      */
// //     async create(
// //         notification: RenewalEntity,
// //     ): Promise<RenewalEntity> {
// //         return this.prisma.notification.create({ data: notification });
// //     }

//     /**
//      * get notification as paginated results
//      * @param filters
//      * @param options
//      * @param {string} userId
//      */
//     // async findAll(
//     //     filters: { notificationTypes?: RenewalTypes; isRead?: boolean },
//     //     options: { offset: number; limit: number; sortBy?: string },
//     //     userId: string,
//     // ): Promise<IPaginatedQueryResults<RenewalEntity>> {
//     //     // set default values
//     //     if (isNaN(options.offset)) options.offset = 1;
//     //     if (isNaN(options.limit)) options.limit = 100;

//     //     const params = {
//     //         skip: (options.offset - 1) * options.limit,
//     //         take: options.limit,
//     //         where: { ...filters, userId },
//     //         orderBy: [
//     //             options.sortBy
//     //                 ? {
//     //                       [options.sortBy.split(':')[0]]:
//     //                           options.sortBy.split(':')[1],
//     //                   }
//     //                 : null,
//     //         ],
//     //     };
//     //     //
//     //     const queryResults: [number, RenewalEntity[]] =
//     //         await this.prisma.$transaction([
//     //             this.prisma.notification.count({
//     //                 where: {
//     //                     deletedAt: null,
//     //                     ...filters,
//     //                     userId,
//     //                 },
//     //             }),
//     //             this.prisma.notification.findMany(params),
//     //         ]);
//     //     //
//     //     return {
//     //         results: queryResults[1],
//     //         page: options.offset,
//     //         limit: options.limit,
//     //         totalPages: Math.ceil(queryResults[0] / options.limit),
//     //         totalResults: queryResults[0],
//     //     };
//     // }

//     /**
//      * get notification by id
//      * @param {string} userId
//      * @param {string} id
//      */
//     // async findById(userId: string, id: string): Promise<RenewalEntity> {
//     //     return this.prisma.notification.findFirst({
//     //         where: {
//     //             userId,
//     //             id,
//     //         },
//     //     });
//     }

//     /**
//      * update notification
//      * @param {string} userId
//      * @param {string} id
//      * @param {RenewalEntity} notificationEntity
//      */
//     // async update(
//     //     userId: string,
//     //     id: string,
//     //     notificationEntity: RenewalEntity,
//     // ): Promise<RenewalEntity> {
//     //     await this.prisma.notification.update({
//     //         where: { id },
//     //         data: notificationEntity,
//     //     });
//     //     return this.findById(userId, id);
//     // }

//     /**
//      * delete notification
//      * @param {string} id
//      *
//      */
//     // async remove(id: string): Promise<RenewalEntity> {
//     //     return await this.prisma.notification.delete({
//     //         where: {
//     //             id,
//     //         },
//     //     });
//     // }
// }
