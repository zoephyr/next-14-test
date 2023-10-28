// Server side
import * as fs from 'fs/promises'

export async function GET(request: Request){
    return new Response("GET: REQ ON ENDPOINT")
}

// middleware like in tRPC could handle authentication/protection

export async function POST(request: Request){
    // Error handling
    const newData = await request.formData()
    
    // Validation handling (ZOD go here)
    const title = newData.get("title")
    const body = newData.get("body")

    // Authentication Checking
    await fs.writeFile('./src/app/constants/example-post.txt', body as string)
    await fs.writeFile('./src/app/constants/title.txt', title as string)

    return new Response( null, {
        headers: {
            Location: "/example/rsc-test",
        },
        status: 303,
    }
        
    )
}