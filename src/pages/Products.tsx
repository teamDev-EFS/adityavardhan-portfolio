import ProductCard from '../components/sections/ProductCard';
import SectionHeader from '../components/ui/SectionHeader';
import { products } from '../data/products';

const Products = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Products" title="Systems conceived with founder-grade product logic." description="Each build is shaped around a real constraint: fragmented workflows, manual execution, poor architecture, or weak leverage. The response is never surface-level UI—it is system design with clear business intent." />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;