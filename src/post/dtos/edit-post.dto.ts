// import { PartialType } from '@nestjs/swagger';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class EditPostDto extends PartialType(OmitType(CreatePostDto, ['slug'] as const)){ }
// export class EditPostDto extends PartialType(CreatePostDto){ }