import { connect } from "react-redux";

const mapStateToProps = (state:any) => {
    const { numberRight, totalQuestions } =  state.gamePlay;
    return {
        numberRight, totalQuestions
    }
}

function ScoreBoard({ numberRight, totalQuestions }: any) {
  return (
    <div>
      <div>Score:</div>
      <div style={{ marginLeft: 6 }}>
        {numberRight}/{totalQuestions}
      </div>
    </div>
  );
}
export default connect(mapStateToProps, null)(ScoreBoard);
