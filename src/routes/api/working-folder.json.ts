import { workingFolder } from "$lib/posts";

export async function get({}) {
    return {
        body: workingFolder()
    }
}