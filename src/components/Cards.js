function Card({ priceCard }) {
  return (
    <div className='pricecard col-lg-4 col-md-12 col-sm-12'>
      <h4>{priceCard.title}</h4>
      <h2>
        ${priceCard.price} <span className='text-muted'>/ mo</span>
      </h2>
      {priceCard.desc.map((descData) => {
        return <p>{descData.content}</p>
      })}
      {priceCard.btn.map((btnData) => {
        return (
          <button
            className={btnData.btnEff ? 'hover-eff-btn' : 'normal-eff-btn'}
          >
            {btnData.btnText}
          </button>
        )
      })}
    </div>
  )
}

export default Card
