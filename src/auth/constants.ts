export const jwtConstants = {
  secret: process.env.APP_JWT_SECRET,
  expiresIn: `${process.env.APP_JWT_EXPIRATION_HOURS}h`,
};
