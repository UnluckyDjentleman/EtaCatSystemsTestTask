import { createContext, ReactNode, useMemo, useState } from "react";
import Assets from "../../../constants/types/assets";
import ModalAdd from "../modalAdd";
import ModalPortfolio from "../modalPortfolio";
import {ModalTemplate} from "../components/modalTemplate";
import { createPortal } from "react-dom";

const initialState={
    viewModalList:()=>{},
    viewCoinAddModal:(_:Assets)=>{},
    closeModal: ()=>{}
}

export const ModalContext=createContext(initialState);

export const ModalProvider=({children}:{children: ReactNode})=>{
    const [isOpen, setIsOpen]=useState<boolean>();
    const [activeModal, setActiveModal]=useState<'addCoin'|'coinList'|null>(null)
    const [activeCoin, setActiveCoin]=useState<Assets|null>(null);

    const contextVal={
        viewModalList:()=>{
            console.log('e')
            setIsOpen(true);
            setActiveModal('coinList');
        },
        viewCoinAddModal:(coin:Assets)=>{
            console.log('a')
            setIsOpen(true);
            setActiveModal('addCoin');
            setActiveCoin(coin);
        },
        closeModal:()=>{
            setIsOpen(false);
            setActiveModal(null)
        }
    }

    const getModal=()=>{
        switch(activeModal){
            case 'addCoin': return <ModalAdd coin={activeCoin as Assets}/>
            case 'coinList': return <ModalPortfolio/>
            default: return undefined;
        }
    }

    return(
        <ModalContext.Provider value={contextVal}>
            {children}
            {isOpen&&createPortal(getModal(),document.body)}
        </ModalContext.Provider>
    )
}