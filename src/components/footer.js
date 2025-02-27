import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterBar = styled.footer`
  height: 64px;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-16);
  padding-left: var(--site-margins);
  padding-right: var(--site-margins);
  font-weight: var(--font-weight-normal);
`

const Spacer = styled.div`
  width: 190px;
`

const Logo = styled(props => <a {...props} />)`
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--font-weight-bold);
  margin-left: 7px;
`
const SponsorInfo = styled.div`
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-bold);
`

const LicenseText = styled(props => <a {...props} />)`
  margin: 8px;

  &:visited {
    color: var(--white);
    text-decoration: underline;
  }

  &:link {
    color: var(--white);
    text-decoration: underline;
  }
`

const LicenseInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const PaddedIcon = styled(props => <FontAwesomeIcon {...props} />)`
  margin-left: 1px;
  margin-right: 1px;
`

const Footer = () => {
  return (
    <FooterBar className="navigation">
      <Spacer />
      <LicenseInfo>
        <PaddedIcon icon={["fab", "creative-commons"]} />
        <PaddedIcon icon={["fab", "creative-commons-by"]} />
        <LicenseText href="https://creativecommons.org/licenses/by/3.0/">
          CC by 3.0
        </LicenseText>
      </LicenseInfo>
      <SponsorInfo>
        Sponsored by
        <Logo href="https://www.redhat.com/">
          <StaticImage
            className="logo"
            placeholder="none"
            backgroundColor="black"
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            src="../images/redhat_reversed.svg"
            alt="Red Hat logo"
            height={36}
          />
        </Logo>
      </SponsorInfo>
    </FooterBar>
  )
}

export default Footer
