import React from 'react'

function CurrencyFix({price}) {
  return (
    <p>{`R$${price.toString().replace(".",',')}`}</p>
  )
}

export default CurrencyFix