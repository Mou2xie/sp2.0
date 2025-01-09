<script>
    import Logo from "./Logo.svelte";
    import hamburger from "../assets/hamburger.svg?url";
    import { navlinks } from "../assets/navlinks";

    const { route = "" } = $props();
    let isOpenMenu = $state(false);

    const handleClick = () => {
        isOpenMenu = !isOpenMenu;
    };
</script>

<div
    class=" flex-shrink-0 h-[50px] flex items-center px-5 md:h-[60px] md:px-28"
>
    <div
        class="w-full flex justify-between items-center md:grid md:grid-cols-3"
    >
        <Logo />
        <div class=" hidden text-center md:block">
            <ul>
                {#each navlinks as { name, href, targetRoute }}
                    <a
                        {href}
                        class={[
                            "text-text-main",
                            "text-[1.2rem]",
                            " font-medium ",
                            "hover:text-blue-main",
                            "transition duration-200",
                            "ease-in-out",
                        ]}
                    >
                        <li
                            class={[
                                "inline-block",
                                "px-4",
                                {
                                    " text-blue-main":
                                        targetRoute.includes(route),
                                },
                            ]}
                        >
                            {name}
                        </li>
                    </a>
                {/each}
            </ul>
        </div>
        <button onclick={handleClick} class=" md:hidden">
            <img src={hamburger} alt="hamburger-menu" class="w-7 h-7" />
        </button>
    </div>
</div>

{#if isOpenMenu}
    <div class=" text-text-main bg-grey-light font-medium">
        {#each navlinks as { name, href, targetRoute }}
            <a {href} class=" block">
                <div
                    class={[
                        "py-4",
                        " text-center",
                        " text-[1.0rem]",
                        { " text-blue-main": targetRoute.includes(route) },
                    ]}
                >
                    {name}
                </div>
            </a>
        {/each}
    </div>
{/if}

<style>
    div {
        font-family: "Lato", sans-serif;
    }
</style>
