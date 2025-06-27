import { Injectable, NotFoundException } from '@nestjs/common';
import { QRCodeGen } from 'src/utils/qr-generator';

@Injectable()
export class MoviesService {
    constructor(private qrCode: QRCodeGen){}


async generateGroup(){
    const group = this.qrCode.startAutoGeneration()
    console.log(group);
    
    return group
}    

async getMoviesRecommendation(movieId: string):Promise<{msg: string, Data: any}>{

    const movies = this.qrCode.getMovieGroup(movieId)

    if (!movies) throw new NotFoundException(`No movie found with id ${movieId}`)
        
     return{ 
        msg: `movies returned successfully, not it refreshes after 10 sec`,
        Data: movies 
    }  

}
}
