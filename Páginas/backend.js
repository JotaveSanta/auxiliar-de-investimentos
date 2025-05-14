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
    let menuMobile = document.querySelector('ferramentamenu');
    if (menuMobile.classList.contains('openmenu')) {
      menuMobile.classList.remove('openmenu');
    } else {
      menuMobile.classList.add('openmenu');
    }
  }