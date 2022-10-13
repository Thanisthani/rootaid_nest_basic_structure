import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    // get users

    getUser()
    {
        return {
            name: "John",
            email: "John@gmail.com"
        }
    }
}
