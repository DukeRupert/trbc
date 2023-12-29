import type { Post } from './types/post'

export type ReqGetPosts = {
    posts: Post[],
    total: number
} | undefined