import { getCollection, searchCollection } from "$db/collections";   

export async function load(request: Request): Promise<{ data: JSON }> {   
    // get skip and limit from searchParams in request
    // get search from searchParams in request
    const url = new URL(request.url);
    let type = url.searchParams.get("type") ?? ''; 

    // get repositories from MongoDB
    const repositories = await searchCollection("project", type!);
	return { data: repositories };
}