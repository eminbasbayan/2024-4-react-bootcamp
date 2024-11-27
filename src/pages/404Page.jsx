const Page404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl px-8 py-12 text-center">
        <div className="text-6xl font-bold text-indigo-600">404</div>
        <div className="mt-4">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Page Not Found
            </h1>
            <p className="text-gray-600">
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
          </div>

          {/* Simple 404 illustration */}
          <div className="my-8 text-gray-400 text-9xl font-bold select-none">
            ¯\_(ツ)_/¯
          </div>

          <button
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
