import './StockTag.scss';

const StockTag = ({ status }) => {
  let stockClass = '';
  let textClass = '';

  if (status === 'In Stock') {
    stockClass = 'in-stock';
    textClass = 'in-stock__text';
  } else if (status === 'Out of Stock') {
    stockClass = 'out-stock';
    textClass = 'out-stock__text';
  }

  return (
    <div className={`stock-tag ${stockClass}`}>
      <p className={`stock-tag__text ${textClass}`}>{status}</p>
    </div>
  )
}

export default StockTag;