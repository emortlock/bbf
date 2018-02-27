import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import { GridWrapper, GridItem } from '../Grid'

import testimonialList from '../../../config/testimonials'

import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import getSample from './getSample'

const NextArrow = props => (
  <button {...props}>
    <span className="visually-hidden">Next</span>
    <ArrowRight className="h-8 w-8" width="32px" height="32px" />
  </button>
)
const PrevArrow = props => (
  <button {...props}>
    <span className="visually-hidden">Previous</span>
    <ArrowLeft className="h-8 w-8" width="32px" height="32px" />
  </button>
)

const getTestimonials = (max, callback) => {
  if (!max) return callback(testimonialList)

  return callback(getSample(testimonialList, max))
}

class Testimonials extends Component {
  constructor() {
    super()
    this.state = {
      testimonials: [],
    }
  }

  componentDidMount() {
    getTestimonials(
      this.props.max,
      testimonials => this.setState({
        testimonials,
      }),
    )
  }

  render() {
    const { slidesToShow } = this.props

    return (
      <GridWrapper>
        {
          this.state.testimonials.map(testimonial => (
            <GridItem
              className={`p-4 text-left w-1/${slidesToShow}`}
              key={testimonial.quote}
            >
              <blockquote className="c-quote">
                <div
                  className="c-quote__body"
                  dangerouslySetInnerHTML={{ __html: testimonial.quote}}
                />
                <cite className="block roman">
                  <span className="block text-xl">{ testimonial.contact }</span>
                  <span className="block font-bold">{ testimonial.company }</span>
                </cite>
              </blockquote>
            </GridItem>
          ))
        }
      </GridWrapper>
    )
  }
}

Testimonials.propTypes = {
  max: PropTypes.number,
  slidesToShow: PropTypes.number,
}

Testimonials.defaultProps = {
  max: undefined,
  slidesToShow: 1,
}

export default Testimonials
