
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BodyComponent from './BodyComponent';
import SkeletonList from './SkeletonList';
import { useParams, useNavigate } from 'react-router-dom';
import useBookHook from '../hooks/useBookHook';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import useBuyBookHook from '../hooks/useBuyBookHook';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

const Book = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [enableBuy, setEnableBuy] = useState(false);
  
  const {
        isLoading,
        error,
        data,
  } = useBookHook(Number(params?.id));

  const {
    isLoading: isLoadingBuying,
    data: successMsg,
} = useBuyBookHook(Number(params?.id), enableBuy);

 console.log("IS LOADING ", isLoadingBuying)
 console.log("IS BUY SUCCESS ", successMsg)
 
  return (
    <BodyComponent>
        <> 
            {
                isLoading || error || !data?.data?.book ? (
                    <SkeletonList loop={1} />
                ) : (

                    <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}> <span onClick={()=>navigate(`/`)}> Back  </span> </Grid>
                            
                            {
                                successMsg && (
                                    <Grid item xs={12}>
                                        <Alert   severity="success">
                                            <h4>{successMsg.data.message}</h4>
                                            <h6>You purchased:</h6>
                                            <p> {successMsg.data?.book?.title} by {successMsg.data?.book?.author} </p>
                                        </Alert>
                                    </Grid>
                                )
                            }
                            <Grid item xs={3}>
                                <Paper
                                    sx={{
                                    height: 140,
                                    width: '100%',
                                    marginTop: '1rem',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <h2>{data?.data?.book.title}</h2>
                                <p><small>Author: {data.data.book.author}</small></p>
                                <p>Availability: {data.data.book.availableStock}</p>
                                <p>Price: {data.data.book.price}</p>
                                <p><Button disabled={Boolean(successMsg?.data?.message)} onClick={()=>setEnableBuy((b)=>!b)} variant="contained">Buy!</Button></p>

                                
                            </Grid>
                        </Grid>
                    </Box>

                )
            }
        </>
        
    </BodyComponent>
  );
}

export default Book;
