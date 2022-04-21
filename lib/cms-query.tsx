export default async function query(query: string, token?: string) {
    if(token === undefined) {
        token = process.env.DATO_API_KEY
    }

    const response = await fetch(
        'https://graphql.datocms.com/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `${query}`
            }),
        }
    )
    const responseData = (await response.json())?.data;

    return responseData;
}