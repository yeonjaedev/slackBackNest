import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
    @ApiProperty({
        example: 'devman@gmail.com',
        description: '이메일',
        required:true
    })
    public email : string ;

    @ApiProperty({
        example: '데브맨',
        description: '닉네임',
        required:true
    })
    public nickname: string;
    
    @ApiProperty({
        example: 'New1243!',
        description: '비밀번호',
        required:true
    })
    public password: string;
}