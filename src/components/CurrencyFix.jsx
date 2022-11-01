import React from 'react'

function CurrencyFix({price, className}) {
  return (
    <p className={className}>{`R$${price.toString().replace(".",',')}`}</p>
  )
}

export default CurrencyFix