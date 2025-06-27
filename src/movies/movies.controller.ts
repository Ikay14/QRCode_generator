import { Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private movies: MoviesService){}

    @Post('generate')
    async generateGroups(){
        return this.movies.generateGroup()
    }

    @Get()
    async getMovies(@Param('groupId') groupId: string){
        return this.movies.getMoviesRecommendation(groupId)
    }
}
