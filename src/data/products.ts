
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MCB 1 Phase 6A',
    price: 25000,
    imageUrl: '/placeholders/mcb.jpg',
    description: 'Miniature Circuit Breaker (MCB) untuk proteksi arus lebih pada instalasi listrik rumah.'
  },
  {
    id: '2',
    name: 'Kabel NYM 3x2.5mm',
    price: 15000,
    imageUrl: '/placeholders/kabel-nym.jpg',
    description: 'Kabel listrik tembaga dengan 3 inti ukuran 2.5mm, cocok untuk instalasi indoor.'
  },
  {
    id: '3',
    name: 'Stop Kontak Dinding',
    price: 18000,
    imageUrl: '/placeholders/stop-kontak.jpg',
    description: 'Stop kontak tanam dinding dengan frame, standar SNI.'
  },
  {
    id: '4',
    name: 'Lampu LED 12W',
    price: 35000,
    imageUrl: '/placeholders/lampu-led.jpg',
    description: 'Lampu LED hemat energi dengan cahaya putih terang, daya 12 Watt.'
  }
];
