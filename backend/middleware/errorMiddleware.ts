import { NextFunction, Response, Request } from 'express';
import { NODE_ENV } from '../utils/config';
import HttpException from '../utils/httpException';

export const errorHandler = (
    err: HttpException,
  = 'production' ? null : err.stack,
    });
};
