import { IsInt, IsNotEmpty } from 'class-validator';

export class VerifyClientDto {
  @IsInt()
  @IsNotEmpty()
  clientId: number;
}
