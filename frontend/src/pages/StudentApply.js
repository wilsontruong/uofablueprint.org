import React from 'react'

import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Criteria } from '../components/studentApply'

function StudentApply() {
    return (
        <div>
            <Banner />
            <ApplyProcess />
            <Criteria />
            <Faq />
        </div>
    )
}

export default StudentApply
