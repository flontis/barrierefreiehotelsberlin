import React from 'react';
import {HomepageBanner, HomepageCallout, ImageCard} from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';
import Profile from './fwuensche-rot.jpg';

const FirstLeftText = () => <p>Barrierefreiheit -<br/> persönlich geprüft</p>;

const FirstRightText = () => (
  <p>
    Barrierefreiheit kann vieles bedeuten. Allzu oft erlebt man dies als Rollstuhlfahrer bei der Buchung einer Unterkunft - vor Ort,
      wenn es bereits zu spät ist.
      Da ich in Berlin lebe und beruflich viel Reise sowie Geschäftsreisen organisiere, werde ich hier von mir geprüfte Hotels auflisten und von meinen Erfahrungen berichten.

  </p>
);

const SecondLeftText = () => (

    <img src={'../../images/fwuensche-rot.jpg'} alt={"Me"} />

)


const SecondRightText = () => (
  <p>
    Das bin ich. Seit meiner Geburt sitze ich aufgrund von spinaler Muskelatrophie im Rollstuhl
      und bin auch bei meinen Reisen auf barrierefreie Unterkünfte sowie auf Unterstützung durch meine Persönlichen
      Assistenten angewiesen.
  </p>
);

const BannerText = () => <h1>Barrierefreie Hotels in Berlin</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#030303"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
