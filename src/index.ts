import { retrievePagesize, createCorrecURL } from "./paginationParametersHelpers";


function main() {
	const perPage = retrievePagesize();

	const searchParams = new URLSearchParams(window.location.search);

	if (searchParams.has("pagesize") === false) {
		window.location.href = createCorrecURL(window.location.href, perPage).href;
		return;
	}

	document.querySelectorAll<HTMLAnchorElement>(".pager a")
		.forEach(el => {
			el.href = createCorrecURL(el.href, perPage).href;
		});
}

main();
