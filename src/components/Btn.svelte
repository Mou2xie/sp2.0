<script>
    import arrowright from "../assets/arrowright.svg?url";
    const { children, to = "/" } = $props();

    const handleClick = () => {
        window.location.href = to;
    };
</script>

<button
    class=" text-text-main border border-[#CBCED1] w-40 h-10 rounded-full flex items-center group md:w-36 hover:border-blue-main"
    onclick={handleClick}
>
    <div class=" flex-grow text-center text-[1.1rem] group-hover:text-blue-main">
        {@render children?.()}
    </div>
    <div
        class=" w-8 h-8 bg-grey-light rounded-full mr-1 flex justify-center items-center md:group-hover:bg-blue-main transition duration-200 ease-in-out"
    >
        <img class=" w-[1.0rem] " src={arrowright} alt="arrow" />
    </div>
</button>

<style>
    * {
        font-family: "Lato", serif;
    }
</style>
