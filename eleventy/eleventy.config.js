export default function (eleventyConfig) {
    // Output directory: _site

    eleventyConfig.addPassthroughCopy({ "static": "/" });
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addGlobalData("permalink", () => {
        return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
    });

    // Comics collection
    eleventyConfig.addCollection("comics", (collectionApi) => {
        const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
        return collectionApi.getFilteredByTag("comics").sort((a, b) =>
            collator.compare(a.fileSlug, b.fileSlug)
        );
    });

    // Neighbor URL filters
    eleventyConfig.addFilter("prevUrl", (collection, url) => {
        const i = collection.findIndex((p) => p.url === url);
        return i > 0 ? collection[i - 1].url : null;
    });

    eleventyConfig.addFilter("nextUrl", (collection, url) => {
        const i = collection.findIndex((p) => p.url === url);
        return i >= 0 && i < collection.length - 1 ? collection[i + 1].url : null;
    });

    return {
        dir: {
            output: "../docs"
        }
    }

};