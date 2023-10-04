// styles
import { Container } from './styles'

// assets
import menuImg from '../../../assets/menu.svg'
import burgerIcon from '../../../assets/burger.svg'
import drinkIcon from '../../../assets/soda.svg'
import pizzaIcon from '../../..//assets/pizza.svg'
import iceCreamIcon from '../../../assets/ice-cream.svg'

// componets
import Button from '../../atoms/Button/Button'
import CategoryIcon from './../../atoms/Icon/CategoryIcon';
import ListItem from '../../molecules/ListItem/ListItem';


export function Sidebar() {
  return (
    <Container>
      <Button>
        <CategoryIcon icon={menuImg} alt="Abrir e fechar o menu" />
      </Button>
      <nav>
        <ul>
          <ListItem icon={burgerIcon} text='Hamburgueres' link='#' />
          <ListItem icon={pizzaIcon} text='Pizzas' link='#' />
          <ListItem icon={drinkIcon} text='Drinks' link='#' />
          <ListItem icon={iceCreamIcon} text='Ice-Cream' link='#' />
        </ul>
      </nav>
    </Container >
  )
}
