// import React, { Component } from "react";

// import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// class HistorySample extends Component {
//   // 뒤로가기
//   handleGoBack = () => {
//     this.props.history.goback();
//   };

//   // 홈으로 이동
//   handleGoHome = () => {
//     this.props.history.push("/");
//   };

// componentDidMount() {
//   // 마운트 할 때마다 해당 코드 실행
//   this.unblock = this.props.history.block("Are you leaving now?");
// }
// componentWillUnmount() {
//   // 언마운트되면 해당 코드 실행
//   if (this.unblock) {
//     this.unblock();
//   }
// }

//   render() {
// return (
//   <div>
//     <button onClick={this.handleGoBack}>Back</button>
//     <button onClick={this.handleGoHome}>Home</button>
//   </div>
// );
//   }
// }

// export default HistorySample;

const HistorySample = () => {
  const navigate = useNavigate();

  // 뒤로가기
  const onGoBack = () => {
    alert("Are you leaving now?");
    navigate(-1);
  };
  // 홈으로 가기
  const onGoHome = () => {
    alert("Are you leaving now?");
    navigate("/");
  };

  return (
    <div>
      <button onClick={onGoBack}>Back</button>
      <button onClick={onGoHome}>Home</button>
    </div>
  );
};

export default HistorySample;
