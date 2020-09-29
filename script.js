const phone = document.getElementById("input-phones")
const price = document.querySelector('#input-price')
const device = document.querySelector('#input-devices')
const subtotal = document.querySelector('#total-cost')
const totalWithTax = document.querySelector('#total-tax')
const order = document.querySelector('#total-order')

function calculateTotal() {
    const phoneValue = phone.value
    const priceValue = price.value
    const deviceValue = device.value

    const subtotalAmount = priceValue * deviceValue
    const totalWithTaxAmount = subtotalAmount + (subtotalAmount * 0.0725)

    subtotal.innerHTML = '$' + subtotalAmount.toFixed(2)
    totalWithTax.innerHTML = '$' + totalWithTaxAmount.toFixed(2)
    order.innerHTML = `Your order of ${deviceValue} ${phoneValue}'s will be processed soon!`
}

phone.addEventListener('input', calculateTotal)
price.addEventListener('input', calculateTotal)
device.addEventListener('input', calculateTotal)
order.addEventListener('input', calculateTotal)