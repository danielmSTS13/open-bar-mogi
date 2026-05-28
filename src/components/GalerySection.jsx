function GallerySection() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <p className="text-yellow-500 font-semibold uppercase tracking-widest mb-4">
          Galeria
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Momentos que mostram a experiência.
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
          Fotos e vídeos reais dos eventos atendidos pela Equipe Open Bar Mogi.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 h-80 bg-zinc-800 rounded-2xl border border-zinc-700" />
          <div className="h-40 bg-zinc-800 rounded-2xl border border-zinc-700" />
          <div className="h-40 bg-zinc-800 rounded-2xl border border-zinc-700" />
          <div className="h-40 bg-zinc-800 rounded-2xl border border-zinc-700" />
          <div className="h-40 bg-zinc-800 rounded-2xl border border-zinc-700" />
        </div>
      </div>
    </section>
  )
}

export default GallerySection