export default function Preloader() {
  return (
    // Preloader Start
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/loader.svg" alt="" />
        </div>
      </div>
    </div>
    // Preloader End
  );
}
