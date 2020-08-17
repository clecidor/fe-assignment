export async function fetchProducts() {
  const data = await fetch('https://demo3211013.mockable.io/ajmad');
  return data.json();
}

export default fetchProducts;