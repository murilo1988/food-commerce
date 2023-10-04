// styles
import { Container } from './styles'

// assets
import { ReactComponent as MenuImg } from '../../../assets/menu.svg'
import { ReactComponent as BurgerIcon } from '../../../assets/burger.svg'
import { ReactComponent as DrinkIcon } from '../../../assets/soda.svg'
import { ReactComponent as PizzaIcon } from '../../..//assets/pizza.svg'
import { ReactComponent as IceCreamIcon } from '../../../assets/ice-cream.svg'

// componets
import Button from '../../atoms/Button/Button'
import ListItem from '../../molecules/lListItem/ListItem'

export function Sidebar() {
  return (
    <Container>
      <Button>
        <MenuImg />
      </Button>
      <nav>
        <ul>
          <ListItem className='active' text='Hamburgueres' link='#'>
            {<BurgerIcon />}
          </ListItem>
          <ListItem text='Pizzas' link='#'>
            {<PizzaIcon />}
          </ListItem>
          <ListItem text='Drinks' link='#'>
            {<DrinkIcon />}
          </ListItem>
          <ListItem text='IceCream' link='#'>
            {<IceCreamIcon />}
          </ListItem>


        </ul>
      </nav>
    </Container >
  )
}
