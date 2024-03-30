import "../css/Home.css";

const AboutUs = () => {
  return (
    <div
      className="w3-content"
      style={{ maxWidth: "2000px", marginTop: "60px", display: "block" }}
    >
      <div className="About-Us-Container-Desktop">
        <img
          src="../assets/About-Us-Image-Desktop.jpg"
          alt=""
          className="About-Us-Image"
        />
      </div>
      <div className="About-Us-Container-Mobile">
        <img
          src="../assets/About-Us-Image-Mobile.jpg"
          alt=""
          className="About-Us-Image"
        />
      </div>
      <div className="About-Us-Container">
        <div className="About-Us-Info">
          <p>
            Since we began in Canada in 1991, we've grown to become one of the
            country's largest employers, with more than 100,000 associates
            nationwide. As we continue to evolve — offering tens of millions of
            products and a growing portfolio of services — we're helping to
            advance Canada's economy, working with Canadian suppliers to meet
            customer needs.
          </p>
          <p>
            Every day, we help move our country's economy forward by working
            with close to 2,000 Canadian suppliers. We're also embracing
            regeneration, striving to leave the world better than we found it.
            We're a leader in sustainability, we create jobs and opportunities
            for people of all backgrounds and we help strengthen communities
            across the country.
          </p>
          <h2>CantekShop Worldwide</h2>
          <p>
            Forty years on from our first small discount store in Ontario,
            CantekShop operates in 19 countries and e-commerce sites and employs
            2.1 million associates around the world. We take a tailored approach
            to bring the right businesses to communities that need them, and
            create opportunities and value for customers, suppliers and
            associates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
