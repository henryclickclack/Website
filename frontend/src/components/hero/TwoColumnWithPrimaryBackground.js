import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light2.svg";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import illust from "images/illustration.png";
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`

export default ({
  heading =  <div class="wrapper">
  Are you a <br/>
    <div class="words">
      <span  tw="text-primary-500">developer ?</span>
      <span  tw="text-primary-500">engineer ?</span>
      <span  tw="text-primary-500">automater ?</span>
      <span  tw="text-primary-500">designer ?</span>
      <span  tw="text-primary-500">programmer ?</span>
  </div>

</div>,
  description = "Our AI cloud solutions provide the best performance and value. Bring your ideas to life without having to struggle with AI development and MLOps. Just use our API to securly get the solutions you need.",
  primaryButtonText = "Get Your Free Trial Demo",
  primaryButtonUrl = "#",
  imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      QuickAI
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Features</NavLink>
      <NavLink href="#">Pricing</NavLink>
      <NavLink href="/login">Login</NavLink>
      <PrimaryLink href="/signup">Signup</PrimaryLink>
    </NavLinks>
  ];
  return (

    <PrimaryBackgroundContainer>

      <Content2Xl>

        <Header logoLink={logoLink} links={navLinks} />

        <Container>

          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              </TextColumn>
              <IllustrationColumn>
                <Image src={illust} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>

        </Container>

      </Content2Xl>

    </PrimaryBackgroundContainer>

  );
};
