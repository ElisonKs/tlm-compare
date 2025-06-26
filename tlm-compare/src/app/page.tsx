'use client'
import React, { useState } from "react";
import Link from "next/link";

type Device = {
  name: string;
  brand: string;
  image?: string;
  display: string;
  resolution?: string;
  refresh?: string;
  processor?: string;
  ram?: string;
  storage?: string;
  battery: string;
  camera: string;
  os: string;
  weight?: string;
  dimensions?: string;
  colors?: string;
  fiveg?: boolean;
  release?: string;
  price?: string;
};

const devices = [
  {
    name: "iPhone 15 Pro",
    brand: "Apple",
    display: "6.1\" OLED",
    battery: "3274 mAh",
    camera: "48MP Tripla",
    os: "iOS 17",
  },
  {
    name: "iPhone 14",
    brand: "Apple",
    display: "6.1\" OLED",
    battery: "3279 mAh",
    camera: "12MP Dupla",
    os: "iOS 16",
  },
  {
    name: "iPhone 13",
    brand: "Apple",
    display: "6.1\" OLED",
    battery: "3240 mAh",
    camera: "12MP Dupla",
    os: "iOS 15",
  },
  {
    name: "iPhone SE (2022)",
    brand: "Apple",
    display: "4.7\" LCD",
    battery: "2018 mAh",
    camera: "12MP",
    os: "iOS 15",
  },
  {
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    display: "6.8\" AMOLED",
    battery: "5000 mAh",
    camera: "200MP Quádrupla",
    os: "Android 14",
  },
  {
    name: "Galaxy S23",
    brand: "Samsung",
    display: "6.1\" AMOLED",
    battery: "3900 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Galaxy Z Fold5",
    brand: "Samsung",
    display: "7.6\" AMOLED",
    battery: "4400 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    display: "6.4\" AMOLED",
    battery: "5000 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Pixel 8 Pro",
    brand: "Google",
    display: "6.7\" OLED",
    battery: "5050 mAh",
    camera: "50MP Tripla",
    os: "Android 14",
  },
  {
    name: "Pixel 7",
    brand: "Google",
    display: "6.3\" OLED",
    battery: "4355 mAh",
    camera: "50MP Dupla",
    os: "Android 13",
  },
  {
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    display: "6.73\" AMOLED",
    battery: "4820 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Redmi Note 12 Pro",
    brand: "Xiaomi",
    display: "6.67\" AMOLED",
    battery: "5000 mAh",
    camera: "50MP Tripla",
    os: "Android 12",
  },
  {
    name: "OnePlus 11",
    brand: "OnePlus",
    display: "6.7\" AMOLED",
    battery: "5000 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Realme GT 3",
    brand: "Realme",
    display: "6.74\" AMOLED",
    battery: "4600 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Realme 11 Pro+",
    brand: "Realme",
    display: "6.7\" AMOLED",
    battery: "5000 mAh",
    camera: "200MP Tripla",
    os: "Android 13",
  },
  {
    name: "Motorola Edge 40 Pro",
    brand: "Motorola",
    display: "6.67\" OLED",
    battery: "4600 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Moto G84",
    brand: "Motorola",
    display: "6.55\" P-OLED",
    battery: "5000 mAh",
    camera: "50MP Dupla",
    os: "Android 13",
  },
  {
    name: "Asus ROG Phone 7",
    brand: "Asus",
    display: "6.78\" AMOLED",
    battery: "6000 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Asus Zenfone 10",
    brand: "Asus",
    display: "5.9\" AMOLED",
    battery: "4300 mAh",
    camera: "50MP Dupla",
    os: "Android 13",
  },
  {
    name: "Oppo Find X6 Pro",
    brand: "Oppo",
    display: "6.82\" AMOLED",
    battery: "5000 mAh",
    camera: "50MP Tripla",
    os: "Android 13",
  },
  {
    name: "Vivo X90 Pro+",
    brand: "Vivo",
    display: "6.78\" AMOLED",
    battery: "4700 mAh",
    camera: "50MP Quádrupla",
    os: "Android 13",
  },
  {
    name: "Sony Xperia 1 V",
    brand: "Sony",
    display: "6.5\" OLED",
    battery: "5000 mAh",
    camera: "48MP Tripla",
    os: "Android 13",
  },
];

const uniqueBrands = Array.from(new Set(devices.map(d => d.brand)));
const uniqueOS = Array.from(new Set(devices.map(d => d.os)));

