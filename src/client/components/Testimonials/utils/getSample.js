const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1))

export default (array, n) => {
  const shuffled = [...array]
  const max = Math.max(Math.min(n, array.length), 0)

  return Array(max)
    .fill(0)
    .map((_, index) => {
      const randomIndex = random(index, array.length - 1)
      const result = shuffled[randomIndex]
      shuffled[randomIndex] = shuffled[index]

      return result
    })
}
