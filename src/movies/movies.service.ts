import { Injectable, NotFoundException } from '@nestjs/common';
import { QRCodeGen } from 'src/utils/qr-generator';

@Injectable()
export class MoviesService {
    constructor(private qrCode: QRCodeGen) {}


generateGroup(){
    const group = this.qrCode.startAutoGeneration()
    if (!group) throw new NotFoundException('Failed to generate group');
    return { msg: 'Group generated successfully, it refreshes after 10 sec' };
}

    async getMoviesRecommendation(movieId: string): Promise<{ msg: string, Data: any }> {

    const movies = await this.qrCode.getMovieGroup(movieId)

    if (!movies) throw new NotFoundException(`No movie found with id ${movieId}`)
        
     return { 
        msg: `movies returned successfully, not it refreshes after 10 sec`,
        Data: movies 
    }  

}
}
