import React from 'react'

const LocalBusiness = () => (
  <div
    itemType="http://schema.org/LocalBusiness"
    itemID="http://www.bbf.co.uk/"
    itemScope
  >
    <meta itemProp="telephone" content="+441244831462" />
    <link
      itemProp="image"
      href="http://www.bbf.co.uk/static/images/app-icon@750x750"
    />
    <link
      itemProp="logo"
      href="http://www.bbf.co.uk/static/images/logo@3x.png"
    />
    <meta itemProp="alternateName" content="BBF" />
    <link itemProp="url" href="http://www.bbf.co.uk/" />
    <div itemProp="geo" itemType="http://schema.org/GeoCoordinates" itemScope>
      <meta itemProp="latitude" content="53.211568" />
      <meta itemProp="longitude" content="-3.0323003" />
    </div>
    <div
      itemProp="address"
      itemType="http://schema.org/PostalAddress"
      itemScope
    >
      <meta itemProp="postalCode" content="CH5 1QJ" />
      <meta itemProp="addressRegion" content="Flintshire" />
      <meta itemProp="addressCountry" content="GB" />
      <meta
        itemProp="streetAddress"
        content="Pendle Court, Evans Way, Rowleys Park"
      />
      <meta itemProp="addressLocality" content="Shotton" />
    </div>
    <meta itemProp="name" content="BBF" />
    <div
      itemProp="openingHoursSpecification"
      itemType="http://schema.org/OpeningHoursSpecification"
      itemScope
    >
      <meta itemProp="dayOfWeek" content="Tuesday" />
      <meta itemProp="closes" content="17:30" />
      <meta itemProp="dayOfWeek" content="Wednesday" />
      <meta itemProp="opens" content="09:00" />
      <meta itemProp="dayOfWeek" content="Friday" />
      <meta itemProp="dayOfWeek" content="Monday" />
      <meta itemProp="dayOfWeek" content="Thursday" />
    </div>
    <link
      itemProp="image"
      href="http://www.bbf.co.uk/static/images/app-icon@850x638"
    />
    <meta itemProp="email" content="print@bbf.co.uk" />
    <link
      itemProp="image"
      href="http://www.bbf.co.uk/static/images/app-icon@950x534"
    />
  </div>
)

export default LocalBusiness
