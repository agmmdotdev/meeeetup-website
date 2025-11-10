import "../globals.css";
import Wave from "./wave";

export const Default = () => (
  <div className="relative h-96 bg-gradient-to-b from-white via-brand-blue-50 to-brand-blue-100">
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">Content above wave</p>
    </div>
    <Wave />
  </div>
);

export const SkyBlue = () => (
  <div className="relative h-96 bg-gradient-to-b from-white via-brand-blue-50 to-brand-blue-100">
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">Sky blue wave</p>
    </div>
    <Wave fill="#2C74BB" fillOpacity={1} />
  </div>
);

export const CustomColor = () => (
  <div className="relative h-96 bg-gradient-to-b from-purple-50 to-purple-100">
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">Custom purple wave</p>
    </div>
    <Wave fill="#9333ea" fillOpacity={0.8} />
  </div>
);

export const SemiTransparent = () => (
  <div className="relative h-96 bg-gradient-to-b from-white via-brand-blue-50 to-brand-blue-100">
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">Semi-transparent wave</p>
    </div>
    <Wave fill="#2C74BB" fillOpacity={0.6} />
  </div>
);

export const TallWave = () => (
  <div className="relative h-96 bg-gradient-to-b from-white via-brand-blue-50 to-brand-blue-100">
    <div className="h-full flex items-center justify-center">
      <p className="text-gray-700">Tall wave</p>
    </div>
    <Wave className="relative block w-full h-64 md:h-80" />
  </div>
);
