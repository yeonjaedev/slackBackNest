import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');

    // NestMiddleware를 implement하고 있기 때문에 use라는 함수를 반드시 구현해야 함
    use(request: Request, response: Response, next: NextFunction) : void {
        const { ip, method, originalUrl} = request;
        const userAgent = request.get('user-agent') || '';

        response.on('finish',()=>{ // 응답이 끝났을 때
            const {statusCode} = response;
            const contentLength = response.get('content-length');
            this.logger.log(
                `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
            )
        })
        next(); // 꼭 써야지 다음으로 넘어간다.
    }
}