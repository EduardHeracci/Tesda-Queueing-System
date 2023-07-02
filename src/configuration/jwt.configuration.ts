import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET_KEY,
    accessTokenTtl: parseInt(
      process.env.JWT_TOKEN_ACCESS_TOKEN_TTL ?? '900',
      10,
    ),
    refreshTokenTtl: parseInt(
      process.env.JWT_TOKEN_REFRESH_TOKEN_TTL ?? '86400',
      10,
    ),
  };
});
