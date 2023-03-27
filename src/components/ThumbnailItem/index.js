// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, image} = props
  const {thumbnailUrl, imageAltText, id} = eachImage

  const updateActiveId = () => {
    image(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="btn-bg" onClick={updateActiveId}>
        <img src={thumbnailUrl} alt={imageAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
