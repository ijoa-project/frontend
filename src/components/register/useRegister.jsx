import { useState } from 'react'

function useRegister(initialState = []) {
  const [selectedItem, setSelectedItem] = useState(initialState)

  const onChangeItem = (item) => {
    setSelectedItem((currentItem) => {
      if (currentItem.includes(item)) {
        return currentItem.filter((i) => i !== item)
      } else {
        return [...currentItem, item]
      }
    })
  }
  return [selectedItem, onChangeItem]
}
export default useRegister
