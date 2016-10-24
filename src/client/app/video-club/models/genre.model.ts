import { GenreInterface } from '../interfaces/index';

export class Genre {
    id: number;
    name: string;

    constructor(genre: GenreInterface) {
        this.id = genre.id;
        this.name = genre.name;
    }

}
