import frameworkData from "./framework.json";

export default function Frameworklist() {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {/* Judul Halaman */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white hover:text-gray-300 transition-colors">
          Framework List
        </h1>
        <div className="h-1 w-20 bg-gray-500 mx-auto mt-2 rounded hover:w-32 transition-all"></div>
      </div>

      {/* Container Card */}
      <div className="max-w-3xl mx-auto space-y-5">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-gray-400 hover:bg-gray-800/80 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            {/* Nama Framework */}
            <h2 className="text-xl font-bold text-white mb-2 hover:text-gray-300 transition-colors">
              {item.name}
            </h2>
            
            {/* Deskripsi */}
            <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors">
              {item.description}
            </p>
            
            {/* Informasi Developer */}
            <div className="bg-gray-900 rounded-md p-3 mb-2 hover:bg-gray-950 transition-colors">
              <span className="text-gray-500 text-sm">Developer:</span>
              <p className="text-gray-300 hover:text-white transition-colors">
                {item.details.developer}
              </p>
            </div>
            
            {/* Informasi Tahun Rilis */}
            <div className="bg-gray-900 rounded-md p-3 mb-3 hover:bg-gray-950 transition-colors">
              <span className="text-gray-500 text-sm">Release Year:</span>
              <p className="text-gray-300 hover:text-white transition-colors">
                {item.details.releaseYear}
              </p>
            </div>
            
            {/* Link Website */}
            <a
              href={item.details.officialWebsite}
              className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 hover:scale-105 transition-all duration-200 mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website →
            </a>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs hover:bg-gray-600 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}