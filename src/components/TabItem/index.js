import './index.css'

const TabItem = props => {
  const {eachTab, activeTabId, updateActiveId} = props
  const {tabId, displayText} = eachTab
  const activeTabClass = activeTabId === tabId ? 'active' : ''
  const onClickUpdateTabId = () => {
    updateActiveId(tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`tab-btn ${activeTabClass}`}
        type="button"
        onClick={onClickUpdateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
