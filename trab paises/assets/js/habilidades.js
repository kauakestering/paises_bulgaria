const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>MOEDA</p> <br> <p>O lev é a moeda da Bulgária. Em búlgaro antigo, a palavra "lev" significava "leão", a palavra leão na linguagem moderna é lаv. O lev é dividido em 100 stotinki.</p> <br>',
                    '<p>PIB</p> <br> <p>$65,197 bilhões(nominal, 2018), $162,186 bilhões  (PPC, 2018).</p> <br>',
                    '<p>População</p> <br> <p>6.899 milhões (2021).</p> <br>',
                    '<p>LINGUAGEM</p> <br> <p>O búlgaro é uma língua eslava do sul oriental falada no sudeste da Europa, principalmente na Bulgária. É a língua dos búlgaros.</p> <br>',
                    '<p>POLITICA</p> <br> <p>O presidente da Bulgária é eleito para o mandato de cinco anos com direito a uma reeleição, o qual desempenha apenas a função de chefe de estado do país.</p> <br>',
                    '<p>CULTURA</p> <br> <p> cultura búlgara reúne fortes tradições dos povos turcos e eslavos, que foram responsáveis pela formação da sociedade local. Os búlgaros, mediante sua resistência às invasões diversas, desenvolveram tradições culturais muito particulares.</p> <br>',
                    '<p>Curiosidades</p> <br> <p>A Bulgária é considerada o berço do alfabeto cirílico.      A Igreja de Boyana e o Mosteiro de Rila são duas construções históricas búlgaras que são Patrimônio Mundial da Unesco..</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );



