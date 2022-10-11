import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export default function Questao03() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(()=>{
    console.log(page)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+page)
    .then(response => response.json())
    .then(data => {setPokemons(data.results)});
  },[page])
  return <>
    <br/>

  <strong>Questão 3</strong>
    {pokemons?.map((pokemon)=>
      <>{pokemon?.name}<br/></>
    )}

    <View style={styles.view}>

    <button color="#333" style={styles.button} onClick={() => {setPage(page+1)}}>passar</button>
    <button color="#333" style={styles.button} onClick={() => {if(page === 0)return; setPage(page-1)}}>voltar</button>
    </View>
  </>
}

const styles = StyleSheet.create({
button:{
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  textAlign:'center',
  fontSize: 20,
  backgroundColor: "#fff"
},
view:{
  flexDirection:"row",
  margin: 10,
  justifyContent: 'space-around',
},
names:{
marginLeft:10
}
});
