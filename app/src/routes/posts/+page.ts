import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import S from '$lib/sanity'
export const load: PageLoad = async ({url}) => {
    // Get pagination variables
    const min = parseInt(url.searchParams.get('min') ?? '0')
    const max = parseInt(url.searchParams.get('max') ?? '10') 

    console.log('Fetching posts')
    const res = await S.getPosts(min, max)
    if(!res) error(500, "Weird. We did not find any posts.")
    const { posts, total } = res

    return {
        posts,
        total
    }
}