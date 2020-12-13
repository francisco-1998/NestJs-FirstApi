import { Controller, Get, Param, Post ,Put, Delete, Body } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { EditPostDto } from './dtos/edit-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private postService:PostService) {
        
    }

    @Get()
    getAllPost(){
        return this.postService.getManyPosts();
    }

    @Get(':id')
    getOnePost(@Param() params){
        const id = Number(params.id)
        return this.postService.getOnePost(id);
    }

    @Post()
    createPost(@Body() dtoCreatePost:CreatePostDto){
        return this.postService.createOnePost(dtoCreatePost)
    }
    
    @Put(':id')
    editPost(@Param() params, @Body() dtoPostEdit:EditPostDto){
        return this.postService.updateOnePost(params.id, dtoPostEdit)
    }


    @Delete(':id')
    deletePost(@Param('id') id:number){
        return this.postService.deleteOnePost(id);
    }

}
