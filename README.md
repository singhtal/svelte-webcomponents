<div align="center"><img src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4.png" alt="svelte logo" width="100px"/></div><br>
<p align="center">
    <a href="https://twitter.com/intent/tweet?text=Svelte-webcomponents: A ready to use project template to build custom elements (web components) with Svelte 3 with support and examples for custom-elements, jest, sass, nested components with props, eslinting, stylelinting, propagating custom events to read-DOM etc."><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="20"/></a>
</p>

<h1 align="center" style="border: 0; margin: 5px;">svelte-webcomponents</h1>
<p align="center">The world's most easiest, ready to use template for web-components.</p><br>

## About
A ready to use project template to build custom elements (web components) with Svelte 3 with support and examples for web components, jest, sass, nested components with props, eslinting, stylelinting, propagating custom events to read-DOM etc.

## Installation

Run below command inside the working folder

```bash
npx degit tal1992/svelte-webcomponents

```
## Usage

```javascript
npm install

developer mode -> npm run dev
production mode -> npm run build
```

## Nested Custom Elements

#### Register your custom-element inside App.svelte

##### App.svelte
```
 import foo from './foo.svelte';
 import bar from './bar.svelte';
```

#### No need to import the custom element inside parent declared component, use custom tag names while nesting.

##### Parent.svelte
```
<svelte:options tag="component-parent"></svelte:options>

<div class="parent">
    <component-foo name="John" background="orange"></component-foo>
    <component-bar name="Doe" background="lightgreen"></component-bar>
</div>

```

## Writing SCSS inside svelte 

#### This template comes with in-built support for scss.

##### foo.svelte
```
<style lang="scss">
    h2 {
        padding: 20px;
    }
</style>
```

## Test cases 
Write test cases inside __tests __ folder

```javascript
npm run test
```

## ESLINT


```javascript
npm run lintjs
```

## Style lint


```javascript
npm run lintcss
```

### Event propagation from Shadow DOM to Real DOM

Foo.svelte (web component)
```
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

```
	window.onload = function() {
		let myelem = document.querySelectorAll("component-foo");

		myelem.forEach(function(elem) {
		elem.addEventListener("customclick", e => {
			alert(e.detail+' clicked');
		});
		});
	}
</script>
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
