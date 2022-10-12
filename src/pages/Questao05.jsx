import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export default function Questao05() {
  const [pais, setPais] = useState();
  const [aux, setAux] = useState("africa");

  useEffect(()=>{
    fetch(`https://restcountries.com/v2/region/${aux}?fields=name,population`)
    .then(response => response.json())
    .then(data => {setPais(data.reduce((prev,current)=>{return (prev.attribute > current.attribute) ? prev : current}))});
  },[aux])
  return <>
    <br/>
    <br/>

  <strong>Questão 5</strong>
  {pais?.name}
  <View style={styles.view}>
    <button color="#333" style={styles.button} onClick={() => {setAux("americas")}}>americas</button>
    <button color="#333" style={styles.button} onClick={() => {setAux("asia")}}>asia</button>
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
