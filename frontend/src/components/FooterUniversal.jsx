import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import PFSLogo from "../assets/PFs Logo.png";

const FooterUniversal = () => {
  return (
    <Footer container className="!bg-purple-900 py-4 rounded-none mt-20">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
          <FooterLinkGroup className="flex flex-col sm:flex-row w-full sm:justify-between items-center px-0 sm:px-10 gap-3 sm:gap-0">
            <FooterCopyright href="#" by="PFS Store™" year={2025} className="text-xs"/>
            <div className="flex flex-wrap justify-center sm:justify-between w-full sm:w-auto gap-2 sm:gap-45 text-xs">
              <FooterLink href="#">Pemasaran dan Kemitraan</FooterLink>
              <FooterLink href="#">Syarat dan Ketentuan</FooterLink>
              <FooterLink href="#">Kebijakan Privasi</FooterLink>
            </div>
            <FooterBrand
              href="/"
              src={PFSLogo}
              alt="PFS Store Logo"
              className="scale-140"
            />
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default FooterUniversal;
