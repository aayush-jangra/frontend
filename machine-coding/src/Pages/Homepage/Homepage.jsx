import { ContentBox } from '../../components/ContentBox'
import { questions } from '../../constants/questions'
import './homepageStyles.css'

export const Homepage = () => {
    return <div className="container">
        <h1>Welcome and explore the frequently asked machine coding round questions</h1>
        <div className="questions">
            {questions.map((ques) => <ContentBox key={ques.path} title={ques.title} content={ques.description} buttonClick={() => { window.location.pathname = ques.path }} />)}
        </div>
    </div>
}