import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import testimonialList from '../../../config/testimonials'

import ArrowButton from './ArrowButton'
import getSample from './utils/getSample'
import matchMedia from './utils/matchMedia'

const MULTI_COL_BREAKPOINT = '(min-width: 576px)'

const getTestimonials = (max, callback) => {
  if (!max) return callback(testimonialList)

  return callback(getSample(testimonialList, max))
}

class Testimonials extends Component {
  constructor() {
    super()
    this.state = {
      activeSlide: 0,
      testimonials: [],
      multiCol: false,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.handleColChange = this.handleColChange.bind(this)
  }

  componentDidMount() {
    getTestimonials(
      this.props.max,
      testimonials => this.setState({
        testimonials,
      }),
    )
    if (this.props.slidesToShow > 1) {
      this.mediaQuery = matchMedia(MULTI_COL_BREAKPOINT)
      if (this.mediaQuery.matches) this.handleColChange(this.mediaQuery)
      this.mediaQuery.addListener(this.handleColChange.bind(this))
    }
  }

  handleColChange({ matches }) {
    return this.setState({
      multiCol: matches,
      activeSlide: matches !== this.state.multiCol ? 0 : this.state.activeSlide,
    })
  }

  nextSlide() {
    this.setState({
      activeSlide: this.state.activeSlide + 1,
    })
  }

  prevSlide() {
    this.setState({
      activeSlide: this.state.activeSlide - 1,
    })
  }

  render() {
    const { slidesToShow, useShort, arrowColour } = this.props
    const { activeSlide, testimonials, multiCol } = this.state

    return (
      <div className="c-slider">
        {
          activeSlide > 0 && <ArrowButton colour={arrowColour} direction="left" text="Previous" onClick={this.prevSlide} />
        }
        <div className="c-slider__wrap">
          <ul
            className="c-slider__list"
            style={{
              transform: activeSlide !== 0
                ? `translateX(${(activeSlide * -1) * 100}%)`
                : undefined,
            }}
          >
            {
              testimonials.map((testimonial, index) => (
                <li
                  key={testimonial.quote}
                  className={classnames(
                    `c-slider__item sm:w-1/${slidesToShow}`,
                    !(index >= (multiCol ? activeSlide * slidesToShow : activeSlide)
                      && index <= (multiCol
                        ? (activeSlide * slidesToShow) + (slidesToShow - 1)
                        : activeSlide)
                    ) && 'c-slider__item--hidden',
                  )}
                >
                  <blockquote className="c-quote">
                    <div className="c-quote__body-wrap">
                      <div
                        className="c-quote__body"
                        dangerouslySetInnerHTML={{
                          __html: useShort && testimonial.quoteShort
                            ? testimonial.quoteShort
                            : testimonial.quote,
                        }}
                      />
                    </div>
                    <cite className="c-quote__citation c-quote__citation--wrap">
                      <span className="c-quote__citation c-quote__citation--contact">
                        { testimonial.contact }
                      </span>
                      <span className="c-quote__citation c-quote__citation--company">
                        { testimonial.company }
                      </span>
                    </cite>
                  </blockquote>
                </li>
              ))
            }
          </ul>
        </div>
        {
          activeSlide < (multiCol
            ? Math.floor((testimonials.length - 1) / slidesToShow)
            : testimonials.length - 1
          ) &&
            <ArrowButton colour={arrowColour} direction="right" text="Next" onClick={this.nextSlide} />
        }
      </div>
    )
  }
}

Testimonials.propTypes = {
  max: PropTypes.number,
  slidesToShow: PropTypes.number,
  useShort: PropTypes.bool,
  arrowColour: PropTypes.string,
}

Testimonials.defaultProps = {
  max: undefined,
  slidesToShow: 1,
  useShort: true,
  arrowColour: undefined,
}

export default Testimonials
