function calculoinvestir(){
    //Função da ferramenta 1 (guia pelo salario)
    const caixa50 = document.getElementById('cinquentaresult');
    const caixa30 = document.getElementById("30result");
    const caixa20 = document.getElementById("20result");
    let caixa = document.getElementById("final")
    const salario = document.getElementById("salario").valueAsNumber;
    let cinquenta = salario / 2
    let trinta = 30 / 100 * salario
    let vinte = salario / 5
    caixa50.textContent = `Você terá R$${cinquenta} para despesas essenciais`;
    caixa30.textContent = `Você pode usar R$${trinta} para lazer e gastos não essenciais`
    caixa20.textContent = `Você tem que deixar R$${vinte} para Poupança e Investimentos`
} 

function menuShow() {
 const conteudo = document.getElementById('sidebar');
    if (conteudo.style.display === 'none') {
      conteudo.style.display = 'block';
    } else {
      conteudo.style.display = 'none';
    }
  }
function closemenu(){
  const conteudo = document.getElementById('sidebar');
  if(conteudo.style.display === 'block'){
  conteudo.style.display = 'none';}
}
function voltaraomenu(){
  window.location.href = "menu.html"
}