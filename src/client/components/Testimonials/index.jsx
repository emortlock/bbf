import React, { Component } from 'react'
import PropTypes from 'prop-types'

import testimonialList from '../../../config/testimonials'

import ArrowButton from './ArrowButton'
import getSample from './getSample'

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
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }

  componentDidMount() {
    getTestimonials(
      this.props.max,
      testimonials => this.setState({
        testimonials,
      }),
    )
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
    const { slidesToShow, useShort, ArrowNext, ArrowPrev } = this.props
    const { activeSlide, testimonials } = this.state

    return (
      <div className="flex items-stretch">
        {
          activeSlide > 0 && <ArrowPrev direction="left" text="Previous" onClick={this.prevSlide} />
        }
        <div className="flex overflow-hidden">
          <ul
            className="list-reset whitespace-no-wrap w-full"
            style={{
              transform: activeSlide !== 0
                ? `translateX(${(activeSlide * -1) * 100}%)`
                : undefined,
            }}
          >
            {
              testimonials.map(testimonial => (
                <li
                  key={testimonial.quote}
                  className={`w-1/${slidesToShow} h-full inline-block whitespace-normal p-8 text-left align-text-bottom`}
                >
                  <blockquote className="c-quote h-full flex flex-col">
                    <div className="flex-1">
                      <div
                        className="c-quote__body"
                        dangerouslySetInnerHTML={{
                          __html: useShort && testimonial.quoteShort
                            ? testimonial.quoteShort
                            : testimonial.quote,
                        }}
                      />
                    </div>
                    <cite className="block roman">
                      <span className="block text-xl">{ testimonial.contact }</span>
                      <span className="block font-bold">{ testimonial.company }</span>
                    </cite>
                  </blockquote>
                </li>
              ))
            }
          </ul>
        </div>
        {
          activeSlide < (Math.floor((testimonials.length - 1) / slidesToShow)) &&
            <ArrowNext direction="right" text="Next" onClick={this.nextSlide} />
        }
      </div>
    )
  }
}

Testimonials.propTypes = {
  max: PropTypes.number,
  slidesToShow: PropTypes.number,
  useShort: PropTypes.bool,
  ArrowNext: PropTypes.func,
  ArrowPrev: PropTypes.func,
}

Testimonials.defaultProps = {
  max: undefined,
  slidesToShow: 1,
  useShort: true,
  ArrowNext: ArrowButton,
  ArrowPrev: ArrowButton,
}

export default Testimonials
