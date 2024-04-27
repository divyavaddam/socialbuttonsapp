const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="social-buttons-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons">
        <Button text="Like" className="like-button" />
        <Button text="Comment" className="comment-button" />
        <Button text="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
