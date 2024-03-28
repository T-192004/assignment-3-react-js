import './index.css'

const ImageItem = props => {
  const {eachImage, checkThumnailWithImage} = props
  const {id, thumbnailUrl} = eachImage
  const onClickCheckImage = () => {
    checkThumnailWithImage(id)
  }
  return (
    <li>
      <button className="image-btn" onClick={onClickCheckImage} type="button">
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
