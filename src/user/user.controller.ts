import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    )
    { }


    // get user
    @Get()
    getUser()
    {
        return this.userService.getUser();
    }

}
