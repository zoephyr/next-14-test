"use server"
// Server side
import * as fs from 'fs/promises'
import { redirect } from 'next/navigation'

// NOT NEEDED for actions
// export async function GET(request: Request){
//     return new Response("GET: REQ ON ENDPOINT")
// }

// middleware like in tRPC could handle authentication/protection

export async function saveNote(formData: FormData){
    
    
    // Validation handling (ZOD go here)
    const title = formData.get("title")
    const body = formData.get("body")

    // Authentication Checking
    await fs.writeFile('./src/app/constants/example-post.txt', body as string)
    await fs.writeFile('./src/app/constants/title.txt', title as string)

    redirect("/example/rsc-test",)
    // return new Response( null, {
    //     headers: {
    //         Location: "/example/rsc-test",
    //     },
    //     status: 303,
    // }
    // 
    // )
}