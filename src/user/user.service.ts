import { Injectable } from '@nestjs/common';
import { encodePassword } from 'src/utils/bcrypt';
import { userCreatedto } from './dto/userCreate.dto';


@Injectable()
export class UserService {


// Register user
    
  async  createUser(userCreateDTO: userCreatedto) {

        const { name, email,password } =  userCreateDTO;
        const hashPassword = await encodePassword(password);
        return {
            name,
            email,
            hashPassword
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
