const alunos = [
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
    { nome: '', nota: 0 },
]

const alunosComNota = alunos.map(aluno => {
    nomeAluno = prompt('Digite o nome do aluno')
    notaAluno = prompt(`Digite a nota do aluno ${nomeAluno}`)

    return {
        name: nomeAluno,
        nota: notaAluno
    }
}).filter(aluno => {
    if (aluno.nota >= 6) {
        return aluno
    }
})

console.log(alunosComNota);