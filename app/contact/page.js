export default function Contact() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="wow fadeInUp" data-cursor="-opaque">Contact <span>us</span></h1>
                <nav className="wow fadeInUp" data-wow-delay="0.2s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Info List Start */}
              <div className="contact-info-list">
                {/* Contact Info Item Start */}
                <div className="contact-info-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h3>contact us</h3>
                    <p><a href="tel:+123254963">(+00) 123-254-963</a></p>
                    <p><a href="tel:+761852339">(+12) 761 852 339</a></p>
                  </div>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Make a quote</h3>
                    <p><a href="mailto:info@domain.com">info@domainname.com</a></p>
                    <p><a href="mailto:support@domain.com">support@domain.com</a></p>
                  </div>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-clock.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h3>Working hours</h3>
                    <p>Mon-Fri : 08am - 10pm</p>
                    <p>sat-sun : close</p>
                  </div>
                </div>
                {/* Contact Info Item End */}

                {/* Contact Info Item Start */}
                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-location.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h3>location</h3>
                    <p>123 Lorem Street Suite 5B, Ipsum UK</p>
                  </div>
                </div>
                {/* Contact Info Item End */}
              </div>
              {/* Contact Info List Start */}
            </div>

            <div className="col-lg-12">
              {/* Contact Us Form Start */}
              <div className="conatct-us-form">
                {/* Google Map Iframe Start */}
                <div className="google-map-iframe order-lg-1 order-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* Google Map Iframe End */}

                {/* Contact Form Start */}
                <div className="contact-form order-lg-2 order-1">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Contact us</h3>
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Send us <span>a message</span></h2>
                  </div>
                  {/* Section Title End */}

                  {/* Contact Form Start */}
                  <form id="contactForm" action="/form-process.php" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.4s">
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="fname" className="form-control" id="fname" placeholder="First Name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Last Name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Phone No." required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email Address" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-12 mb-5">
                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Write Message..."></textarea>
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default"><span>submit now</span></button>
                          <div id="msgSubmit" className="h3 hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* Contact Form End */}
                </div>
                {/* Contact Form End */}
              </div>
              {/* Contact Us Form End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}
    </>
  );
}
