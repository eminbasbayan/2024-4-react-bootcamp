const ProductDetailSkeleton = () => {
  return (
    <div className="product-detail min-h-screen bg-gray-50 animate-pulse">
      <div className="container mx-auto px-4 py-8">
        {/* Sayfa Başlığı Skeleton */}
        <div className="w-48 h-8 bg-gray-200 rounded-lg mx-auto mb-8" />

        <div className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Ürün Görseli Skeleton */}
            <div className="product-image-skeleton">
              <div
                className="w-full bg-gray-200 rounded-lg"
                style={{ height: '500px' }}
              />
            </div>

            {/* Ürün Bilgileri Skeleton */}
            <div className="product-info space-y-6">
              {/* Kategori Skeleton */}
              <div className="mb-4">
                <div className="w-24 h-6 bg-gray-200 rounded-full" />
              </div>

              {/* Başlık Skeleton */}
              <div className="space-y-3">
                <div className="w-3/4 h-8 bg-gray-200 rounded-lg" />
                <div className="w-1/2 h-8 bg-gray-200 rounded-lg" />
              </div>

              {/* Yıldızlar Skeleton */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-5 h-5 bg-gray-200 rounded" />
                  ))}
                </div>
                <div className="w-32 h-5 bg-gray-200 rounded" />
              </div>

              {/* Fiyat Skeleton */}
              <div className="w-32 h-8 bg-gray-200 rounded-lg" />

              {/* Açıklama Skeleton */}
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded" />
                <div className="w-full h-4 bg-gray-200 rounded" />
                <div className="w-3/4 h-4 bg-gray-200 rounded" />
                <div className="w-1/2 h-4 bg-gray-200 rounded" />
              </div>

              {/* Sepete Ekle Butonu Skeleton */}
              <div className="pt-4">
                <div className="w-full h-12 bg-gray-200 rounded-lg" />
              </div>

              {/* Ürün Özellikleri Skeleton */}
              <div className="border-t pt-4 mt-6">
                <div className="w-48 h-6 bg-gray-200 rounded mb-4" />
                <div className="space-y-3">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full" />
                      <div className="w-3/4 h-4 bg-gray-200 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
