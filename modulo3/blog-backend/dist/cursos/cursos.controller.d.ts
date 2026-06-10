import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    create(dto: CreateCursoDto): Promise<SuccessResponseDto<any>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<any>>;
    findOne(id: string): Promise<SuccessResponseDto<any>>;
    update(id: string, dto: CreateCursoDto): Promise<SuccessResponseDto<any>>;
    remove(id: string): Promise<SuccessResponseDto<any>>;
}
