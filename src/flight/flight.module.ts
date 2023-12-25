import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHTS } from 'src/common/models/models';
import { FlightSchema } from './schema/flight.schema';
import { PassengerModule } from 'src/passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync(
      [
        {
          name: FLIGHTS.name,
          useFactory: () => FlightSchema.plugin(require ('mongoose-autopopulate'))
        }
      ]
    ),
    PassengerModule
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
