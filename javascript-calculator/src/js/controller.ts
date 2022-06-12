export const handleDigitClick = (e: MouseEvent) => {
  const digit = (e.target as HTMLButtonElement).textContent

  console.log(digit)
}

export const handleOperationClick = (e: MouseEvent) => {
  const operation = (e.target as HTMLButtonElement).textContent

  console.log(operation)
}

export const handleModifierCLick = (e: MouseEvent) => {
  console.log(e.target)
}
