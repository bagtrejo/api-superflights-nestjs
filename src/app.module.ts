import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development']
    }), 
    MongooseModule.forRoot(process.env.URI_MONGODB), 
    UserModule, PassengerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }