import AddToCart from "@/components/AddToCart";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    url: string;
  };
};

async function ProductPage({ searchParams: { url } }: Props) {
  const product = await fetchProduct(url);

  console.log(product);
  console.log(product?.content.specifications);

  if (!product) return notFound();
  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        {product.content.images.map((image, i) => (
          <Image
            key={image}
            alt={product.content.title + " " + i}
            src={image}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
      <Carousel
        opts={{ loop: true }}
        className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.content.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-10">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image
                    key={image}
                    alt={product.content.title + " " + i}
                    src={image}
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex-1 w-full border rounded-lg space-y-5 p-5">
        <h1 className="font-bold text-2xl">{product.content.title}</h1>
        <div className="space-x-2">
          {product.content.breadcrumbs.map((breadcrumb, i) => (
            <Badge
              key={breadcrumb + i}
              className={breadcrumb}
              variant="outline"
            >
              {breadcrumb}
            </Badge>
          ))}
        </div>
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: product.content.description }}
            className="py-5"
          ></p>
        </div>
        {product.content.rating && (
          <p className="text-sm text-yellow-500">
            {product.content.rating.rating}★
            <span className="text-gray-500 ml-2">
              ({product.content.rating.count} reviews)
            </span>
          </p>
        )}

        <p className="font-bold text-2xl">
          {product?.content.currency} {product?.content.price}
        </p>

        {/* Add to cart button */}
        <AddToCart product={product.content} />

        <hr />

        <h3 className="font-bold pt-10 text-xl">Specifications</h3>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Specification</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {product.content.specifications.map((specification) => (
              <TableRow key={specification.key}>
                <TableCell className="font-bold">{specification.key}</TableCell>
                <TableCell className="text-right">
                  {specification.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductPage;
