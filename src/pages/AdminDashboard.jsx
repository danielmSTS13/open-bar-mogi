import { Link } from "react-router-dom"

function AdminDashboard() {
  const events = [
    {
      client: "Mariana Souza",
      type: "Casamento",
      date: "12/06/2026",
      package: "Misto",
      value: "R$ 4.250",
      status: "Em análise",
      color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/30",
    },
    {
      client: "Empresa Alpha",
      type: "Corporativo",
      date: "20/06/2026",
      package: "Alcoólico",
      value: "R$ 6.800",
      status: "Confirmado",
      color: "text-green-500 bg-green-500/10 border-green-500/30",
    },
    {
      client: "Lucas Pereira",
      type: "Aniversário",
      date: "28/06/2026",
      package: "Sem álcool",
      value: "R$ 2.100",
      status: "Proposta enviada",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <aside className="w-64 bg-black border-r border-zinc-800 p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-10">
          Open Bar Mogi
        </h1>

        <nav className="space-y-3 text-zinc-400">
          <a className="block text-white bg-zinc-900 px-4 py-3 rounded-xl" href="#">Dashboard</a>
          <a className="block hover:text-white px-4 py-3" href="#">Eventos</a>
          <a className="block hover:text-white px-4 py-3" href="#">Clientes</a>
          <a className="block hover:text-white px-4 py-3" href="#">Orçamentos</a>
          <a className="block hover:text-white px-4 py-3" href="#">Estoque</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-10">
          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-widest">
              CMS Administrativo
            </p>
            <h2 className="text-4xl font-bold mt-2">
              Dashboard
            </h2>
            <p className="text-zinc-400 mt-2">
              Visão geral dos eventos, orçamentos e solicitações recentes.
            </p>
          </div>

          <button className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
            Novo evento
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">Confirmados</p>
            <h3 className="text-4xl font-bold mt-3">7</h3>
            <p className="text-green-500 text-sm mt-2">+2 nesta semana</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">Em análise</p>
            <h3 className="text-4xl font-bold mt-3">5</h3>
            <p className="text-yellow-500 text-sm mt-2">Aguardando retorno</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">Propostas enviadas</p>
            <h3 className="text-4xl font-bold mt-3">8</h3>
            <p className="text-blue-400 text-sm mt-2">Clientes em decisão</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400">Receita estimada</p>
            <h3 className="text-4xl font-bold mt-3">R$ 18k</h3>
            <p className="text-zinc-500 text-sm mt-2">Eventos do mês</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Solicitações recentes</h3>
              <p className="text-zinc-400 mt-1">
                Orçamentos recebidos pela landing page.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead className="bg-zinc-950 text-zinc-400">
                <tr>
                  <th className="p-4">Cliente</th>
                  <th className="p-4">Evento</th>
                  <th className="p-4">Data</th>
                  <th className="p-4">Pacote</th>
                  <th className="p-4">Valor</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Ação</th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr key={event.client} className="border-t border-zinc-800">
                    <td className="p-4 font-medium">{event.client}</td>
                    <td className="p-4 text-zinc-300">{event.type}</td>
                    <td className="p-4 text-zinc-300">{event.date}</td>
                    <td className="p-4 text-zinc-300">{event.package}</td>
                    <td className="p-4 font-semibold">{event.value}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full border text-sm ${event.color}`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Link
                        to="/admin/orcamento"
                        className="text-yellow-500 hover:text-yellow-400 font-semibold"
                      >
                        Ver detalhes
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard