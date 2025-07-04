
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  onClose: () => void;
  initialIndex?: number;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  images, 
  productName, 
  onClose,
  initialIndex = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Zoom controls */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={handleZoomOut}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            onClick={handleZoomIn}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Main image with zoom */}
        <div className="relative max-w-4xl max-h-full overflow-auto">
          <img
            src={images[currentIndex]}
            alt={`${productName} - Imagen ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>

        {/* Image counter and zoom level */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          {images.length > 1 && (
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} de {images.length}
            </div>
          )}
          <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Zoom: {Math.round(zoomLevel * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
