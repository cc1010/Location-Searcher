import { Header, Icon } from 'semantic-ui-react'

function HeaderComp() {
	return (
	<Header as='h2' icon>
    <Icon name='travel' />
    Destination Information
    <Header.Subheader>
    Discover the World
    </Header.Subheader>
  </Header>
  )
}
export default HeaderComp;
