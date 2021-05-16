<script>
    import { get_current_component } from "svelte/internal";

    export let name;
    export let background;

    const thisComponent = get_current_component();

    const dispatchEvent = (name, detail) => {
        thisComponent.dispatchEvent(new CustomEvent(name, {
        detail,
        composed: true, // propagate to the Real DOM, handled in index.html
        }));
    };

   function handleClick(event) {
       event.preventDefault();
      dispatchEvent("customclick", name)
   }    

</script>

<svelte:options tag="component-bar"></svelte:options>

<h2 style="background: {background}">
    Hello i am 
    <p>{name}</p>
</h2>
<button on:click={event => handleClick(event)}>Click me</button>


<style lang="scss">
    h2 {
        padding: 20px;
    }
</style>