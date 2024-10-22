import { useCallback} from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useRedux";
import { setPage, setSearch } from "../../store/reducers/filterReducer";

export default function Input(){
    const dispatch=useAppDispatch();
    const search=useAppSelector(state=>state.filter.search)
    const setSearchString=useCallback((str: string)=>{
        dispatch(setPage(0))
        dispatch(setSearch(str));
    },[search])
    return(
        <>
            <input 
            type="text"
            value={search} 
            onChange={e=>setSearchString(e.currentTarget.value)} 
            className="grow w-full md:mr-8 rounded-xl px-4 py-2 outline-none border" 
            placeholder={'Enter coin name'}/>
        </>
    )
}