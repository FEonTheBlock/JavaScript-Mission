export const getRootElement = () => {
  const root = document.getElementById('app')

  if (!root) throw new Error('no exist root element!')

  return root
}

export const getFormData = <T>() =>
  [...new FormData(...document.forms)].reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: key === 'name' ? value : Number(value),
    }),
    {} as T
  )
