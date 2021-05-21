<div><img src="https://pbs.twimg.com/profile_images/1121395911849062400/7exmJEg4.png" alt="svelte logo" width="100px"/></div>


<h1  style="border: 0; margin: 5px;">svelte-webcomponents</h1>

[![Website](https://img.shields.io/website/https/layer5.io/meshery.svg)](https://xenodochial-lumiere-4883d3.netlify.app/)
[![v1.0.0](https://img.shields.io/badge/version-v1.0.0-yellow.svg?style=flat&logo=)](https://github.com/tal1992/svelte-webcomponents)  [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/tal1992/svelte-webcomponents/blob/main/LICENSE) [![Powered By Svelte](https://img.shields.io/badge/powered%20by-svelte-FF3C02.svg?style=flat&logo=svelte)](https://svelte.dev/) [![Language: Javascript](https://img.shields.io/badge/language-javascript-blue.svg?style=flat&logo=javascript)](https://www.javascript.com)
<img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="20"/></a>

[![Twitter Follow](https://img.shields.io/twitter/follow/layer5.svg?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=iamtalvinder)

<h5><p><i>If you’re using web-components or if you like the project, please <a href="https://github.com/tal1992/svelte-webcomponents/stargazers">★</a> this repository to show your support! 🤩</i></p></h5>

<p>The world's most easiest, ready to use template for web-components.</p>

## About 📚
A ready to use project template to build custom elements (web components) with Svelte 3 with support and examples for web components, jest, sass, nested components with props, eslinting, stylelinting, Github actions and custom events from shadow-DOM to real-DOM etc.

## Installation 🚀

Run below command inside the working folder

```bash
npx degit tal1992/svelte-webcomponents

```
## Installation and build 📌

```bash
📦 npm install 

🔨developer mode -> npm run dev
🔨 production mode -> npm run build
```

## Using web-components in HTML 📌

```html
  <component-name propOne="Lorem" propTwo="Ipsum"></component-name>
```

## Using web-components as a widget 📌

```javascript
function addScript(src) {
  var s = document.createElement("script");
  s.setAttribute("src", src);
  document.querySelector("body").appendChild(s);
}
//replace the url with your hosted path of bundle.js
addScript("https://loremipsumdolarsir/build/bundle.js", "", "");
```

Now that your bundle.js file is included in the html , we can use the web components.

```javascript
      let foo = document.createElement('component-foo');
      let header = document.getElementByTagName('header');
      foo.setAttribute('propOne', "lorem");
      foo.setAttribute('propTwo', "Ipsum");
      // please replace header with the element where you want to add your custom element.
      header.parentNode.replaceChild(foo, header);
```

## Nested Custom Elements 📌

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

## Writing SCSS inside svelte 📌

#### This template comes with in-built support for scss.

##### foo.svelte
```svelte
<style lang="scss">
    h2 {
        padding: 20px;
    }
</style>
```

## Test cases 📌
Write test cases inside __tests __ folder

Note : Dont treat webcomponents as a special case for testing, they should be tested as normal svelte components.

```javascript
import { render } from "@testing-library/svelte";
import App from "../src/App.svelte";

describe("App component", () => {
  test("should render component correctly", () => {
    const { container } = render(App);

    expect(container).toContainHTML("<body><div><h1>Hello from svelte</h1></div></body>");
  });
});
```

Use normal component name and not the webcomponent name in the test case.

```bash
npm run test
```

## ESLINT 📌


```bash
npm run lintjs
```

## Style lint 📌


```bash
npm run lintcss
```

### Event propagation from Shadow DOM to Real DOM 📌

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
