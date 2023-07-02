import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/configuration/jwt.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from 'src/personnel/entities/personnel.entity';
import { HashingResourcesService } from 'src/resources/hashing.resources.service';
import { BcryptResourcesService } from 'src/resources/bcrypt.resources.service';
import * as session from 'express-session';
import * as passport from 'passport';
import { RefreshTokenIdsStorage } from 'src/resources/refresh-token-ids.resources';
import { PersonnelSerializer } from 'src/resources/serializer/personnel-serializer/personnel.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Personnel]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  controllers: [AuthenticationController],
  providers: [
    {
      provide: HashingResourcesService,
      useClass: BcryptResourcesService,
    },
    AuthenticationService,
    RefreshTokenIdsStorage,
    PersonnelSerializer,
  ],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.SESSION_SECRET_KEY,
          resave: false,
          saveUninitialized: false,
          cookie: {
            sameSite: true,
            httpOnly: true,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
