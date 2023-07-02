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
    @Body() signInDto: CreatePersonnelDto, // @Res ({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authenticationService.signIn(signInDto);
    await promisify(request.login).call(request, user);
    response.cookie('accessToken', accessToken, {
      secure: false,
      httpOnly: true,
      sameSite: true,
    });
    response.cookie('refreshToken', refreshToken, {
      secure: false,
      httpOnly: true,
      sameSite: true,
    });
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh-tokens')
  async refreshTokens(
    @Res({ passthrough: true }) response: Response,
    @Body() refreshTokenDto: RefreshTokenDto,
  ) {
    const { accessToken, refreshToken } =
      await this.authenticationService.refreshTokens(refreshTokenDto);
    response.cookie('accessToken', accessToken, {
      secure: false,
      httpOnly: true,
      sameSite: true,
    });
    response.cookie('refreshToken', refreshToken, {
      secure: false,
      httpOnly: true,
      sameSite: true,
    });
  }
}
