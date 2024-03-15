
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BodyComponent from './BodyComponent';
import useBooksHook from '../hooks/useBooksHook';
import SkeletonList from './SkeletonList';
import DataList from '../modules/DataList';

const Books = () => {
   
  const {
        isLoading,
        error,
        data,
  } = useBooksHook();

  return (
    <BodyComponent>
       <>
       {
            isLoading || error ? (
                <SkeletonList loop={3} />
            ) : (

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            {data?.data?.books && <DataList list={data.data.books} />}
                        </Grid>
                    </Grid>
                </Box>

            )
        }
       </>
        
        
    </BodyComponent>
  );
}

export default Books;
