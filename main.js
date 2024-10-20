async function getData() {
    const url = "https://dadosabertos.camara.leg.br/api/v2/partidos/1/membros?dataInicio=AAAA-MM-DD&dataFim=AAA-MM-DD&ordenarPor=id&ordem=asc&itens=5&pagina=1"

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro ao obter os dados da API");
        }

        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.log(error);
    }
}
getData()