import { useQuery } from '@tanstack/react-query';
import { getBook } from "../api/books";


export const useBookHook =(id: number )=>{
    
        const { status, data, error, isLoading } = useQuery( {
                queryKey: ['book', id],
                queryFn:() => getBook(id),
        })

    return {
        isLoading,
        status,
        data,
        error
    };

}

export default useBookHook;