import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDestinasiDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  kategori: string;

  @IsNumber()
  @IsNotEmpty()
  hargaTiket: number;
}