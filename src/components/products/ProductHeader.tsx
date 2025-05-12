
interface ProductHeaderProps {
  title: string;
  description: string;
}

const ProductHeader = ({ title, description }: ProductHeaderProps) => {
  return (
    <div className="bg-packshield-lightGrey py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-packshield-navy text-center">{title}</h1>
        <p className="text-packshield-grey text-center mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductHeader;
