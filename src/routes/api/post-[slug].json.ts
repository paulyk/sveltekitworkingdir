import { readPost } from "$lib/posts"

export async function get({params}) {
    const { slug } = params
    try {
        const content = readPost(slug)
        return {
            body: content
        }
    } catch(err) {
        return {
            body: "error"
        }
    }
}