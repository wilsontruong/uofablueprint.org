import React from 'react'
import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import FaqData from '../data/NonprofitFaqData.json'
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
            <Faq FaqData={FaqData}/>
        </div>
    )
}

export default NonprofitApply
