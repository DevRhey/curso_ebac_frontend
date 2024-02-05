<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import Resultado from './components/Resultado.vue';

const state = reactive({
  filtro: 'soma',
  num1: '',
  num2: '',
  resultado: '',
})

const soma = () => {
  const resultadoSoma = state.num1 + state.num2
  state.resultado = resultadoSoma;
  return state.resultado
}

const subtracao = () => {
  const resultadoSubtracao = state.num1 - state.num2
  state.resultado = resultadoSubtracao;
  return state.resultado
}

const multiplicacao = () => {
  const resultadoMultiplicacao = state.num1 * state.num2
  state.resultado = resultadoMultiplicacao;
  return state.resultado
}

const divisao = () => {
  const resultadoDivisao = state.num1 / state.num2
  state.resultado = resultadoDivisao
  return state.resultado
}
</script>

<template>
  <div class="container">
    <div class="background-calculator">
      <Cabecalho />
      <Formulario :valorPrimeiroInput="event => state.num1 = Number(event.target.value)" :valorSegundoInput="event => state.num2 = Number(event.target.value)" :filtro="state.filtro" :selecionaFiltro="event => state.filtro = event.target.value"/>
      <Resultado :filtro="state.filtro" :funcaoSoma="soma()" :funcaoSub="subtracao()" :funcaoMult="multiplicacao()" :funcaoDivisao="divisao()" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding: 0;
  padding-bottom: 196px;
}

.background-calculator {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 56px;
  background-color: #dfb66b;
}

@media screen and (min-width: 360px) {
  .container {
    width: 80%;
  }
}
</style>
