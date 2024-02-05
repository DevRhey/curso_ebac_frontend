<script setup>
    const props = defineProps(['filtro', 'funcaoSoma', 'funcaoSub', 'funcaoMult', 'funcaoDivisao'])
</script>

<template>
    <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
            <p class="m-0 me-2">Resultado =</p>
            <div class="border border-primary rounded">
                <p class="m-0 p-2 fw-bold" v-if="props.filtro === 'soma'">{{ props.funcaoSoma }}</p>
                <p class="m-0 p-2 fw-bold" v-else-if="props.filtro === 'subtracao'">{{ props.funcaoSub }}</p>
                <p class="m-0 p-2 fw-bold" v-else-if="props.filtro === 'multiplicacao'">{{ props.funcaoMult }}</p>
                <p class="m-0 p-2 fw-bold" v-else>{{ props.funcaoDivisao }}</p>
            </div>
        </div>
    </div>
</template>