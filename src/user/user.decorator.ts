import { createRouteParamDecorator } from '@nestjs/common';

export const User = createRouteParamDecorator((data, request) => {
  return data ? request.user[data] : request.user;
});
