import { getCollection } from "$db/collections";   

export async function load(request: Request): Promise<{ data: JSON }> {   
    // get skip and limit from searchParams in request
    const url = new URL(request.url);
    let skip = Number(url.searchParams.get("type")); 
	if(skip < 0) 
        skip = 0;

    // get repositories from MongoDB
    const repositories = await getCollection("project", skip * 2, 2);
	return { data: repositories };
}