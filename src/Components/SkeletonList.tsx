
import Skeleton from '@mui/material/Skeleton';

interface IProps {
    loop:number
}

const SkeletonList = (props: IProps) => {
  
    const { loop } =  props;

    const display =() : number[] => {
        let arr = [];
        for(let i = 0; i <= loop; i++ ) {
            arr.push(i)
        }
        return arr;
    }
  return (
            <>
                {display().map((ind: number)=><Skeleton key={ind} animation="wave" style={{ height: '2.5rem' }} /> )}
            </>
  );
}

export default SkeletonList;
