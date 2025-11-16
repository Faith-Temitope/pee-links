import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { products, categories, manufacturers } from '../../data/products';
import ProductCard from '../ProductCard';

interface ShopProps {
  addToCart: (product: any, quantity: number) => void;
}

export default function Shop({ addToCart }: ShopProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedManufacturer, setSelectedManufacturer] = useState('All Manufacturers');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Get params from URL
    const categoryParam = searchParams.get('category');
    const manufacturerParam = searchParams.get('manufacturer');
    const searchParam = searchParams.get('search');
    const filterParam = searchParams.get('filter');

    if (categoryParam) setSelectedCategory(categoryParam);
    if (manufacturerParam) setSelectedManufacturer(manufacturerParam);
    if (searchParam) setSearchQuery(searchParam);

    let filtered = [...products];

    // Filter by upcoming products
    if (filterParam === 'upcoming') {
      filtered = filtered.filter(p => p.isUpcoming);
    } else {
      // Apply category filter
      if (categoryParam && categoryParam !== 'All Products') {
        filtered = filtered.filter(p => p.category === categoryParam);
      } else if (selectedCategory !== 'All Products') {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }

      // Apply manufacturer filter
      if (manufacturerParam && manufacturerParam !== 'All Manufacturers') {
        filtered = filtered.filter(p => p.manufacturer === manufacturerParam);
      } else if (selectedManufacturer !== 'All Manufacturers') {
        filtered = filtered.filter(p => p.manufacturer === selectedManufacturer);
      }

      // Apply search filter
      const query = searchParam || searchQuery;
      if (query) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        );
      }
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return a.name.localeCompare(b.name);
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedManufacturer, sortBy, searchQuery, searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category !== 'All Products') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const handleManufacturerChange = (manufacturer: string) => {
    setSelectedManufacturer(manufacturer);
    const params = new URLSearchParams(searchParams);
    if (manufacturer !== 'All Manufacturers') {
      params.set('manufacturer', manufacturer);
    } else {
      params.delete('manufacturer');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSelectedCategory('All Products');
    setSelectedManufacturer('All Manufacturers');
    setSortBy('name');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'All Products' ||
    selectedManufacturer !== 'All Manufacturers' ||
    searchQuery ||
    searchParams.get('filter') === 'upcoming';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 style={{ color: '#444C5E' }}>
            {searchParams.get('filter') === 'upcoming' ? 'Upcoming Products' : 'Shop All Products'}
          </h1>
          <p className="opacity-70">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg"
          style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div
          className={`${
            showFilters ? 'block' : 'hidden'
          } lg:block lg:w-64 flex-shrink-0`}
        >
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 style={{ color: '#444C5E' }}>Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm hover:opacity-80"
                  style={{ color: '#E4CF8B' }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block mb-3" style={{ color: '#444C5E' }}>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none"
                style={{ borderColor: '#E4CF8B' }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Manufacturer Filter */}
            <div className="mb-6">
              <label className="block mb-3" style={{ color: '#444C5E' }}>
                Manufacturer
              </label>
              <select
                value={selectedManufacturer}
                onChange={(e) => handleManufacturerChange(e.target.value)}
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none"
                style={{ borderColor: '#E4CF8B' }}
              >
                {manufacturers.map(manufacturer => (
                  <option key={manufacturer} value={manufacturer}>
                    {manufacturer}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block mb-3" style={{ color: '#444C5E' }}>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none"
                style={{ borderColor: '#E4CF8B' }}
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl mb-4" style={{ color: '#444C5E' }}>No products found</p>
              <p className="opacity-70 mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-lg"
                style={{ backgroundColor: '#E4CF8B', color: '#444C5E' }}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
