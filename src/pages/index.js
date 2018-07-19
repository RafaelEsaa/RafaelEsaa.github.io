/* global graphql */

import React from 'react';
import HowTo from '../components/how-to';
import BannerHome from '../components/bannerHome';
import Comparations from '../components/comparations';
import SearchSchool from '../components/searchSchool';
import Faq from '../components/faq';

const IndexPage = props =>
  (<main>
    {/* <Features data={props.data.allDataJson.edges[0].node.features} /> */}
    <BannerHome/>
    <Comparations/>
    <SearchSchool/>
    <Faq/>
    {/* <HowTo data={props.data.allSitePage.edges[0].node.id}/> */}
  </main>); 

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;
