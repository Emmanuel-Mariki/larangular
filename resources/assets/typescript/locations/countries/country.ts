import { City } from '../cities/city';

export class Country {
    id:number;
    name:string;
    url:string;
    keywords:string;
    descriptions:string;
    cities:City[];
}