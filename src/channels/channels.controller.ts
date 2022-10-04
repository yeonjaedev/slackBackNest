import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    @Get()
    getChannels(){}

    @Post()
    postChannels(){

    }

    @Get(':channel')
    getChannel(){}

    @Get(':channel/chats')
    getChats(){

    }
    @Post(':channel/chats')
    postChats(){

    }

    @Post(':channel/images')
    postImages(){

    }
    @Get(':channel/unreads')
    getUnreads(){
        
    }
    @Get(':channel/members')
    getMemgers(){}

    @Post(':channel/members')
    postMemgers(){}
}
