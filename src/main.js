import App from './App.svelte';

new App({
	target: document.body,  //only required option
	props: {                // allows app to expose props
		name: 'world'
	}
});