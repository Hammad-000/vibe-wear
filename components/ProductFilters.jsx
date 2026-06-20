import { useMemo } from 'react';

function useProductFilters(products, { search, selectedCategory, minRating, sortBy }) {
  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    return products
      .filter((product) => {
        const titleText = product.name || product.title || '';
        const matchesSearch = titleText.toLowerCase().includes(search.toLowerCase());

        const productCat = product.category?.name || product.category || '';
        const matchesCategory =
          selectedCategory === 'All' ||
          productCat.toLowerCase() === selectedCategory.toLowerCase();

        // Rating Filter
        const matchesRating = (product.rating || 5) >= minRating;

        return matchesSearch && matchesCategory && matchesRating;
      })
      .sort((a, b) => {
        if (sortBy === 'PRICE_LOW') return a.price - b.price;
        if (sortBy === 'PRICE_HIGH') return b.price - a.price;
        if (sortBy === 'RATING') return (b.rating || 0) - (a.rating || 0);
        return 0;
      });
  }, [products, search, selectedCategory, minRating, sortBy]);

  return filteredProducts;
}

export default useProductFilters;