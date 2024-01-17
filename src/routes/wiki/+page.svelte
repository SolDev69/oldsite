<svelte:head>
    <title>NeoKru | Wiki</title>
</svelte:head>

<h1>Wiki</h1>
<h2>How to Install (Jarmods)</h2>
<h3>For MultiMC-based launchers</h3>
<p>
    Create a new instance using the version that you wish to use and make sure
    all resources needed are downloaded. Edit that instance and add the mod you
    want to install as a jarmod using the "Add to Minecraft.jar" feature.
</p>
<h3>For inf-20100630</h3>
<p>
    Also install <a
        href="https://repo1.maven.org/maven2/systems/manifold/manifold-all/2023.1.3/manifold-all-2023.1.3.jar"
        >Manifold</a
    >
    as a jarmod for inf-20100630 BigInteger by adding it the same way.
</p>
<h3>For the official Minecraft Launcher (current version) and PojavLauncher</h3>
<p>Navigate to your .minecraft folder and open versions. Make sure you have already
ran the version that the mod you want to install is based on. Make a copy of that
folder in your versions directory and rename it and the files inside to something
like <code>version-mod</code> where <code>version</code> is the Minecraft version base you are using and
<code>mod</code> is the mod you are installing (ie: 64bit, BigInt, etc). Edit the json and delete
everything between "client" and (but not including) "server". Then find where it
says <code>"id": version</code> and change the version to what you named the files previously.
Save everything and reopen your launcher. Please note, 1.3.2-BigInteger will likely
not work on PojavLauncher without patching.</p>

<!-- TODO: Add images -->

<style lang="scss">
    h3::after {
        display: inline;
        content: ":";
    }

    p {
        text-align: justify;
    }

    // TODO: Add buttons to copy the link to a section
    // h1, h2, h3 {
    //     &::before {
    //         display: inline;
    //         content: "# ";
    //         opacity: 0.6;
    //     }
    // }
</style>
