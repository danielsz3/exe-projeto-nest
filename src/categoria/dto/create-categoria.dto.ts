import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoriaDto {
  @IsString({message: 'Deve ser uma string'})
  @MinLength(4, {message: 'Tamanho de no min 4 caracteres'})
  @MaxLength(20)
  nome: string;
}
