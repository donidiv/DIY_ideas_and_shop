import { Comment } from "./comments";
import { Like } from "./like";
import { User } from "./user";

export interface Idea {
    name: string,
    img: string,
    description: string,
    pieces: number,
    price: number,
    _ownerId: User,
    _id: string,
    likes: Like[],
    comments: any,
}