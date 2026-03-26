import { CategoriasMenuService } from './categorias_menu.service';
import { CreateCategoriasMenuDto } from './dto/create-categorias_menu.dto';
import { UpdateCategoriasMenuDto } from './dto/update-categorias_menu.dto';
export declare class CategoriasMenuController {
    private readonly categoriasMenuService;
    constructor(categoriasMenuService: CategoriasMenuService);
    create(createCategoriasMenuDto: CreateCategoriasMenuDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategoriasMenuDto: UpdateCategoriasMenuDto): string;
    remove(id: string): string;
}
