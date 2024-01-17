<!-- Code that applies to every single page -->
<!-- <slot /> is a placeholder, it gets replaced by the html of the page currently being viewed -->

<script>
    import "@material/web/iconbutton/outlined-icon-button";
    import "@material/web/icon/icon";

    let navShown = false;
</script>

<header>
    <nav>
        <a class="brand" href="/neokru/">NeoKru</a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <md-outlined-icon-button aria-label="Toggle navigation" on:click={() => (navShown = !navShown)}>
            <!-- https://fonts.google.com/icons -->
            <md-icon
                ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
                ></md-icon
            >
        </md-outlined-icon-button>
        <ul class="links" class:shown={navShown}>
            {#each [["/", "Home"], ["/downloads", "Mods"], ["/wiki", "Wiki"]] as [href, display]}
                <li><a {href}>{display}</a></li>
            {/each}
        </ul>
    </nav>
</header>
<main><slot /></main>

<style lang="scss">
    // Code for the navbar
    $space: 4ch;

    header {
        display: contents;
    }

    nav {
        position: sticky;
        top: 0px;
        display: grid;
        align-items: center;
        column-gap: $space;
        padding: 1ch 2ch;
        background: var(--md-sys-color-surface-container-high);
        min-height: 5svh;

        grid-template: {
            areas: "brand links .";
            columns: auto auto 1fr;
        }

        * {
            color: var(--md-sys-color-on-surface);
        }

        a {
            text-decoration: none;

            &:hover,
            &:focus,
            &:focus-within,
            &:focus-visible {
                color: var(--md-sys-color-on-surface-variant);
            }
        }

        @each $area in ("brand", "menu", "links") {
            :global(& .#{$area}) {
                grid-area: unquote($area);
            }
        }
    }

    .brand {
        font-weight: bolder;
        font-size: 1.4rem;
        grid-area: brand;
    }

    md-outlined-icon-button {
        display: none;
        justify-self: end;
        grid-area: menu;
    }

    .links {
        list-style-type: none;
        display: flex;
        padding: 0;
        column-gap: $space;
        grid-area: links;

        li {
            display: contents;
        }
    }

    @media (max-width: 800px) {
        nav {
            grid-template: {
                areas: "brand menu" "links links";
                columns: 1fr auto;
                rows: auto min-content;
            }
        }

        md-outlined-icon-button {
            display: revert-layer;
        }

        .links {
            flex-direction: column;
            row-gap: #{$space * 0.5};

            &:not(.shown) {
                display: none;
            }
        }
    }

    // Code for everything else
    // :global() means the css applies to all elements in the output html instead of only applying to elements in this file
    main {
        padding: 2ch;
    }

    :global(code) {
        background: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface);
        padding: 0 0.25ch;
    }

    :global(body) {
        background: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface);
    }

    :global(a) {
        color: var(--md-sys-color-primary);
    }

    :global(:where(ul, ol, li)) {
        padding: revert;
    }
</style>
