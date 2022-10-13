import { Injectable } from '@nestjs/common';
import { userCreatedto } from './dto/userCreate.dto';

@Injectable()
export class UserService {


// Register user
    
    createUser(userCreateDTO: userCreatedto) {
        const { name, email, password } = userCreateDTO;
        
        return {
            name,
            email,
            password
        }
        
    }

    // get users

    getUser()
    {
        return {
            name: "John",
            email: "John@gmail.com"
        }
    }
}
