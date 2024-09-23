import { post } from "@/api"

export function test() {
    return post('/text')
}
