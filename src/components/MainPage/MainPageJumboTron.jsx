import React from "react";

export default function MainPageJumboTron(props) {
  const name = props.student ? props.student.name : "";
  const { handleClick } = props;
  return (
    <div
      style={{ width: "100%" }}
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className="jumbotron"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)"
        }}
      >
        <div class="container">
          <div className="text-white text-center py-5 px-4 my-5">
            <div>
              <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
                <strong>Who's Turn Is It?</strong>
              </h2>
              <h2 className="mx-5 mb-5 ">{name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
