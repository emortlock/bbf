import React from 'react'

import { H2 } from '../../../components/Heading'
import Section from '../../../components/Section'
import { ButtonLink } from '../../../components/Button'
import Image from '../../../components/Image'

const Guarantee = () => (
  <Section bgColour="green">
    <H2 dividerColour="white" className="mb-8">Our Guarantee</H2>
    <div className="mb-4">
      <Image
        className="h-48"
        src="/static/images/guarantee-white.png"
        alt="BBF guarantee of quality and service"
        placeholderHeight={192}
      />
    </div>
    <p>
      From business cards to promotional gifts, you will not find a supplier<br />
      more interested in getting things right than us.
    </p>

    <ButtonLink to="/guarantee">
      Find out more
    </ButtonLink>
  </Section>
)

export default Guarantee
