import './componentStyles.css'

export const Header = () => {
    return <div className="header-container">
        <div className="header-home" onClick={() => {
            window.location.href="/"
        }}>Home</div>
    </div>
}