function DeviceModal({ device, onClose }: { device: Device | null, onClose: () => void }) {
  if (!device) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
        <img src={device.image} alt={device.name} className="h-32 object-contain mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-blue-700 text-center">{device.name}</h1>
        <ul className="mb-6 text-gray-700 space-y-2 w-full">
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
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [brandFilters, setBrandFilters] = useState<string[]>(uniqueBrands);
  const [osFilters, setOSFilters] = useState<string[]>(uniqueOS);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalDevice, setModalDevice] = useState<Device | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleBrandChange = (brand: string) => {
    setBrandFilters((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleOSChange = (os: string) => {
    setOSFilters((prev) =>
      prev.includes(os)
        ? prev.filter((o) => o !== os)
        : [...prev, os]
    );
  };

  const allBrandsSelected = brandFilters.length === uniqueBrands.length;

  const handleSelectAllBrands = () => {
    setBrandFilters(allBrandsSelected ? [] : uniqueBrands);
  };

  const filteredDevices = devices
    .map((device, idx) => ({ ...device, idx }))
    .filter(
      (device) =>
        (device.name.toLowerCase().includes(search.toLowerCase()) ||
          device.brand.toLowerCase().includes(search.toLowerCase()) ||
          device.os.toLowerCase().includes(search.toLowerCase())) &&
        brandFilters.includes(device.brand) &&
        osFilters.includes(device.os)
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-700">Comparação de Celulares</h1>
        <button
          className="md:hidden p-2 rounded border border-gray-300 text-gray-700"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Alternar filtros"
        >
          {sidebarOpen ? 'Fechar Filtros' : 'Filtros'}
        </button>
      </header>
      <div className="flex-1 flex w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 gap-8">
        {/* Side Menu */}
        <aside
          className={`bg-white border border-gray-200 rounded-lg shadow p-6 h-fit flex-col gap-8 min-w-[220px] max-w-xs transition-all duration-200
            md:sticky md:top-24 md:flex
            ${sidebarOpen ? 'flex fixed z-30 left-0 top-16 w-3/4 max-w-xs h-full' : 'hidden'}
            md:static md:w-64 md:h-fit md:flex`}
        >
          <div>
            <h2 className="font-semibold mb-2 text-blue-700">Filtrar por Marca</h2>
            <div className="flex flex-col gap-2 mb-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={allBrandsSelected}
                  onChange={handleSelectAllBrands}
                  className="accent-blue-500"
                />
                Selecionar todas
              </label>
            </div>
            <div className="flex flex-col gap-2">
              {uniqueBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={brandFilters.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="accent-blue-500"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-blue-700">Filtrar por Sistema</h2>
            <div className="flex flex-col gap-2">
              {uniqueOS.map((os) => (
                <label key={os} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={osFilters.includes(os)}
                    onChange={() => handleOSChange(os)}
                    className="accent-blue-500"
                  />
                  {os}
                </label>
              ))}
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center">
          <div className="w-full flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between">
            <input
              type="text"
              placeholder="Buscar por nome, marca ou sistema..."
              value={search}
              onChange={handleSearch}
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
            />
          </div>
          <div className="w-full flex justify-end mb-4">
            <Link href="/comparar" className="inline-block px-5 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition">
              Comparar aparelhos lado a lado
            </Link>
          </div>
          <div className="overflow-x-auto w-full">
            <div className="rounded-xl shadow-lg bg-white border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="py-3 px-4 text-left font-semibold">Modelo</th>
                    <th className="py-3 px-4 text-left font-semibold">Marca</th>
                    <th className="py-3 px-4 text-left font-semibold">Tela</th>
                    <th className="py-3 px-4 text-left font-semibold">Bateria</th>
                    <th className="py-3 px-4 text-left font-semibold">Câmera</th>
                    <th className="py-3 px-4 text-left font-semibold">Sistema</th>
                    <th className="py-3 px-4 text-left font-semibold">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDevices.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-6 text-center text-gray-400">
                        Nenhum aparelho corresponde à sua busca ou seleção.
                      </td>
                    </tr>
                  ) : (
                    filteredDevices.map((device, idx) => (
                      <tr key={device.name} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/50"}>
                        <td className="py-3 px-4 font-semibold">{device.name}</td>
                        <td className="py-3 px-4">{device.brand}</td>
                        <td className="py-3 px-4">{device.display}</td>
                        <td className="py-3 px-4">{device.battery}</td>
                        <td className="py-3 px-4">{device.camera}</td>
                        <td className="py-3 px-4">{device.os}</td>
                        <td className="py-3 px-4">
                          <button onClick={() => setModalDevice(device)} className="inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <DeviceModal device={modalDevice} onClose={() => setModalDevice(null)} />
      <footer className="mt-12 text-gray-400 text-sm text-center">Feito com Next.js & Tailwind CSS</footer>
    </div>
  );
}
