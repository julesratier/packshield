
interface ProductHeaderProps {
  title: string;
  description: string;
}

// This component is no longer used as we've integrated the header directly into the Products page
const ProductHeader = ({ title, description }: ProductHeaderProps) => {
  return null;
};

export default ProductHeader;
