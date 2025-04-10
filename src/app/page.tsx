import type { Metadata } from 'next';
import Image from 'next/image';
import { defaultMetadata } from '../utils/metadata';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center text-center">
        {/* Foto Profil */}
        <Image
          src="/images/pp.jpeg" // ← pastikan file ini ada di folder public/
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full border shadow-md"
        />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">Muhammad Iqbal Makmur Al-Muniri</h1>
        <p className="text-gray-500">@GalaAldebara · he/him</p>
      </div>

      {/* Tentang Saya */}
      <section className="mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">✨ Tentang Saya</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🎓 Mahasiswa di Politeknik Negeri Malang, Jurusan Teknik Informatika</li>
          <li>🚀 Saat ini sedang mengerjakan Proyek Web Development</li>
          <li>🤖 Sedang mempelajari Machine Learning, Computer Vision, dan Mobile Development</li>
          <li>🤝 Terbuka untuk kolaborasi di Web dan Mobile App Development</li>
          <li>💬 Tertarik pada Web Dev, UI/UX Design, dan Project Management</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">🛠️ Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Go',
            'React', 'Node.js', 'Next.js', 'Laravel',
            'TailwindCSS', 'Figma', 'CorelDraw', 'Canva'
          ].map((tech) => (
            <span
              key={tech}
              className="bg-zinc-100 border border-zinc-300 text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section className="mt-10 text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">📬 Kontak</h2>
        <ul className="space-y-1">
          <li>
            🔗 LinkedIn:{" "}
            <a href="https://www.linkedin.com/feed/" className="text-blue-600 hover:underline" target="_blank">
              linkedin.com/in/iqbalmakmur
            </a>
          </li>
          <li>
            💬 WhatsApp:{" "}
            <a href="https://wa.me/628516178961" className="text-green-600 hover:underline" target="_blank">
              +62 851-6178-961
            </a>
          </li>
          <li>
            📧 Email:{" "}
            <a href="mailto:iqbalmakmurmuniri@gmail.com" className="text-indigo-600 hover:underline">
              iqbalmakmurmuniri@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
