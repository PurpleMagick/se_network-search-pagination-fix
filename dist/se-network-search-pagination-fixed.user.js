// ==UserScript==
// @name			Stack Exchange - fix network search pagination
// @namespace		https://github.com/PurpleMagick/
// @description		Network search pagination is broken and does not count pages correctly. This is a fix
// @author			VLAZ
// @version			1.0.0
//
// @match           https://stackexchange.com/search*
//
// @grant			none
// ==/UserScript==

let __webpack_exports__ = {};

// CONCATENATED MODULE: ./src/paginationParametersHelpers.ts
function retrievePagesize() {
	const searchParams = new URLSearchParams(window.location.search);
	return Number(searchParams.get("pagesize") ?? 15);
}
function createCorrecURL(href, pagesize) {
	const url = new URL(href);
	url.searchParams.set("pagesize", String(pagesize));
	return url;
}

// CONCATENATED MODULE: ./src/index.ts

function main() {
	const perPage = retrievePagesize();
	const searchParams = new URLSearchParams(window.location.search);
	if (searchParams.has("pagesize") === false) {
		window.location.href = createCorrecURL(window.location.href, perPage).href;
		return;
	}
	document.querySelectorAll(".pager a")
		.forEach(el => {
			el.href = createCorrecURL(el.href, perPage).href;
		});
}
main();

