import React, { useState } from "react";

// Device type
export type Device = {
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

// Example devices array (should be imported or defined above Home)
const devices: Device[] = [
  // ... your device objects with all fields ...
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
          <li><strong>Tela:</strong> {device.display} {device.resolution && `(${device.resolution}`}{device.refresh && `, ${device.refresh})`}</li>
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

  const allBrandsSelected = brandFilters.length === uniqueBrands.length;

  const handleSelectAllBrands = () => {
    setBrandFilters(allBrandsSelected ? [] : uniqueBrands);
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

  // ...rest of the Home component (JSX) remains unchanged...

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-slate-100 flex flex-col">
      <header className="w-full bg-background shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">Comparação de Celulares</h1>
        <button
          className="md:hidden p-2 rounded border border-slate-300 text-slate-700 bg-background"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Alternar filtros"
        >
          {sidebarOpen ? 'Fechar Filtros' : 'Filtros'}
        </button>
      </header>
      <div className="flex-1 flex w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 gap-8">
        {/* Side Menu */}
        <aside
          className={`bg-white border border-slate-200 rounded-lg shadow p-6 h-fit flex-col gap-8 min-w-[220px] max-w-xs transition-all duration-200
            md:sticky md:top-24 md:flex
            ${sidebarOpen ? 'flex fixed z-30 left-0 top-16 w-3/4 max-w-xs h-full' : 'hidden'}
            md:static md:w-64 md:h-fit md:flex`}
        >
          <div>
            <h2 className="font-semibold mb-2 text-primary">Filtrar por Marca</h2>
            <div className="flex flex-col gap-2 mb-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={allBrandsSelected}
                  onChange={handleSelectAllBrands}
                  className="accent-primary"
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
                    className="accent-primary"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-primary">Filtrar por Sistema</h2>
            <div className="flex flex-col gap-2">
              {uniqueOS.map((os) => (
                <label key={os} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={osFilters.includes(os)}
                    onChange={() => handleOSChange(os)}
                    className="accent-primary"
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
              onChange={e => setSearch(e.target.value)}
              className="border border-slate-300 rounded px-3 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary bg-white shadow-sm"
            />
          </div>
          <div className="w-full flex justify-end mb-4">
            <button
              onClick={() => window.location.href = '/comparar'}
              className="inline-block px-5 py-2 bg-primary text-white rounded font-semibold shadow hover:bg-primary-dark transition"
            >
              Comparar aparelhos lado a lado
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <div className="rounded-xl shadow-lg bg-white border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr className="bg-primary/10 text-primary">
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
                      <td colSpan={7} className="py-6 text-center text-slate-400">
                        Nenhum aparelho corresponde à sua busca ou seleção.
                      </td>
                    </tr>
                  ) : (
                    filteredDevices.map((device, idx) => (
                      <tr key={device.name} className={idx % 2 === 0 ? "bg-white" : "bg-primary/5"}>
                        <td className="py-3 px-4 font-semibold">{device.name}</td>
                        <td className="py-3 px-4">{device.brand}</td>
                        <td className="py-3 px-4">{device.display}</td>
                        <td className="py-3 px-4">{device.battery}</td>
                        <td className="py-3 px-4">{device.camera}</td>
                        <td className="py-3 px-4">{device.os}</td>
                        <td className="py-3 px-4">
                          <button onClick={() => setModalDevice(device)} className="inline-block px-3 py-1 bg-secondary text-white rounded hover:bg-secondary-dark transition">
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
          <DeviceModal device={modalDevice} onClose={() => setModalDevice(null)} />
        </main>
      </div>
      <footer className="mt-12 text-slate-400 text-sm text-center">Feito com Next.js & Tailwind CSS</footer>
    </div>
  );
} 