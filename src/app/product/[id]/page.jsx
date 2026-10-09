
import { notFound } from "next/navigation";
import SingleProduct from "@/components/SingleProduct";

const ProductPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return <SingleProduct product={product} />;
};

export default ProductPage;

