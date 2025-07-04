// --- Site Search Index ---
const SITE_INDEX = [
	{ title: "Interface Overhaul", url: "modals/interface-modal.html" },
	{
		title: "Properties Browser: New Properties",
		url: "modals/properties-browser-modal.html",
	},
	{
		title: "Divide with Multiple Planes",
		url: "modals/divide-with-multiple-planes-modal.html",
	},
	{ title: "Copy Groups", url: "modals/copy-groups-modal.html" },
	{
		title: "Boundary Conditions Across Stages",
		url: "modals/boundary-conditons-modal.html",
	},
	{ title: "Append Elements", url: "modals/append-elements-modal.html" },
	{
		title: "Anisotropic Materials",
		url: "modals/anisotropic-materials-modal.html",
	},
	{ title: "Create Link Member", url: "modals/create-link-member-modal.html" },
	{ title: "Equations", url: "modals/equations-modal.html" },
	{
		title: "Import Materials and Styles",
		url: "modals/import-materials-and-styles-modal.html",
	},
	{
		title: "Replace Interface ID",
		url: "modals/replace-interface-id-modal.html",
	},
	{
		title: "Other Utilities & Features",
		url: "modals/other-utilities-modal.html",
	},
];

// Fetch and extract a snippet from a modal HTML file, and return both the text and the snippet
async function fetchModalContentAndSnippet(url, query, windowSize = 20) {
	try {
		const resp = await fetch(url);
		if (!resp.ok) return { text: "", snippet: "(Could not load preview)" };
		const html = await resp.text();
		// Remove scripts/styles, get text content
		const div = document.createElement("div");
		div.innerHTML = html;
		div.querySelectorAll("script,style").forEach((el) => el.remove());
		const text = div.textContent.replace(/\s+/g, " ").trim();
		return { text, snippet: getSnippet(text, query, windowSize) };
	} catch (e) {
		return { text: "", snippet: "(Could not load preview)" };
	}
}

function getSnippet(content, query, windowSize = 20) {
	if (!query)
		return content.slice(0, 120) + (content.length > 120 ? "..." : "");
	const lcContent = content.toLowerCase();
	const lcQuery = query.toLowerCase();
	const idx = lcContent.indexOf(lcQuery);
	if (idx === -1)
		return content.slice(0, 120) + (content.length > 120 ? "..." : "");
	// Find word boundaries
	const words = content.split(/\s+/);
	let charCount = 0,
		startWord = 0,
		endWord = words.length - 1;
	for (let i = 0; i < words.length; i++) {
		if (charCount + words[i].length >= idx) {
			startWord = Math.max(0, i - windowSize);
			endWord = Math.min(words.length - 1, i + windowSize);
			break;
		}
		charCount += words[i].length + 1;
	}
	const snippet = words.slice(startWord, endWord + 1).join(" ");
	return (
		(startWord > 0 ? "... " : "") +
		snippet +
		(endWord < words.length - 1 ? " ..." : "")
	);
}

function highlightQuery(snippet, query) {
	if (!query) return snippet;
	const re = new RegExp(
		"(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
		"ig"
	);
	return snippet.replace(re, "<mark>$1</mark>");
}

async function showResults(results, query, modalContents) {
	const resultsList = document.getElementById("site-search-results");
	resultsList.innerHTML = "";
	if (results.length === 0) {
		resultsList.style.display = "none";
		return;
	}
	results.forEach((item, i) => {
		const li = document.createElement("li");
		li.className =
			"list-group-item list-group-item-action d-flex flex-row align-items-start site-search-result-item";
		li.tabIndex = 0;

		const titleDiv = document.createElement("div");
		titleDiv.className = "site-search-result-title fw-semibold";
		titleDiv.textContent = item.title;

		const previewDiv = document.createElement("div");
		previewDiv.className = "site-search-result-preview text-muted small ms-3";
		previewDiv.innerHTML = highlightQuery(modalContents[i].snippet, query);

		li.appendChild(titleDiv);
		li.appendChild(previewDiv);

		li.addEventListener("click", () => {
			window.location.href = item.url;
		});
		li.addEventListener("keydown", (e) => {
			if (e.key === "Enter") window.location.href = item.url;
		});
		resultsList.appendChild(li);
	});
	resultsList.style.display = "block";
}

function fuzzyMatch(query, text) {
	query = query.toLowerCase();
	text = text.toLowerCase();
	let qi = 0,
		ti = 0;
	while (qi < query.length && ti < text.length) {
		if (query[qi] === text[ti]) qi++;
		ti++;
	}
	return qi === query.length;
}

async function doSearch() {
	const searchInput = document.getElementById("site-search");
	const resultsList = document.getElementById("site-search-results");
	const query = searchInput.value.trim();
	if (!query) {
		showResults([], query, []);
		return;
	}
	// Fetch all modal contents in parallel
	const modalContents = await Promise.all(
		SITE_INDEX.map((item) => fetchModalContentAndSnippet(item.url, query))
	);
	// Match on title or modal content
	let results = SITE_INDEX.filter(
		(item, i) =>
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			modalContents[i].text.toLowerCase().includes(query.toLowerCase())
	);
	let filteredModalContents = SITE_INDEX.map((item, i) => modalContents[i]);
	// Only keep modalContents for matched results
	filteredModalContents = SITE_INDEX.map((item, i) => ({ item, idx: i }))
		.filter(
			({ item, idx }) =>
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				modalContents[idx].text.toLowerCase().includes(query.toLowerCase())
		)
		.map(({ idx }) => modalContents[idx]);
	if (results.length < 5) {
		// Add fuzzy matches if not enough substring matches
		const fuzzy = SITE_INDEX.map((item, i) => ({ item, idx: i })).filter(
			({ item, idx }) =>
				(fuzzyMatch(query, item.title) ||
					fuzzyMatch(query, modalContents[idx].text)) &&
				!results.includes(item)
		);
		results = results.concat(fuzzy.map(({ item }) => item));
		filteredModalContents = filteredModalContents.concat(
			fuzzy.map(({ idx }) => modalContents[idx])
		);
	}
	// Limit to 8 results
	await showResults(
		results.slice(0, 8),
		query,
		filteredModalContents.slice(0, 8)
	);
}

function setupElsQsgSearch() {
	const searchInput = document.getElementById("site-search");
	const searchBtn = document.getElementById("site-search-btn");
	const resultsList = document.getElementById("site-search-results");
	if (!searchInput || !searchBtn || !resultsList) return;

	searchInput.addEventListener("input", doSearch);
	searchBtn.addEventListener("click", doSearch);
	searchInput.addEventListener("focus", doSearch);
	searchInput.addEventListener("blur", () => {
		setTimeout(() => {
			resultsList.style.display = "none";
		}, 200);
	});

	// Keyboard navigation for results
	searchInput.addEventListener("keydown", function (e) {
		if (e.key === "ArrowDown") {
			const first = resultsList.querySelector("li");
			if (first) first.focus();
		} else if (e.key === "Enter") {
			const first = resultsList.querySelector("li");
			if (first) {
				window.location.href = SITE_INDEX.find(
					(item) => item.title === first.textContent
				).url;
			}
		}
	});
	resultsList.addEventListener("keydown", function (e) {
		if (e.key === "ArrowDown") {
			if (e.target.nextSibling) e.target.nextSibling.focus();
		} else if (e.key === "ArrowUp") {
			if (e.target.previousSibling) e.target.previousSibling.focus();
			else searchInput.focus();
		}
	});
}

document.addEventListener("DOMContentLoaded", setupElsQsgSearch);
