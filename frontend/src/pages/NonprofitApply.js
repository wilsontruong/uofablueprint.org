import React from 'react'

import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Service, Criteria } from '../components/nonprofitApply'

function NonprofitApply() {
    return (
        <div>
            <Banner />
            <Service />
            <ApplyProcess />
            <Criteria />
            <Faq />
        </div>
    )
}

export default NonprofitApply
