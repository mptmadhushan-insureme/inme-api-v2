import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenewalModule } from './modules/renewal/renewal.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RenewalModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
