import { useEffect, useState } from 'react'
import { Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
function NetherCoordsCalculator() {
  const [overworldX, setOverworldX] = useState('');
  const [overworldZ, setOverworldZ] = useState('');

  const [netherX, setNetherX] = useState(0);
  const [netherZ, setNetherZ] = useState(0);

  // useEffect(() => {
  //   if (overworldX === '' || overworldZ === '') {
  //     setNetherX(0);
  //     setNetherZ(0);
  //   } else {
  //     calculateNetherCoords();
  //   } 
  // }, [overworldX, overworldZ]);

  const calculateNetherCoords = () => {
    setNetherX(Math.floor(parseInt(overworldX) / 8));
    setNetherZ(Math.floor(parseInt(overworldZ) / 8));
  }



  return (
    <>
      {/* Add 2 text inputs */}
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter your X coordinate'
        onChangeText={setOverworldX}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter your Z coordinate'
        onChangeText={setOverworldZ}
      />
      {/* Add a button */}
      <Pressable style={styles.button} onPress={calculateNetherCoords}>
        <Text style={styles.textWhite}>Calculate</Text>
      </Pressable>
      <Button mode="contained">
        Press me
      </Button>
      {/* display nether coordinates */}
      <Text style={styles.text}>Nether Coordinates: {netherX}, {netherZ}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#000',
    color: 'white',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  textWhite: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  }
});

export default NetherCoordsCalculator