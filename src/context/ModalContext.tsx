import { createContext, useContext, useState, ReactNode } from 'react'

type ModalContextType = {
     activeModal:string|null
     setActiveModal:(modal: string | null) => void;
}

//  default context values
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    return (
        <ModalContext.Provider value={{ activeModal, setActiveModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// consuming the context
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};