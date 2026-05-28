import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Quote() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    eventType: "",
    guests: "",
    date: "",
    duration: "",
    location: "",
    package: "",
    extras: [],
    name: "",
    email: "",
    phone: "",
  })

  return (
    <div className="bg-zinc-950 text-white min-h-screen px-6 lg:px-20 py-10">
      <div className="max-w-4xl mx-auto">
        <p className="text-yellow-500 font-semibold uppercase tracking-widest mb-4">
          Solicitar orçamento
        </p>

        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Monte seu evento
        </h1>

        <p className="text-zinc-400 mb-10">
          Responda algumas perguntas rápidas para receber uma proposta personalizada.
        </p>

        <div className="mb-10">
          <div className="flex justify-between text-sm text-zinc-400 mb-3">
            <span>Etapa {step} de 5</span>
            <span>{step * 20}%</span>
          </div>

          <div className="w-full h-2 bg-zinc-800 rounded-full">
            <div
              className="h-2 bg-yellow-500 rounded-full transition-all"
              style={{ width: `${step * 20}%` }}
            />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Dados do evento
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                  placeholder="Tipo de evento"
                  value={formData.eventType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventType: e.target.value,
                    })
                  }
                />
                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                  placeholder="Quantidade de convidados"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guests: e.target.value,
                    })
                  }
                />

                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                  placeholder="Data prevista"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    })
                  }
                />

                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                  placeholder="Duração estimada"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      duration: e.target.value,
                    })
                  }
                />

                <input
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none md:col-span-2"
                  placeholder="Cidade / Local do evento"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          )}

        {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Escolha o pacote
                </h2>

                <div className="grid md:grid-cols-3 gap-5">
                  {["Sem álcool", "Alcoólico", "Misto"].map((packageName) => (
                    <button
                      key={packageName}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          package: packageName,
                        })
                      }
                      className={`text-left rounded-2xl p-6 border transition ${
                        formData.package === packageName
                          ? "border-yellow-500 bg-yellow-500/10"
                          : "border-zinc-800 bg-zinc-950 hover:border-yellow-500"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-4">
                        {packageName}
                      </h3>

                      <p className="text-zinc-400 text-sm">
                        {packageName === "Sem álcool" &&
                          "Drinks refrescantes sem álcool, frutas, sucos e combinações especiais."}

                        {packageName === "Alcoólico" &&
                          "Caipirinhas de vodka, saquê e cachaça para eventos completos."}

                        {packageName === "Misto" &&
                          "Combinação de drinks alcoólicos e não alcoólicos para todos os convidados."}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Escolha os extras
            </h2>

            <p className="text-zinc-400 mb-6">
              Selecione adicionais para deixar seu evento ainda mais completo.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Bar LED",
                "Drinks Premium",
                "Decoração do Bar",
                "Cardápio Personalizado",
              ].map((extra) => {
                const isSelected = formData.extras.includes(extra)

                return (
                  <button
                    key={extra}
                    onClick={() => {
                      if (isSelected) {
                        setFormData({
                          ...formData,
                          extras: formData.extras.filter((item) => item !== extra),
                        })
                      } else {
                        setFormData({
                          ...formData,
                          extras: [...formData.extras, extra],
                        })
                      }
                    }}
                    className={`text-left rounded-2xl p-6 border transition ${
                      isSelected
                        ? "border-yellow-500 bg-yellow-500/10"
                        : "border-zinc-800 bg-zinc-950 hover:border-yellow-500"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold">
                        {extra}
                      </h3>

                      <span
                        className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? "border-yellow-500 bg-yellow-500 text-black"
                            : "border-zinc-600"
                        }`}
                      >
                        {isSelected ? "✓" : ""}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Resumo do orçamento
            </h2>

            <p className="text-zinc-400 mb-6">
              Confira as informações antes de enviar sua solicitação.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Tipo de evento</p>
                <h3 className="text-xl font-bold mt-1">
                  {formData.eventType || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Convidados</p>
                <h3 className="text-xl font-bold mt-1">
                  {formData.guests || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Data</p>
                <h3 className="text-xl font-bold mt-1">
                  {formData.date || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Duração</p>
                <h3 className="text-xl font-bold mt-1">
                  {formData.duration || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 md:col-span-2">
                <p className="text-zinc-500 text-sm">Local</p>
                <h3 className="text-xl font-bold mt-1">
                  {formData.location || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-yellow-500/40 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Pacote escolhido</p>
                <h3 className="text-xl font-bold mt-1 text-yellow-500">
                  {formData.package || "Não informado"}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Bartenders estimados</p>
                <h3 className="text-xl font-bold mt-1">
                  {Math.ceil(Number(formData.guests || 0) / 40) || 1}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 md:col-span-2">
                <p className="text-zinc-500 text-sm mb-3">Extras selecionados</p>

                {formData.extras.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {formData.extras.map((extra) => (
                      <span
                        key={extra}
                        className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-full text-sm"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-400">Nenhum extra selecionado</p>
                )}
              </div>

              <div className="bg-yellow-500 text-black rounded-2xl p-6 md:col-span-2">
                <p className="font-semibold">Valor estimado</p>

                <h3 className="text-4xl font-black mt-2">
                  R$ {(
                    1000 +
                    Number(formData.guests || 0) * 17 +
                    formData.extras.length * 250
                  ).toLocaleString("pt-BR")}
                </h3>

                <p className="text-black/70 mt-2">
                  Valor aproximado. A proposta final será validada pela equipe.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Seus dados de contato
            </h2>

            <p className="text-zinc-400 mb-6">
              Agora informe seus dados para que nossa equipe envie a proposta oficial.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none md:col-span-2"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

              <input
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 outline-none"
                placeholder="Telefone / WhatsApp"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">
              <p className="text-yellow-500 font-semibold">
                Quase lá!
              </p>

              <p className="text-zinc-400 mt-2">
                Sua solicitação será enviada para análise. A proposta final poderá ser ajustada conforme detalhes do evento.
              </p>
            </div>
          </div>
        )}

          <div className="flex justify-between mt-10">
            <button
              onClick={() => {
                if (step === 1) {
                  navigate("/")
                  return
                }

                setStep(step - 1)
              }}
              className="px-6 py-3 rounded-xl border border-zinc-700 disabled:opacity-30"
            >
              Voltar
            </button>

            <button
                onClick={() => {
                  if (step === 5) {
                    alert("Solicitação enviada com sucesso!")
                    console.log(formData)
                    return
                  }

                  setStep(step + 1)
                }}
                className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-bold"
              >
                {step === 5 ? "Enviar solicitação" : "Próximo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote