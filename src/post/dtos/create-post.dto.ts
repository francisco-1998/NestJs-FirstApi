import { EnumToString } from './../../common/helpers/enumToArrayString.helper';
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { PostCategory } from '../enums/post-category.enum';


export class CreatePostDto {

    @IsString({ message: 'El titulo es requerido' })
    title: string;

    @IsString({ message: 'El slug es requerido' })
    slug: string;

    @IsString()
    excerpt: string;

    @IsString()
    content: string;

    @IsString()
    @IsEnum(PostCategory,{ message: `Opción inválida, las categorias válidas son ${EnumToString(PostCategory)}` })
    category: PostCategory;

    @IsArray()
    @IsString({ each: true })
    tags: string[];

    @IsBoolean()
    status: boolean;

}