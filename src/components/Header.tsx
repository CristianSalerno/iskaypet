
import { Link } from 'react-router-dom';
import {Typography, Button, ButtonGroup} from '@mui/material';
import styled from '@mui/material/styles/styled';

const Header = () => {
  const Header = styled('header')`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
   
  `;

  const MenuButton = styled(Button)`
    a {
      text-decoration: none;
      color: inherit; 
      font-size: 1rem;
      font-weight: 600;
    }
  `;


  const buttons = [
    <Link to="/personal-data"><MenuButton variant="text" key="one">Mis Datos</MenuButton></Link>,
    <Link to="/my-tasks"><MenuButton variant="text" key="two">Mis Tareas</MenuButton></Link>,
    <Link to="/returns"><MenuButton variant="text" key="three">Mis Devoluciones</MenuButton></Link>,
  ];


  return (
    <Header>
      <Typography variant='h3'>Tiendanimal</Typography>
      

      <ButtonGroup  orientation="horizontal" aria-label="Vertical button group">
        {buttons}
      </ButtonGroup>
      
    </Header>
  );
};

export default Header;
