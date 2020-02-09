import { createStackNavigator } from 'react-navigation-stack'
import { PrimaryNavigator } from './primary-navigator'
import {} from '../../modules/screens' // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
	{
		primaryStack: { screen: PrimaryNavigator },
	},
	{
		headerMode: 'none',
		navigationOptions: { gesturesEnabled: false },
	},
)
