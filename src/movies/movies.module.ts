import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { QRCodeGen } from 'src/utils/qr-generator';

@Module({
  providers: [ MoviesService, QRCodeGen ],
  controllers: [MoviesController]
})
export class MoviesModule {}
