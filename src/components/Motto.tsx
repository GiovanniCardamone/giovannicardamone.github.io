import * as React from 'react'
import pups from '@pups/js'

const Motto: React.FunctionComponent<{
  motto: string
  nopadding?: boolean
}> = (props: { motto: string; nopadding?: boolean }) => {
  return (
    <div
      style={{
        padding: props.nopadding ? '' : ` ${pups.ms(1)} ${pups.ms(1)}`,
        border: '1px solid white'
      }}
    >
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: `0 ${pups.ms(-2)}`,
          fontStyle: 'italic'
        }}
      >
        <svg
          style={{ ...Quote, left: 0, top: 0 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 12'
        >
          <path
            d='M16,3V9.667H13.333A4.411,4.411,0,0,0,16,13.566L15.333,15A6.992,6.992,0,0,1,9.345,7.927V3ZM6.655,3V9.667H4a4.41,4.41,0,0,0,2.664,3.9L6,15A7,7,0,0,1,0,7.927V3Z'
            transform='translate(0 -3)'
            fill='#fff'
          />
        </svg>

        <div
          style={{
            padding: props.nopadding ? `0 ${pups.ms(-2)}` : `0 ${pups.ms(0)}`,
            display: 'inline-block'
          }}
        >
          {props.motto}
        </div>

        <svg
          style={{ ...Quote, right: 0, bottom: 0 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 18 12'
        >
          <path
            d='M7.487,3V7.927c0,3.8-2.8,6.38-6.737,7.073L0,13.566a4.443,4.443,0,0,0,3-3.9H0V3ZM18,3V7.927c0,3.8-2.811,6.381-6.75,7.073L10.5,13.566a4.443,4.443,0,0,0,3-3.9H10.513V3Z'
            transform='translate(0 -3)'
            fill='#fff'
          />
        </svg>
      </div>
    </div>
  )
}

const Quote: React.CSSProperties = {
  height: pups.ms(-1),
  position: 'absolute'
}

export default Motto
