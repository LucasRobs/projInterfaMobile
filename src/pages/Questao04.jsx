import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Questao04() {
  const [pais, setPais] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v2/region/africa?fields=name,population')
    .then(response => response.json())
    .then(data => {setPais(data.reduce((prev,current)=>{return (prev.attribute > current.attribute) ? prev : current}))});
  },[])
  return <>
    <br/>

  <strong>Questão 4</strong>
  {pais.name}
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
