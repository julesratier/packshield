
import { Star } from 'lucide-react';
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
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="specifications">Spécifications</TabsTrigger>
        <TabsTrigger value="shipping">Livraison & Retours</TabsTrigger>
        <TabsTrigger value="reviews">Avis Clients</TabsTrigger>
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
      <TabsContent value="reviews" className="p-6 bg-white border rounded-lg mt-4">
        <h3 className="text-xl font-semibold text-packshield-navy mb-4">Avis clients</h3>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
              ))}
              <span className="ml-2 font-medium">Protection excellente</span>
            </div>
            <p className="text-sm mb-2">Ces housses de matelas sont incroyablement robustes. J'ai été impressionné par l'épaisseur du matériau. Parfait pour notre déménagement.</p>
            <div className="text-xs text-packshield-grey">Sarah T. - Il y a 2 semaines</div>
          </div>
          <div className="border-b pb-4">
            <div className="flex items-center mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
              ))}
              {[...Array(1)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gray-300" fill="currentColor" />
              ))}
              <span className="ml-2 font-medium">Bonne qualité</span>
            </div>
            <p className="text-sm mb-2">La housse est bien fabriquée et a gardé notre matelas propre pendant notre déménagement. La seule raison pour laquelle je donne 4 étoiles est que j'aurais aimé que la fermeture éclair soit un peu plus robuste.</p>
            <div className="text-xs text-packshield-grey">Michel R. - Il y a 1 mois</div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
