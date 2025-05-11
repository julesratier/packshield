
import { Product } from './types';

// Updated product data with switched images and review counts
export const products: Product[] = [
  {
    id: 1,
    title: "Housse de protection pour matelas en plastique épais - Matelas 2 personnes",
    image: "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
    additionalImages: [
      "/lovable-uploads/749c660d-8352-4181-86b7-f56c7326e2ee.png",
      "/lovable-uploads/805497d7-8696-4cc6-bb18-5289ed33c40a.png",
      "/lovable-uploads/8a8ae62e-38d3-486c-ace5-ddba71582b9c.png"
    ],
    price: 21.90,
    rating: 4.5,
    reviews: 133,
    category: "matelas2p",
    featured: true,
    amazonChoice: false
  },
  {
    id: 2,
    title: "Housse de protection pour matelas en plastique épais - Matelas 1 personne",
    image: "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
    additionalImages: [
      "/lovable-uploads/6e9d7aa1-0c99-43a7-9763-b3cfa618b7cf.png",
      "/lovable-uploads/26b3c3e3-de7b-4f74-a954-3c155d6b84cd.png",
      "/lovable-uploads/a3026e2f-1df4-49f7-a286-b19f2e52e58a.png"
    ],
    price: 17.90,
    rating: 4.5,
    reviews: 133,
    category: "matelas1p",
    featured: true,
    amazonChoice: false
  },
  {
    id: 3,
    title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 2 personnes",
    image: "/lovable-uploads/89d618f8-5401-4b89-a25f-2ca2d58d2e33.png",
    additionalImages: {
      "140x200": [
        "/lovable-uploads/89d618f8-5401-4b89-a25f-2ca2d58d2e33.png",
        "/lovable-uploads/625f51dc-185c-496c-9cc8-593860582555.png", 
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png",
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png",
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png",
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"
      ],
      "160x200": [
        "/lovable-uploads/89d618f8-5401-4b89-a25f-2ca2d58d2e33.png",
        "/lovable-uploads/abd6a3cd-56a5-4417-8c4b-fb1859c12c9b.png", 
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png",
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png",
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png",
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"
      ],
      "180x200": [
        "/lovable-uploads/89d618f8-5401-4b89-a25f-2ca2d58d2e33.png",
        "/lovable-uploads/c82c0160-ed55-4c12-a0ac-52be391099ee.png",
        "/lovable-uploads/c0e1521b-de5a-475c-a7c4-7f0a54c018e6.png",
        "/lovable-uploads/81c480a7-4e56-4431-9299-dbab8669e8cc.png",
        "/lovable-uploads/e3c6c0f4-d1f5-4fa3-a658-107354a0dbd9.png",
        "/lovable-uploads/35604239-0177-4ea6-a88a-2e4ced991900.png"
      ]
    },
    sizes: ["140x200", "160x200", "180x200"],
    price: 29.90,
    rating: 4.5,
    reviews: 355, 
    category: "matelas2p",
    featured: true,
    amazonChoice: true
  },
  {
    id: 4,
    title: "Housse de protection pour matelas en tissu oxford - 4 poignées - Matelas 1 personne",
    image: "/lovable-uploads/41f874fd-413b-4ec2-9d8b-f8d72a43d5ba.png",
    additionalImages: [
      "/lovable-uploads/41f874fd-413b-4ec2-9d8b-f8d72a43d5ba.png",
      "/lovable-uploads/fa8ab4cc-52bc-40d2-9b01-7cc2fcc4415b.png",
      "/lovable-uploads/f229ab7c-0d8b-428e-894d-8c3fc630eb3a.png",
      "/lovable-uploads/15b53996-e3be-42eb-90f7-49487696a43a.png",
      "/lovable-uploads/aaacb1c2-9364-4f06-843f-0c57a04911a6.png",
      "/lovable-uploads/e06bb97f-3264-4ae6-bd47-a960f157e455.png"
    ],
    price: 24.90,
    rating: 4.5,
    reviews: 355,
    category: "matelas1p",
    featured: false,
    amazonChoice: false
  },
  {
    id: 5,
    title: "Kit de rangement sous vide - 4 sacs sous vide et 4 coffres non tissés",
    image: "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png", 
    additionalImages: [
      "/lovable-uploads/8c803c29-2912-4a3b-b160-64c59a0e4642.png",
      "/lovable-uploads/c5db4083-6963-4c79-a130-78d0af7018a2.png",
      "/lovable-uploads/fa391208-f7f3-4551-8747-af5cbb2e3039.png",
      "/lovable-uploads/50694c0f-48a0-4d8d-b845-36397926d112.png",
      "/lovable-uploads/ed1cbc56-1f8b-4341-b60a-4288d1316949.png",
      "/lovable-uploads/6711d68e-221c-4e6a-bd27-1f039876f830.png"
    ],
    price: 37.90,
    rating: 4.0,
    reviews: 450,
    category: "rangementSacs",
    featured: true,
    amazonChoice: false
  },
  {
    id: 6,
    title: "Kit de rangement sous vide - 2 sacs sous vide et 2 coffres non tissés",
    image: "/lovable-uploads/b557e3d0-aa0b-4294-8570-23d2c51e59b2.png",
    additionalImages: [
      "/lovable-uploads/b557e3d0-aa0b-4294-8570-23d2c51e59b2.png",
      "/lovable-uploads/40bd4bc8-f5b7-47af-9edd-1109ee1eb6a8.png",
      "/lovable-uploads/a0f19279-812e-4e80-8dca-d4a98a1931ea.png",
      "/lovable-uploads/1a5b12d7-beec-45a2-8317-ab9f74ae692d.png",
      "/lovable-uploads/763e8bc1-77b8-4d6b-9157-caf246095514.png",
      "/lovable-uploads/de4efd90-a4e0-44a5-90de-d7c58053158a.png"
    ],
    price: 23.90,
    rating: 4.0,
    reviews: 450,
    category: "rangementSacs",
    featured: false,
    amazonChoice: false
  }
];

