import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Req,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { promisify } from 'util';
import { CreatePersonnelDto } from 'src/personnel/dto/create-personnel.dto';
import { Response, Request } from 'express';
import { RefreshTokenDto } from 'src/resources/dto/refresh-tokens.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
    @Body() signInDto: CreatePersonnelDto,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authenticationService.signIn(signInDto);
    await promisify(request.login).call(request, user);

    response.setHeader('X-Access-Token', accessToken);
    response.setHeader('X-Refresh-Token', refreshToken);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh-tokens')
  async refreshTokens(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
    @Body() refreshTokenDto: RefreshTokenDto,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authenticationService.refreshTokens(refreshTokenDto);
    await promisify(request.login).call(request, user);
    response.cookie('accessToken', accessToken, {
      secure: true,
      httpOnly: true,
      sameSite: true,
    });
    response.cookie('refreshToken', refreshToken, {
      secure: true,
      httpOnly: true,
      sameSite: true,
    });
  }
}
