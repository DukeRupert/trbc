import type { PageLoad } from "./$types";
import { getPosts } from "$lib/sanity/query";
import Sanity from "$lib/sanity/client";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({url}) => {
    // Get pagination variables
    const min = parseInt(url.searchParams.get('min') ?? '0')
    const max = parseInt(url.searchParams.get('max') ?? '10') 

    const q = getPosts;
    const p = { min, max }

    console.log('Fetching posts')
    const posts = await Sanity.fetch(q, p)
    if(!posts) error(500, "Weird. We did not find any posts.")

    return {
        posts
    }
}