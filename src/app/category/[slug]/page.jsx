
import CategoryProducts from "../../../components/CategoryProducts";

const CategoryPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`
  );

  const products = await res.json();

  return <CategoryProducts products={products} />;
};

export default CategoryPage;

