import { useQuery } from '@tanstack/react-query';
import { getBuyBook } from "../api/books";


export const useBuyBookHook =(id: number, enableBuy: boolean )=>{
    
        const { status, data, error, isLoading } = useQuery( {
                queryKey: ['buybook', id],
                queryFn:() => getBuyBook(id),
                enabled: enableBuy
        })

    return {
        isLoading,
        status,
        data,
        error
    };

}

export default useBuyBookHook;