
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Specification {
  [key: string]: string;
}

interface ProductTabsProps {
  specifications: Specification;
}

const ProductTabs = ({ specifications }: ProductTabsProps) => {
  return (
    <Tabs defaultValue="specifications">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="specifications">Spécifications</TabsTrigger>
        <TabsTrigger value="shipping">Livraison & Retours</TabsTrigger>
      </TabsList>
      <TabsContent value="specifications" className="p-6 bg-white border rounded-lg mt-4">
        <h3 className="text-xl font-semibold text-packshield-navy mb-4">Spécifications du produit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key} className="border-b pb-3">
              <div className="font-medium">{key}</div>
              <div className="text-packshield-grey">{value}</div>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="shipping" className="p-6 bg-white border rounded-lg mt-4">
        <h3 className="text-xl font-semibold text-packshield-navy mb-4">Informations de livraison</h3>
        <div className="space-y-4">
          <p>Les produits sont expédiés directement depuis les centres de distribution d'Amazon. Les options de livraison standard s'appliquent conformément aux politiques d'Amazon.</p>
          <h4 className="font-medium">Politique de retour</h4>
          <p>Si vous n'êtes pas entièrement satisfait de votre achat, veuillez vous référer à la politique de retour d'Amazon pour cet article. Nous garantissons la qualité de nos produits et souhaitons que vous soyez entièrement satisfait de votre achat.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
