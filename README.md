<div><img src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4.png" alt="svelte logo" width="100px"/></div>


<h1  style="border: 0; margin: 5px;">svelte-webcomponents      <a href="https://twitter.com/intent/tweet?text=A ready to use project template to build custom elements (web components) with Svelte 3 with support and examples for custom-elements, jest, sass, nested components with props, eslinting, stylelinting, propagating custom events to read-DOM etc. https://github.com/tal1992/svelte-webcomponents"><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="20"/></a></h1>
<p>The world's most easiest, ready to use template for web-components.</p>

## About
A ready to use project template to build custom elements (web components) with Svelte 3 with support and examples for web components, jest, sass, nested components with props, eslinting, stylelinting, propagating custom events from shadow-DOM to real-DOM etc.

## Installation

Run below command inside the working folder

```bash
npx degit tal1992/svelte-webcomponents

```
## Usage

```bash
npm install

developer mode -> npm run dev
production mode -> npm run build
```

## Nested Custom Elements

#### Register your custom-element inside App.svelte

##### App.svelte
```javascript
 import foo from './foo.svelte';
 import bar from './bar.svelte';
```

#### No need to import the custom element inside parent declared component, use custom tag names while nesting.

##### Parent.svelte
```svelte
<svelte:options tag="component-parent"></svelte:options>

<div class="parent">
    <component-foo name="John" background="orange"></component-foo>
    <component-bar name="Doe" background="lightgreen"></component-bar>
</div>

```

## Writing SCSS inside svelte 

#### This template comes with in-built support for scss.

##### foo.svelte
```svelte
<style lang="scss">
    h2 {
        padding: 20px;
    }
</style>
```

## Test cases 
Write test cases inside __tests __ folder

```bash
npm run test
```

## ESLINT


```bash
npm run lintjs
```

## Style lint


```bash
npm run lintcss
```

### Event propagation from Shadow DOM to Real DOM

Foo.svelte (web component)
```svelte
<script>
    import { get_current_component } from "svelte/internal";
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

<svelte:options tag="component-foo"></svelte:options>

<button on:click={event => handleClick(event)}>Click me</button>

```

Inside Real DOM

```html
<script>
	window.onload = function () {
	  let myelem = document.querySelectorAll('component-foo');

	  myelem.forEach(function (elem) {
	    elem.addEventListener('customclick', (e) => {
	      alert(e.detail + ' clicked');
	    });
	  });
	};
</script>
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
