'use client'
import { notFound } from 'next/navigation';
import Link from 'next/link';

const devices = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    display: "6.1\" OLED",
    resolution: "2556 x 1179",
    refresh: "120 Hz",
    processor: "Apple A17 Pro",
    ram: "8 GB",
    storage: "128/256/512 GB, 1 TB",
    battery: "3274 mAh",
    camera: "48MP Tripla",
    os: "iOS 17",
    weight: "187 g",
    dimensions: "146.6 x 70.6 x 8.3 mm",
    colors: "Preto, Prata, Azul, Titânio",
    fiveg: true,
    release: "Setembro 2023",
    price: "R$ 9.299 (estimado)",
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    display: "6.8\" AMOLED",
    resolution: "3120 x 1440",
    refresh: "120 Hz",
    processor: "Snapdragon 8 Gen 3",
    ram: "12 GB",
    storage: "256/512 GB, 1 TB",
    battery: "5000 mAh",
    camera: "200MP Quádrupla",
    os: "Android 14",
    weight: "232 g",
    dimensions: "162.3 x 79 x 8.6 mm",
    colors: "Preto, Cinza, Violeta, Amarelo",
    fiveg: true,
    release: "Janeiro 2024",
    price: "R$ 8.999 (estimado)",
  },
  {
    name: "Pixel 8 Pro",
    brand: "Google",
    display: "6.7\" OLED",
    resolution: "2992 x 1344",
    refresh: "120 Hz",
    processor: "Google Tensor G3",
    ram: "12 GB",
    storage: "128/256/512 GB, 1 TB",
    battery: "5050 mAh",
    camera: "50MP Tripla",
    os: "Android 14",
    weight: "213 g",
    dimensions: "162.6 x 76.5 x 8.8 mm",
    colors: "Preto, Azul, Bege",
    fiveg: true,
    release: "Outubro 2023",
    price: "R$ 7.999 (estimado)",
  },
  { name: "iPhone 14", brand: "Apple", display: "6.1\" OLED", battery: "3279 mAh", camera: "12MP Dupla", os: "iOS 16" },
  { name: "iPhone 13", brand: "Apple", display: "6.1\" OLED", battery: "3240 mAh", camera: "12MP Dupla", os: "iOS 15" },
  { name: "iPhone SE (2022)", brand: "Apple", display: "4.7\" LCD", battery: "2018 mAh", camera: "12MP", os: "iOS 15" },
  { name: "Galaxy S23", brand: "Samsung", display: "6.1\" AMOLED", battery: "3900 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Galaxy Z Fold5", brand: "Samsung", display: "7.6\" AMOLED", battery: "4400 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Samsung Galaxy A54", brand: "Samsung", display: "6.4\" AMOLED", battery: "5000 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Pixel 7", brand: "Google", display: "6.3\" OLED", battery: "4355 mAh", camera: "50MP Dupla", os: "Android 13" },
  { name: "Xiaomi 13 Pro", brand: "Xiaomi", display: "6.73\" AMOLED", battery: "4820 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Redmi Note 12 Pro", brand: "Xiaomi", display: "6.67\" AMOLED", battery: "5000 mAh", camera: "50MP Tripla", os: "Android 12" },
  { name: "OnePlus 11", brand: "OnePlus", display: "6.7\" AMOLED", battery: "5000 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Realme GT 3", brand: "Realme", display: "6.74\" AMOLED", battery: "4600 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Realme 11 Pro+", brand: "Realme", display: "6.7\" AMOLED", battery: "5000 mAh", camera: "200MP Tripla", os: "Android 13" },
  { name: "Motorola Edge 40 Pro", brand: "Motorola", display: "6.67\" OLED", battery: "4600 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Moto G84", brand: "Motorola", display: "6.55\" P-OLED", battery: "5000 mAh", camera: "50MP Dupla", os: "Android 13" },
  { name: "Asus ROG Phone 7", brand: "Asus", display: "6.78\" AMOLED", battery: "6000 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Asus Zenfone 10", brand: "Asus", display: "5.9\" AMOLED", battery: "4300 mAh", camera: "50MP Dupla", os: "Android 13" },
  { name: "Oppo Find X6 Pro", brand: "Oppo", display: "6.82\" AMOLED", battery: "5000 mAh", camera: "50MP Tripla", os: "Android 13" },
  { name: "Vivo X90 Pro+", brand: "Vivo", display: "6.78\" AMOLED", battery: "4700 mAh", camera: "50MP Quádrupla", os: "Android 13" },
  { name: "Sony Xperia 1 V", brand: "Sony", display: "6.5\" OLED", battery: "5000 mAh", camera: "48MP Tripla", os: "Android 13" },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

interface DetalhesPageProps {
  params: { slug: string };
}

export default function DetalhesPage({ params }: DetalhesPageProps) {
  const { slug } = params;
  const device = devices.find(d => slugify(d.name) === slug);

  if (!device) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">{device.name}</h1>
        <ul className="mb-6 text-gray-700 space-y-2">
          <li><strong>Marca:</strong> {device.brand}</li>
          <li><strong>Tela:</strong> {device.display} ({device.resolution}, {device.refresh})</li>
          <li><strong>Processador:</strong> {device.processor}</li>
          <li><strong>RAM:</strong> {device.ram}</li>
          <li><strong>Armazenamento:</strong> {device.storage}</li>
          <li><strong>Bateria:</strong> {device.battery}</li>
          <li><strong>Câmera:</strong> {device.camera}</li>
          <li><strong>Sistema:</strong> {device.os}</li>
          <li><strong>Peso:</strong> {device.weight}</li>
          <li><strong>Dimensões:</strong> {device.dimensions}</li>
          <li><strong>Cores disponíveis:</strong> {device.colors}</li>
          <li><strong>5G:</strong> {device.fiveg ? 'Sim' : 'Não'}</li>
          <li><strong>Lançamento:</strong> {device.release}</li>
          <li><strong>Preço estimado:</strong> {device.price}</li>
        </ul>
        <Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Voltar</Link>
      </div>
    </div>
  );
} 