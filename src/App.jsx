import Cabecalho from "./componentes/Cabecalho"
import EstilosGlobais from "./componentes/EstilosGlobais"
import ExibeProdutos from "./componentes/ExibeProdutos"

import { ProdutosProvider } from "./context/ProdutosContext";

function App() {
  

  return (
    <>
      <EstilosGlobais />
      <ProdutosProvider>
        <Cabecalho />
        <ExibeProdutos />
      </ProdutosProvider>
    </>
  )
}

export default App
