import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    @Get()
    getAllChannels(){}

    @Post()
    createChannels(){

    }

    @Get(':channel')
    getSpecificChannel(){}

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
    getAllMemgers(){}

    @Post(':channel/members')
    inviteMembers(){}
}
