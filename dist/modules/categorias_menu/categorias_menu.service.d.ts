import { CreateCategoriasMenuDto } from './dto/create-categorias_menu.dto';
import { UpdateCategoriasMenuDto } from './dto/update-categorias_menu.dto';
export declare class CategoriasMenuService {
    create(createCategoriasMenuDto: CreateCategoriasMenuDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategoriasMenuDto: UpdateCategoriasMenuDto): string;
    remove(id: number): string;
}
