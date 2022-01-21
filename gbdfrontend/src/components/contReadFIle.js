import DragDrop from './dragdrop';
import { Container} from  'react-bootstrap';
import Titulo from './tituloapp';


function Contreadfile(){
return(
    <Container className="container-fluid fileuploader">
        <Titulo />
        <DragDrop />
    </Container>

)

}

export default Contreadfile;