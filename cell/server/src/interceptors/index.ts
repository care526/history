import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

class Response {
  status: number;
  message?: string;
  response?: any;
}

@Injectable()
export class Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    return next.handle().pipe(
      map((data) => ({
        status: 200,
        response: data,
      })),
      catchError((error: HttpException) => {
        return of({
          status: error?.getStatus(),
          message: error.message,
        });
      }),
    );
  }
}
