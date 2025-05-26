import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const Repositorys = [];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [...Repositorys],
  exports: [...Repositorys],
})
export class EntitiesModule {}
