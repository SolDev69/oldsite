<!-- Code that applies to every page under /downloads -->
<!-- Refer to src/routes/+layout.svelte for explanation of <slot /> -->
<!-- The code in that layout file also applies here -->

<slot />

<style>
    :global(.note, ul) {
        padding-left: 5ch;
    }
</style>