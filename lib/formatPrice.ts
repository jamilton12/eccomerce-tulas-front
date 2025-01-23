export function formatPrice(price: number) {
  const priceFormated = new Intl.NumberFormat('co-CO', {
    style: "currency",
    currency: "COP"
  })
  const filnalPrice = priceFormated.format(price)
  return filnalPrice
}