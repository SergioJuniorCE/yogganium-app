import React from 'react'
import { Button, Text } from 'react-native';

function HomeScreen({ navigation }: { navigation: any }): JSX.Element {
  return (
    <>
      <Text>HomeScreen</Text>
      <Button
        title="Go to About "
        onPress={() => navigation.navigate('About')}
      />
    </>
  )
}

export default HomeScreen