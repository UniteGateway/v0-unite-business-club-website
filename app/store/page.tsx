import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';

export default function Store() {
  const products = [
    {
      name: 'Premium Business Card Set',
      price: '$45',
      rating: 4.8,
      reviews: 234,
      image: '🎨',
      seller: 'PrintPro',
    },
    {
      name: 'Executive Meeting Planner',
      price: '$29',
      rating: 4.9,
      reviews: 156,
      image: '📅',
      seller: 'PlanSmart',
    },
    {
      name: 'Digital Marketing Guide',
      price: '$35',
      rating: 4.7,
      reviews: 89,
      image: '📚',
      seller: 'Digital Masters',
    },
    {
      name: 'Business Strategy Workbook',
      price: '$39',
      rating: 4.6,
      reviews: 124,
      image: '📖',
      seller: 'StrategyHub',
    },
    {
      name: 'Networking Event Kit',
      price: '$55',
      rating: 4.9,
      reviews: 198,
      image: '🎁',
      seller: 'EventPro',
    },
    {
      name: 'Company Logo Design',
      price: '$199',
      rating: 5.0,
      reviews: 56,
      image: '🎭',
      seller: 'Design Experts',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Member Store"
          title="Curated Products & Services"
          description="Discover quality products and services from trusted sellers in our exclusive member marketplace."
          backgroundGradient={true}
        />

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                <span>Filters</span>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['All', 'Services', 'Products', 'Digital', 'Supplies'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center">
                    <div className="text-6xl">{product.image}</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.seller}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button size="sm" asChild>
                        <Link href={`/store/${index}`}>
                          <ShoppingCart size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline">
                Load More Products
              </Button>
            </div>
          </div>
        </section>

        {/* Seller Spotlight */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Sellers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'PrintPro', rating: '4.9', products: '145' },
                { name: 'DesignExperts', rating: '5.0', products: '87' },
                { name: 'ConsultHub', rating: '4.8', products: '56' },
                { name: 'ServicePlus', rating: '4.7', products: '203' },
              ].map((seller, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">🏪</div>
                  <h3 className="font-bold text-gray-900 mb-2">{seller.name}</h3>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{seller.products} products</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Visit Store
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Seller */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Reach thousands of qualified business customers on our platform
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
              <Link href="/contact?type=seller">Become a Seller</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
