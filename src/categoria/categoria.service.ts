import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async findAll(): Promise<Array<Categoria>> {
        // return [{ message: "Hello World Categoria" }]
        return await this.categoriaRepository.find();
    }

    async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
        return await this.categoriaRepository.save(createCategoriaDto);
    }

    async update(id: number, updateCategoriaDto: CreateCategoriaDto) {
        return await this.categoriaRepository.update(id, updateCategoriaDto)
    }

    async findOne(id: number) {
        return await this.categoriaRepository.findBy({ id: id });
    }

    async remove(id: number) {
        return await this.categoriaRepository.delete({ id: id });
    }

}
