import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { EditPostDto } from './dtos/edit-post.dto';

@Injectable()
export class PostService {

    createOnePost(createPostDto:CreatePostDto) {
        return {
            ok: true,
            message: 'createOnePost',
            data: createPostDto
        }
    }

    getManyPosts() {
        return {
            ok: 'true',
            message: 'getManyPosts'
        }
    }


    getOnePost(id: number) {
        return {
            ok: 'true',
            message: 'getOnePost'
        }
    }


    updateOnePost(id:number, dtoPostEdit:EditPostDto){
        return {
            ok: true,
            message: 'updateOnePost',
            data: dtoPostEdit
        }
    }


    deleteOnePost(id:number){
        return {
            ok: true,
            message: 'deleteOnePost'
        }
    }



}
