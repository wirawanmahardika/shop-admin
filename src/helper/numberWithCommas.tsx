export default function numberWithDot(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
