'use client'
import React, { useState } from 'react';
import Link from 'next/link';

type Device = {
  name: string;
  brand: string;
  image: string;
  display: string;
  resolution: string;
  refresh: string;
  processor: string;
  ram: string;
  storage: string;
  battery: string;
  camera: string;
  os: string;
  weight: string;
  dimensions: string;
  colors: string;
  fiveg: boolean;
  release: string;
  price: string;
  [key: string]: string | boolean;
};

const devices: Device[] = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    image: "/iphone-15-pro.png",
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
    image: "/galaxy-s24-ultra.png",
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
    image: "/pixel-8-pro.png",
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
  // ...adicione mais aparelhos conforme necessário, com os mesmos campos acima...
];

const featureLabels: { [key: string]: string } = {
  brand: 'Marca',
  image: 'Imagem',
  display: 'Tela',
  resolution: 'Resolução',
  refresh: 'Taxa de atualização',
  processor: 'Processador',
  ram: 'RAM',
  storage: 'Armazenamento',
  battery: 'Bateria',
  camera: 'Câmera',
  os: 'Sistema',
  weight: 'Peso',
  dimensions: 'Dimensões',
  colors: 'Cores disponíveis',
  fiveg: '5G',
  release: 'Lançamento',
  price: 'Preço estimado',
};

const featureKeys = Object.keys(featureLabels);

export default function CompararPage() {
  const [selected, setSelected] = useState<string[]>(devices.slice(0, 2).map(d => d.name));

  const handleSelect = (idx: number, value: string) => {
    setSelected(prev => {
      const copy = [...prev];
      copy[idx] = value;
      return Array.from(new Set(copy)).slice(0, 3); // no duplicates, max 3
    });
  };

  const selectedDevices = selected.map(name => devices.find(d => d.name === name)).filter(Boolean) as Device[];

  // Find differences for highlighting
  const getDiffKeys = () => {
    const diffs = new Set<string>();
    featureKeys.forEach(key => {
      const values = selectedDevices.map(d => key === 'fiveg' ? (d.fiveg ? 'Sim' : 'Não') : String(d[key] ?? ''));
      if (new Set(values).size > 1) diffs.add(key);
    });
    return diffs;
  };
  const diffKeys = getDiffKeys();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">Comparar Aparelhos</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          {[0, 1, 2].map(idx => (
            <div className="flex flex-col items-center w-full sm:w-1/3" key={idx}>
              <label className="mb-2 font-medium text-blue-700">Aparelho {idx + 1}</label>
              <select
                className="border rounded px-3 py-2 w-full"
                value={selected[idx] || ''}
                onChange={e => handleSelect(idx, e.target.value)}
              >
                <option value="">Selecione...</option>
                {devices.map(d => (
                  <option key={d.name} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="py-3 px-4 text-left font-semibold">Característica</th>
                {selectedDevices.map(d => (
                  <th key={d.name} className="py-3 px-4 text-left font-semibold">{d.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureKeys.map(key => (
                <tr key={key} className="border-t">
                  <td className="py-2 px-4 font-medium text-blue-700">{featureLabels[key]}</td>
                  {selectedDevices.map((d, i) => (
                    <td
                      key={d.name + key}
                      className={`py-2 px-4 ${diffKeys.has(key) && key !== 'image' ? 'bg-yellow-100' : ''}`}
                    >
                      {key === 'fiveg' ? (d.fiveg ? 'Sim' : 'Não') :
                        key === 'image' ? (
                          <img src={d.image} alt={d.name} className="h-16 object-contain mx-auto" />
                        ) : d[key] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Voltar</Link>
        </div>
      </div>
    </div>
  );
} 