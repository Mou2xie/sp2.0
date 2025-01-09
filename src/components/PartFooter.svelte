<script>
    import Logo from "./Logo.svelte";

    const { part = 1 } = $props();
</script>

<div
    class=" flex-shrink-0 h-[100px] bg-grey-light flex flex-col items-center justify-center text-text-secondary md:h-[130px]"
>
    <Logo />
    <p class="mt-2 text-[0.7rem] md:text-sm">
        Copyright © 2025 Speaking Pass. All Rights Reserved
    </p>
    <p class="mt-1 text-[0.7rem] md:text-sm">
        Designed and Developed By Jed Xie
    </p>
</div>

<style>
    p {
        font-family: "lato", sans-serif;
    }
</style>
