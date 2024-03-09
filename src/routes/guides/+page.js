/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
export async function load({ fetch }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const items = await res.json();
	if(!res.ok) return error({ status: res.status, message: items.message });
	return { items };
}