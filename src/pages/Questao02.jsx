import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Questao02() {
const [signal, setSignal] =  useState(0);
const [num1, setNum1] =  useState(0);
const [num2, setNum2] =  useState(0);
const [result, setResult] =  useState(0);

useEffect(()=>{getResult()},[num1,num2,signal])

function getResult(){
if(!num1 || !num2 || !signal) return;
if(signal === "+") setResult( num1 + num2);
if(signal === "-") setResult( num1 - num2);
if(signal === "*") setResult( num1 * num2);
if(signal === "/") setResult( num1 / num2);
}

  return <>
<br/>
  <strong>Questão 2</strong>
  <View style={styles.view}>

  <>
  <TextInput   style={styles.input} placeholder="número 1" onChangeText={(value)=>setNum1(parseInt(value))}  keyboardType="numeric"/>
  <TextInput   style={styles.input} placeholder="número 2" onChangeText={(value)=>setNum2(parseInt(value))} keyboardType="numeric"/>
  </>
  </View>
  <View style={styles.view}>
  <button color="#333" style={styles.button} onClick={() => setSignal("+")}>+</button>
  <button color="#333" style={styles.button} onClick={() => setSignal("-")}>-</button>
  <button color="#333" style={styles.button} onClick={() => setSignal("*")}>x</button>
  <button color="#333" style={styles.button} onClick={() => setSignal("/")}>÷</button>
  </View>
  <View style={styles.view}>
  <strong>Resultado: {result} </strong>
  </View>
  </>

}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    width: "100%",
    borderWidth: 0.5,
    padding: 10,
  },
  view: {
    flexDirection:"row",
    justifyContent: 'space-between',
  },
  button:{
    borderWidth: 1,
    borderRadius: 5,
    minWidth:"20%",
    marginBottom: 10,
    textAlign:'center',
    fontSize: 30,
    backgroundColor: "#fff"
  }
});

/*
temos com um projeto da univercidade a petWalk
estamos em um programa de falculdade e  processo de validação do projeto atraves da venda
ja temos um proficional e precisamos realizar a nossa primeira venda

- projeto da univercidade
- fase de validação do nosso aplicativo
- apresenta a empresa caso precise
- estamos com uma passeadora proficil
- apresenta o aplicativo
- fala sobre nosso objetivo de realizar uma venda
*/