
import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  title: string;
  date: string;
  comment: string;
}

interface CustomerReviewsProps {
  reviews: Review[];
  productId: number;
}

const CustomerReviews = ({ reviews, productId }: CustomerReviewsProps) => {
  // Only show reviews for product 3 (Oxford mattress cover for 2 persons)
  const displayReviews = productId === 3 ? reviews : [];

  return (
    <div className="mt-8 p-6 bg-white border rounded-lg">
      <h3 className="text-xl font-semibold text-packshield-navy mb-4">Avis clients</h3>
      <div className="space-y-6">
        {displayReviews.length > 0 ? (
          displayReviews.map((review, index) => (
            <div key={index} className={index < displayReviews.length - 1 ? "border-b pb-4 mb-4" : ""}>
              <div className="flex items-start mb-2">
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="flex items-center mt-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor" 
                      />
                    ))}
                    <span className="ml-2 text-sm">{review.title}</span>
                  </div>
                  <div className="text-xs text-packshield-grey mb-2">Avis laissé en France le {review.date}</div>
                </div>
              </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>Aucun avis client pour ce produit.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
