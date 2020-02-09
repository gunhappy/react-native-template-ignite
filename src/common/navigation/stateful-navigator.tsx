import * as React from 'react'
import { observer } from 'mobx-react-lite'
import {
	// @ts-ignore
	getNavigation,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation'
import { useStores } from 'common/models/root-store'
import { RootNavigator } from './root-navigator'

let currentNavigation: NavigationScreenProp<NavigationState> | undefined

export const StatefulNavigator: React.FunctionComponent<{}> = observer(() => {
	const {
		navigationStore: { state, dispatch, actionSubscribers },
	} = useStores()

	currentNavigation = getNavigation(
		RootNavigator.router,
		state,
		dispatch,
		actionSubscribers(),
		{},
		() => currentNavigation,
	)

	return <RootNavigator navigation={currentNavigation} />
})
