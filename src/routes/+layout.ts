import planets from '$lib/data/planets.json';
import products from '$lib/data/products.json';

export const prerender = true;

export async function load() {
  return { planets };
}
