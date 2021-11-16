import {readFileSync} from 'fs'
import path from 'path'


export function workingFolder() {
    return process.cwd()
}

export function readPost(slug: string) {
    let filename = path.resolve(process.cwd(), 'posts', `${slug}.md`)
    let content = readFileSync(filename, 'utf-8')
    return content
}