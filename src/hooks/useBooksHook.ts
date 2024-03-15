import { useQuery } from '@tanstack/react-query';
import { getBooksList } from "../api/books";


export const useBooksHook =()=>{
    
        
        const { status, data, error, isLoading } = useQuery({
                queryKey: ['books'],
                queryFn: getBooksList,
        }) 

    return {
        isLoading,
        status,
        data,
        error
    };

}

export default useBooksHook;