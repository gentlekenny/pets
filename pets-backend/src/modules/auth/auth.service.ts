import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) {

    }

    async login(loginDto: LoginDto) {
        const user = await this.userService.findOne(loginDto.email)
        const isPasswordOk = await this.validateUser(loginDto.password, user.password)
        if (isPasswordOk) {
            const payload = {
                sub: user._id,
                email: user.email
            }
            return {
                access_token: await this.jwtService.signAsync(payload)
            }
        }
    }


    async validateUser(password: string, hashedPassword: string) {
        return new Promise<boolean>((resolve, reject) => {
            bcrypt.compare(password, hashedPassword).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }
}