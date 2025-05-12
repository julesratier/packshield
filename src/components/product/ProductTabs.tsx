
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
      <TabsContent value="specifications" className="p-6 bg-white border rounded-lg mt-4 min-h-[320px]">
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
      <TabsContent value="shipping" className="p-6 bg-white border rounded-lg mt-4 min-h-[320px]">
        <h3 className="text-xl font-semibold text-packshield-navy mb-4">Informations de livraison</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium flex items-center">
              <span className="mr-2">🚚</span> Livraison
            </h4>
            <p className="mt-2">
              Les produits proposés sur Packshield sont expédiés par Amazon. Tous nos produits sont éligibles au programme <strong>Amazon Prime</strong>, ce qui signifie que les membres Prime profitent de la <strong>livraison rapide et gratuite</strong> sur leurs commandes (en <strong>1 jour ouvré</strong> dans la plupart des cas).
            </p>
            <p className="mt-2">
              Vous bénéficiez ainsi des services logistiques rapides et fiables, avec plusieurs options de livraison disponibles selon votre localisation.
            </p>
          </div>
          <div>
            <h4 className="font-medium flex items-center">
              <span className="mr-2">🔁</span> Politique de retour
            </h4>
            <p className="mt-2">
              Si vous n'êtes pas entièrement satisfait de votre achat, vous disposez d'un <strong>délai de 30 jours</strong> à compter de la réception du produit pour effectuer un retour, conformément à la politique de retour standard d'Amazon.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
