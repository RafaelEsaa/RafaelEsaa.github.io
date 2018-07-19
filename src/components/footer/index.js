import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="">
    <div class="row justify-content-center full-width footer-menu fondo-footer">
        <div class="col-md-3 pt-5">
            <p>Popular schools</p>
            <ul class="list-footer">
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
            </ul>
        </div>
        <div class="col-md-3 pt-5">
            <p>Popular schools</p>
            <ul class="list-footer">
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
            </ul>
        </div>
        <div class="col-md-3 pt-5">
            <p>Popular schools</p>
            <ul class="list-footer">
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
                <li>General Assembly</li>
            </ul>
        </div>
    </div>
    <div className="row justify-content-center full-width footer">
        <div className="col-md-3 pt-5">
            <p>img</p>
            <p>Copyright</p>
        </div>
        <div className="col-md-3 pt-5">
            <p className="text-center f-l">Terms fo service</p>
            <p className="text-center">Privacy Policy</p>
        </div>
        <div className="col-md-3 pt-5">
            <p>Email us:</p>
            <p>hello@prueba.com</p>
        </div>
    </div>
    {/* <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <a href="https://github.com/PrototypeInteractive/gatsby-react-boilerplate" target="_blank" rel="noopener noreferrer">
              <Icon icon={Github} width={24} height={24} fill={'#fff'} />
            </a>
          </div>
        </div>
      </div>
    </div> */}
  </footer>);

export default Footer;
