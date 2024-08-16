import { searchCollection } from "$db/collections";   

export async function GET(request: Request): Promise<Response> {   
    // get skip and limit from searchParams in request
    const url = new URL(request.url);
    let group = url.searchParams.get("group") ?? ''; 

    // get repositories from MongoDB
    const repositories = await searchCollection("project", group!);

    // return JSON response
	return new Response(JSON.stringify(repositories));
}