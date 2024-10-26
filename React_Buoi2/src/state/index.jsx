import { useState } from "react";
import "./../App.css";

const glassesList = [
  {
    id: 1,
    imageUrl: "/images/g1.jpg",
    transparentImageUrl: "/images/v1.png",
    name: "Glasses 1",
  },
  {
    id: 2,
    imageUrl: "/images/g2.jpg",
    transparentImageUrl: "/images/v2.png",
    name: "Glasses 2",
  },
  {
    id: 3,
    imageUrl: "/images/g3.jpg",
    transparentImageUrl: "/images/v3.png",
    name: "Glasses 3",
  },
  {
    id: 4,
    imageUrl: "/images/g4.jpg",
    transparentImageUrl: "/images/v4.png",
    name: "Glasses 4",
  },
  {
    id: 5,
    imageUrl: "/images/g5.jpg",
    transparentImageUrl: "/images/v5.png",
    name: "Glasses 5",
  },
  {
    id: 6,
    imageUrl: "/images/g6.jpg",
    transparentImageUrl: "/images/v6.png",
    name: "Glasses 5",
  },
  {
    id: 7,
    imageUrl: "/images/g7.jpg",
    transparentImageUrl: "/images/v7.png",
    name: "Glasses 5",
  },
  {
    id: 8,
    imageUrl: "/images/g8.jpg",
    transparentImageUrl: "/images/v8.png",
    name: "Glasses 5",
  },
  {
    id: 9,
    imageUrl: "/images/g9.jpg",
    transparentImageUrl: "/images/v9.png",
    name: "Glasses 5",
  },
];

export default function GlassesApp() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses); // Set the selected glasses
  };

  return (
    <div className="glasses-app">
      {/* Background image */}
      <div className="background">
        {/* Overlay content */}
        <div className="content-container">
          <h1 className="title text-center text-4xl font-bold mb-4 text-red-600">
            Try Glasses App Online
          </h1>

          {/* Model Section */}
          <div className="model-container flex justify-center mb-8">
            <div className="relative">
              <img
                src="/images/model.jpg" // Replace with your model image
                alt="Model"
                className="w-48 h-48"
              />
              {selectedGlasses && (
                <img
                  src={selectedGlasses.transparentImageUrl}
                  alt={selectedGlasses.name}
                  className="absolute top-10 left-[55px] w-20 h-10"
                />
              )}
            </div>
          </div>

          {/* Glasses Selection */}
          <div className="glasses-selection-container bg-white p-6 rounded-lg shadow-lg">
            <div className="glasses-selection grid grid-cols-4 gap-4 justify-center">
              {glassesList.map((glasses) => (
                <button
                  key={glasses.id}
                  onClick={() => handleSelectGlasses(glasses)}
                  className={`p-2 border ${
                    selectedGlasses?.id === glasses.id
                      ? "border-blue-500"
                      : "border-gray-300"
                  } rounded-lg`}
                >
                  <img
                    src={glasses.imageUrl}
                    alt={glasses.name}
                    className="w-24 h-24"
                  />
                  <span className="glasses-name">{glasses.name}</span>
                </button>
              ))}
            </div>

            {selectedGlasses && (
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">
                  {selectedGlasses.name}
                </h2>
                <p className="text-gray-600">Try these glasses!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
