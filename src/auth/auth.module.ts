import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    JwtModule.register({
      privateKey: process.env.JWT_PRIVATE_KEY,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN_SECONDS,
      },
    }),
    PassportModule.register({ session: true }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
