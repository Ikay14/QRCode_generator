

import { Injectable } from '@nestjs/common'
import QRCode from 'qrcode'; 
import moviesJsonFile from '../assest/movies.json';
import shortUUID from 'short-uuid';

@Injectable()
export class QRCodeGen {

        private latestQRCode : string | null = null
        private moviesDB : Record<string, any[]> = {}
        private readonly baseUrl = process.env.BASE_URL

        constructor() {
            this.startAutoGeneration();
          }
  
    getRandomIndexes(max: number, count: number): number[] {
        const indexes = new Set<number>();
        while (indexes.size < count) {
          indexes.add(Math.floor(Math.random() * max));
        }
        return Array.from(indexes);
      }
      

  async startAutoGeneration() {
    setInterval(async () => {
      const uuid = shortUUID.generate();
      const indexes = this.getRandomIndexes(moviesJsonFile.length, 10);
      const group = indexes.map(i => moviesJsonFile[i]);
      this.moviesDB[uuid] = group;

      const qrData = `${this.baseUrl}/${uuid}`;
      this.latestQRCode = await QRCode.toDataURL(qrData);
    }, 10000); 
  }


  getMovieGroup(uuid: string) {
    return this.moviesDB[uuid];
  }
  
  getQRCode(): string | null {
    return this.latestQRCode;
  }


}

