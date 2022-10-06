import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACES')
@Controller('api/workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces(){

    }
    
    @Post()
    createWorkspace(){

    }

    @Get(':url/members')
    getAllMembersFromWorkspace(){}

    @Post(':url/members')
    inviteMembersToWorkspace(){}
    
    @Delete(':url/members/:id')
    deleteMemberFromWorkspace(){}

    @Get(':url/members/:id')
    getMemberInfoFromWorkspace(){}

}
