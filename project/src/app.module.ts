import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AutorController} from "./autor/autor.controller";
import {AutorService} from "./autor/autor.service";
import {LibroService} from "./libro/libro.service";
import {LibroController} from "./libro/libro.controller";

@Module({
  imports: [],
  controllers: [AppController, AutorController, LibroController],
  providers: [AppService, AutorService, LibroService],
})
export class AppModule {}
