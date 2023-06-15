import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt"


@Injectable()
export class AuthService {
    constructor(private userService: UserService) {

    }

    async login(loginDto: LoginDto) {
        const user = await this.userService.findOne(loginDto.email)
        const isPasswordOk = await this.comparePassword(loginDto.password, user.password)
        console.log(isPasswordOk)
    }


    async comparePassword(password: string, hashedPassword: string) {
        return new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, hashedPassword).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }
}