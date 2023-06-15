import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/jwt.constant";
import { LocalStrategy } from "./strategy/local.strategy";
import { PassportModule } from "@nestjs/passport";


@Module({
    imports: [UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' }
        }),
        PassportModule],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }