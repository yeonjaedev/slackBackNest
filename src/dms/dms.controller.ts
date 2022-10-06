import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DMS')
@Controller('api/workspaces/:url/dms')
export class DmsController {
    @ApiQuery({
        name:'perPage',
        required:true,
        description: '한 번에 가져오는 개수'
    })
    @ApiQuery({
        name:'page',
        required:true,
        description: '불러올 페이지'
    })
    @Get(':id/chats')
    getChat(@Query() query,@Param() param){
        console.log(query.perPage, query.page)
        console.log(param.id, param.url)
    }

    @Post(':id/chats')
    postChat(@Body() body){}

    @Get(':id/unreads')
    getUnreads(){}

    @Post(':id/images')
    getImages(){}
}
