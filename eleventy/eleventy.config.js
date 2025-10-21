import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
    // Output directory: _site

    eleventyConfig.addPassthroughCopy({ "static": "/" });
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addGlobalData("permalink", () => {
        return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
    });

    eleventyConfig.setLibrary("md", markdownIt({html: true}).use(markdownItAttrs))

    // Index page

    eleventyConfig.addPairedShortcode("panel", (content, layout="full", extra="") => {
        // remove p tag from images
        return `<section class="panel" data-layout="${layout}">
            <div class="content ${extra}">${content}</div>
         </section>`
    })

    eleventyConfig.addPairedShortcode(
        "col",
        (content, extra = "") => `<div class="col ${extra}">${content}</div>`
    );
    // Comics

    eleventyConfig.addCollection("comics", (collectionApi) => {
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
        return collectionApi.getFilteredByTag("comics").sort((a, b) =>
            collator.compare(a.fileSlug, b.fileSlug)
        );
    });

    // Comics - Neighbor URL filters
    eleventyConfig.addFilter("prevUrl", (collection, url) => {
        const i = collection.findIndex((p) => p.url === url);
        return i > 0 ? collection[i - 1].url : null;
    });

    eleventyConfig.addFilter("nextUrl", (collection, url) => {
        const i = collection.findIndex((p) => p.url === url);
        return i >= 0 && i < collection.length - 1 ? collection[i + 1].url : null;
    });
};