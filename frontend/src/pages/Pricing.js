import React from "react";
import tw from "twin.macro";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
export default () => {
  return (
    <AnimationRevealPage>
      <PrimaryBackgroundContainer>
      <Content2Xl>
      <Header />
      <Pricing />
            </Content2Xl>
      </PrimaryBackgroundContainer>
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />

      <Footer/>

    </AnimationRevealPage>
  );
};
