import { useState } from 'react'
import './componentStyles.css'

export const ContentBox = ({ title, content, buttonClick }) => {
    const [showContent, setShowContent] = useState(true);


    return <div className="content-box">
        <div className="content-box-title" onClick={() => setShowContent(prev => !prev)}>
            <div>{title}</div>
            <button className="content-box-cta" onClick={(e) => { e.preventDefault(); buttonClick(); }}>View</button>
        </div>
        <div
            style={showContent ? { fontSize: "20px" } : { fontSize: "0px", background: "lightGray" }}
            className="content-box-content"
        >
            {content}
        </div>
    </div>
}