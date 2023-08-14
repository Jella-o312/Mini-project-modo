
const Review =() =>{
  return(
    <div className="review-container">
      {/* 추후 carousel 기능으로 넘어가게 만들어야함 */}
      <div className="moim-review-container">
        <div className="moim-review-title">소모임 리뷰</div>
        <div className="moim-review-box">
          <div className="moim-review-inner-box"><p>리뷰 1</p></div>
          <div className="moim-review-inner-box"><p>리뷰 2</p></div>
          <div className="moim-review-inner-box"><p>리뷰 3</p></div>
        </div>
      </div>

      <div className="mentoring-review-container">
        <div className="mentoring-review-title">멘토링 리뷰</div>
        <div className="mentoring-review-box">
          <div className="mentoring-review-inner-box"><p>리뷰 1</p></div>
          <div className="mentoring-review-inner-box"><p>리뷰 2</p></div>
          <div className="mentoring-review-inner-box"><p>리뷰 3</p></div>
        </div>
      </div>
    </div>
  )
}

export default Review;