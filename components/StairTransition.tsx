"use client"; // Indica que este código deve ser executado no cliente (navegador).

import { AnimatePresence, motion } from "framer-motion"; // Importa componentes e funções do framer-motion para animações.
import { usePathname } from "next/navigation"; // Importa o hook usePathname do Next.js para obter o caminho atual.
import React from "react"; // Importa a biblioteca React.
import Stairs from "./Stairs"; // Importa o componente Stairs do arquivo local Stairs.

const StairTransition = () => {
    const pathname = usePathname(); // Obtém o caminho atual usando o hook usePathname.
    return (
        <>
        <AnimatePresence mode="wait"> 
            {/* Envolve os elementos filhos com AnimatePresence para animações de presença. */}
            <div key={pathname}> {/* Define uma chave única baseada no caminho atual para animar a transição. */}
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"> {/* Define um contêiner de tela cheia fixo com classes de estilo. */}
                    <Stairs /> {/* Renderiza o componente Stairs dentro do contêiner. */}
                </div>
            </div>
        </AnimatePresence>
        </>
    );
}

export default StairTransition; // Exporta o componente StairTransition como padrão.