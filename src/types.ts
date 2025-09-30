
export interface FormData {
  username: string;
  name: string;
  lastName: string; // Cambiado de 'Ape' a 'lastName' para mayor claridad
  country: string;
  city: string;
  address: string;
  email: string;
  password?: string; // Opcional si no siempre se guarda
  acceptTerms: boolean;
}

export interface ProductCardHorizontalProps {
  title: string;
  imageUrl: string;
  price: string;
  productLink: string;
}