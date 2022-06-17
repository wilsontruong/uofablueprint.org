import React from 'react'

import { Banner } from '../components/shared'
import { Member, Mission, Value } from '../components/about'

function About() {
    return (
        <div>
            <Banner />
            <Mission />
            <Value />
            <Member />
        </div>
    )
}

export default About
