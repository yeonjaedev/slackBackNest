import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}
    async postUsers(email: string, nickname: string, password:string)  {
        if(!email) {
            throw new BadRequestException('이메일이 없습니다.');
        }
        if(!nickname) {
            throw new BadRequestException('닉네임이 없습니다.');
        }
        if(!password) {
            throw new BadRequestException('비밀번호가 없습니다.');
        }
        const user = await this.usersRepository.findOne({where:{email}});
        if( user ){
            throw new UnauthorizedException('이미 존재하는 사용자입니다.');
        }
        const hashedPassword = await bcrypt.hash(password,12);
        await this.usersRepository.save({
            email,
            nickname,
            password:hashedPassword,
        })
    }
}
