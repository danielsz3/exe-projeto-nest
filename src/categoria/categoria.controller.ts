import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service'
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    findAll() {
        return this.categoriaService.findAll();
    }

    @Post()
    create(@Body() createCategoriaDto: CreateCategoriaDto) {
        return this.categoriaService.create(createCategoriaDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriaService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCategoriaDto: CreateCategoriaDto) {
        return this.categoriaService.update(+id, updateCategoriaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriaService.remove(+id);
    }
}
