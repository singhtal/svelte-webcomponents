<script>
    export let name;
    export let background;
</script>

<svelte:options tag="component-foo"></svelte:options>

<h2 style="background: {background}">
    Hello i am 
    <p>{name}</p>
</h2>

<style lang="scss">
    h2 {
        padding: 20px;
    }
</style>