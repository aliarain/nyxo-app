import 'react-native'
import React from 'react'
import { matchComponentToSnapshot } from '@helpers/snapshot'
import PerkList from './PerkList'

describe('<PerkList/>', () => {
  it('it renders correctly', () => {
    matchComponentToSnapshot(<PerkList />)
  })
})
