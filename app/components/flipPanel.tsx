'use client';

export default function FlipPanel({
  className = '',
  frontContent,
  backContent,
  frontImage,
  backImage,
}) {
  return (
    <div className={`cc-flip-panel-container ${className}`}>
      <div className="cc-flip-panel-inner-wrapper">
        <div
          className="cc-front-panel-container"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="cc-front-panel-inner-wrapper cc-inner-wrapper">
            <div className="cc-front-panel-content-wrapper cc-content-wrapper">
              {frontContent}
            </div>
          </div>
        </div>
        <div
          className="cc-back-panel-container"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="cc-back-panel-inner-wrapper cc-inner-wrapper">
            <div className="cc-back-panel-content-wrapper cc-content-wrapper">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
