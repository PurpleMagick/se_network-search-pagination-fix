import { describe, it } from "mocha";
import { expect } from "chai";
import { retrievePagesize, createCorrecURL } from "../src/paginationParametersHelpers.js";

describe("retrievePerPage", function() {
	it("returns a default when nothing is present in the URL", function() {
		const url = new URL("https://example.com/");

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(global.window as any) = { location: url };

		const result = retrievePagesize();

		expect(result).to.equal(15, "default when no value is specified in the URL should be 15");
	});

	it("retrieves the page size from the URL", function() {
		const url = new URL("https://example.com/?pagesize=30");

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(global.window as any) = { location: url };

		const result = retrievePagesize();

		expect(result).to.equal(30);
	});
});

describe("createCorrecURL", function() {
	it("sets page size if not there", function() {
		const result = createCorrecURL("https://example.com/search", 30);

		expect(result.searchParams.get("pagesize")).to.equal("30");
	});

	it("overrides the page size", function() {
		const result = createCorrecURL("https://example.com/search?pagesize=15", 30);

		expect(result.searchParams.get("pagesize")).to.equal("30");
	});

	it("preserves the base URL", function() {
		const result = createCorrecURL("https://example.com/search?pagesize=15", 30);

		expect(result.origin).to.equal("https://example.com");
	});

	it("preserves the path", function() {
		const result = createCorrecURL("https://example.com/search?pagesize=15", 30);

		expect(result.pathname).to.equal("/search");
	});
});
