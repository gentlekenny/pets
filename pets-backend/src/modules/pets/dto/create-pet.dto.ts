import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    picture: string;

}
