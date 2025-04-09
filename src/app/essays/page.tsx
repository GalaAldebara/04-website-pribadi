import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Esai | Website Pribadi",
    description: "Kumpulan esai yang ditulis oleh saya.",
  };
};

export default function Essays() {
  const articles = [
    {
      title: "Analisis Strategi Amazon dalam Dunia E-Commerce",
      description: "Melihat bagaimana Amazon membangun dominasi pasar e-commerce global melalui inovasi logistik dan teknologi.",
      link: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=8410798192631166348&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9127581&hvtargid=kwd-10573980&hydadcr=2246_13649807",
    },
    {
      title: "Inovasi dan Dominasi Google dalam Ekosistem Digital",
      description: "Eksplorasi strategi Google dalam menciptakan ekosistem produk yang terintegrasi dan berkelanjutan.",
      link: "https://scholar.google.co.id/schhp?hl=id",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Esai Saya</h1>
      <p className="text-lg text-gray-600 mb-8">Berikut adalah tulisan esai saya tentang teknologi dan inovasi perusahaan besar.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a key={index} href={article.link} className="block p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
