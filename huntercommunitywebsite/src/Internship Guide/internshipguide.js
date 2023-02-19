import React from 'react'
import Banner from '../banner'

function importAll(r) {
  let pdfs = {}
  r.keys().map((item, index) => {
    pdfs[item.replace('./', '')] = r(item)
  })
  console.log(pdfs)
  return pdfs
}

const pdfs = importAll(require.context('./pdfs', false, /\.pdf/))

const internshipguide = () => {
  return (
    <div>
      <Banner text={'INTERNSHIP GUIDE'} />

      <a
        href={pdfs['Guide To Your First College Aide Job.pdf']}
        target="_blank"
        rel="noreferrer"
      >
        Download Here
      </a>
    </div>
  )
}

export default internshipguide
