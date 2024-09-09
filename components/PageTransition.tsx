"use client"; // Este arquivo é apenas do lado do cliente

import { AnimatePresence, motion } from "framer-motion"; // Importa componentes do framer-motion
import { usePathname } from "next/navigation"; // Importa hook para obter o pathname atual
import React from "react"; // Importa React

const PageTransition = ({children}: {children: React.ReactNode}) => { // Define o componente PageTransition que recebe children como prop
    const pathname = usePathname(); // Obtém o pathname atual

    return (
        <AnimatePresence mode="wait"> 
        {/* Componente que anima a presença de elementos */}
            <motion.div
                key={pathname} // Usa o pathname como chave para animação
                initial={{ opacity: 0 }} // Define o estado inicial da opacidade
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } }} // Define a animação para opacidade com atraso, duração e easing
                exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }} // Define a animação de saída
                className="h-screen w-screen bg-primary top-0 pointer-events-none" // Define classes CSS para o div
            >
                {children} 
                {/* Renderiza os children passados para o componente */}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition; // Exporta o componente PageTransition como padrão