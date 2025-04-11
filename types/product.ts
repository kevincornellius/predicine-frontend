
export interface TMedicine {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  stock: number;
  category: string;
}

export interface Product extends TMedicine {
  sold: number;
  prediction: {
    restockDate: string;
    availability: {
      percentage: number;
      status: string;
    };
  };
}
