import React from 'react'

import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Criteria } from '../components/studentApply'
import FaqData from '../data/NonprofitFaqData.json' // replace with student FAQ mock data

function StudentApply() {
    return (
        <div>
            <Banner />
            <ApplyProcess
                ApplyProcessData={ApplyProcessData}
                title="Students Application Process"
            />
            <Criteria />
            <Faq FaqData={FaqData}/>
        </div>
    )
}

export default StudentApply
