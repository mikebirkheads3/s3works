export default function NotFound() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Page not <span>found</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">404 Error page</li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* error Page start */}
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                <img src="/images/404-error-img.png" alt="" />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Oops! page not <span>found</span></h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.4s">The page you are looking for does not exist.</p>
                  <a className="btn-default wow fadeInUp" data-wow-delay="0.6s" href="/">back to home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* error Page end */}
    </>
  );
}
