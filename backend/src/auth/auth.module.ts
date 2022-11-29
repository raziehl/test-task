import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService, secret } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'aneurismscribingbullionquarteredsacredragweed',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [AuthService, UsersService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
