import { AppService } from './app.service';
import { ProductoDto } from './product.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHeath(): any;
    createProduct(product: ProductoDto): ProductoDto;
    findAll(): ProductoDto[];
    findById(id: string): ProductoDto;
    update(id: string, updatedProduct: ProductoDto): any;
    deleteById(id: string): ProductoDto;
    areaTriangulo(data: any): any;
}
