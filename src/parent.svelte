<svelte:options tag="component-parent"></svelte:options>

<div class="parent">
    <component-foo name="John" background="orange"></component-foo>
    <component-bar name="Doe" background="lightgreen"></component-bar>
</div>

<style lang="scss">
    .parent {
        padding: 50px;
        height: 200px;
        background-color: lightcyan;
        margin: 50px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        text-align: center;
        align-items: stretch;
        font-family: Arial;

        component-foo, component-bar {
            align-self: center;
            flex: 0 50%;
        }
    }
</style>

