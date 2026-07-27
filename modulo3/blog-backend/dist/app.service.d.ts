import { ProductoDto } from './product.dto';
export declare class AppService {
    private products;
    getHeath(): any;
    createProduct(product: ProductoDto): ProductoDto;
    findAll(): ProductoDto[];
    findById(id: string): ProductoDto;
    update(id: string, updatedProductDto: ProductoDto): any;
    deleteById(id: string): any;
    areaTriangulo(data: any): any;
}
