import React from 'react'
import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Service, Criteria } from '../components/nonprofitApply'

function NonprofitApply() {
    return (
        <div>
            <Banner />
            <Service />
            <ApplyProcess
                ApplyProcessData={ApplyProcessData}
                title="Nonprofits Application Process"
            />
            <Criteria />
            <Faq />
        </div>
    )
}

export default NonprofitApply
