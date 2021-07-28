import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserResolver } from './user.resolvers';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolver],
})
export class UsersModule {}
