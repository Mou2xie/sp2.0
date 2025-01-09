<script>
    const { children, to = "/" } = $props();

    const handleClick = () => {
        console.log("clicked");
        window.location.href = to;
    };
</script>

<button
    onclick={handleClick}
    class="px-5 py-2 border-2 font-medium border-blue-main text-blue-main rounded-full hover:bg-blue-main hover:text-white transition duration-200 ease-in-out"
>
    {@render children?.()}
</button>

<style>
    button {
        font-family: "lato", sans-serif;
    }
</style>
