import { Link } from "react-router-dom"

function AdminQuoteDetails() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <aside className="w-64 bg-black border-r border-zinc-800 p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">Open Bar Mogi</h1>

        <nav className="space-y-3 text-zinc-400">
          <Link className="block hover:text-white px-4 py-3" to="/admin">
            Dashboard
          </Link>
          <a className="block hover:text-white px-4 py-3" href="#">Eventos</a>
          <a className="block hover:text-white px-4 py-3" href="#">Clientes</a>
          <a className="block text-white bg-zinc-900 px-4 py-3 rounded-xl" href="#">
            Orçamentos
          </a>
          <a className="block hover:text-white px-4 py-3" href="#">Estoque</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <Link to="/admin" className="text-yellow-500 font-semibold">
          ← Voltar ao dashboard
        </Link>

        <div className="mt-8 mb-10">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Detalhes do orçamento
          </p>
          <h2 className="text-4xl font-bold mt-2">
            Casamento - Mariana Souza
          </h2>
          <p className="text-zinc-400 mt-2">
            Solicitação recebida pela landing page.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Informações do evento</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <Info label="Cliente" value="Mariana Souza" />
                <Info label="Telefone" value="(11) 99999-9999" />
                <Info label="Tipo de evento" value="Casamento" />
                <Info label="Data" value="12/06/2026" />
                <Info label="Convidados" value="120 pessoas" />
                <Info label="Duração" value="4 horas" />
                <Info label="Local" value="Mogi das Cruzes - SP" />
                <Info label="Pacote" value="Misto" highlight />
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Extras selecionados</h3>

              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-2 rounded-full">
                  Bar LED
                </span>
                <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-2 rounded-full">
                  Drinks Premium
                </span>
                <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-2 rounded-full">
                  Cardápio Personalizado
                </span>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-yellow-500 text-black rounded-2xl p-6">
              <p className="font-semibold">Valor estimado</p>
              <h3 className="text-4xl font-black mt-2">R$ 4.250</h3>
              <p className="text-black/70 mt-2">
                Valor sujeito à validação final.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Status</h3>

              <span className="inline-block text-yellow-500 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full">
                Em análise
              </span>

              <div className="space-y-3 mt-6">
                <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
                  Aprovar proposta
                </button>

                <button className="w-full border border-zinc-700 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
                  Gerar contrato
                </button>

                <button className="w-full border border-zinc-700 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
                  Entrar em contato
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function Info({ label, value, highlight }) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
      <p className="text-zinc-500 text-sm">{label}</p>
      <h4 className={`text-lg font-bold mt-1 ${highlight ? "text-yellow-500" : ""}`}>
        {value}
      </h4>
    </div>
  )
}

export default AdminQuoteDetails