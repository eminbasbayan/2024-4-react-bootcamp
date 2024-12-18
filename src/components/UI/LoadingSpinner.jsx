const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <span className="sr-only">Yükleniyor...</span>
    </div>
  );
};

export default LoadingSpinner;
