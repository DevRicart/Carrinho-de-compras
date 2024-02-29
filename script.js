var valorTotal = [0, 0]
var valorProduto = [50.0, 30.0]
var qtd = [0, 0]

function adicionarItem(item) {
  var quantidade = document.getElementById('quantidade' + item)
  var total = document.getElementById('total' + item)
  qtd[item] += 1
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]

  quantidade.innerHTML = qtd[item]
  total.innerHTML = valorTotal[item].toFixed(2).replace('.', ',')
}
