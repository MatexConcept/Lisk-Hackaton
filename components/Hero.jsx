import React from "react";

const Hero = ({transferNativeToken}) => {
  return (
    <section data-settings="particles-1"
    className="main-section curmina-flying-balls particles-js bg-1">
      <div className="container">
          <div className="row medium-padding120 align-center">
            <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
              <header className="crumina-module curmina-heading heading--h2 heading--with-decoration">
                    <div className="heading-sup-title">
                          Coin Market
                    </div>
                    <h2 className="heading-title heading--half-colored">
                      Created Liqudity MarketPlace
                    </h2>
                    <div className="heading-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus similique commodi libero quae, ducimus explicabo quidem voluptates totam. Labore, aperiam molestiae. Ratione, doloremque nihil!
                    </div>
              </header>
              <a onClick={() => transferNativeToken()} href="#buyWoox"  className="btn btn--large btn--primary btn--transparent">Get Woox Token Now!</a>
            </div>
          </div>
      </div>
    </section>
  )
};

export default Hero;
