export function retrievePagesize(): number {
	const searchParams = new URLSearchParams(window.location.search);

	return Number(searchParams.get("pagesize") ?? 15);
}
export function createCorrecURL(href: string, pagesize: number): URL {
	const url = new URL(href);
	url.searchParams.set("pagesize", String(pagesize));
	return url;
}
