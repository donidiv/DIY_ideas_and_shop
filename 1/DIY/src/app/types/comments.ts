import { User } from "./user";

export interface Comment {
    userId: User,
    comment: string,
}