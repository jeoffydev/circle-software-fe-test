

import Container from '@mui/material/Container';
import Header from './Header';

interface IProps {
    children: JSX.Element;
}
const BodyComponent =(  props: IProps ) => {
    const { children } = props;
  return (
    <Container maxWidth="lg">
        <Header />
        {children}
    </Container>
  );
}

export default BodyComponent;
