import React from 'react'

import ApplyProcessData from '../data/studentApplyProcess.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Criteria } from '../components/studentApply'
import FaqData from '../data/studentApplyFaq.json'

function StudentApply() {
    return (
        <div>
            <Banner
                header="For Students"
                body="Joining Blueprint is a great way to give back to your community. Help us build our applications and work with nonprofits!"
                buttonText="Join our team"
                buttonLink="/apply/students#studentApplyProcess"
            ></Banner>
            <div id="studentApplyProcess" style={{ marginBottom: '3%' }}>
                <ApplyProcess
                    ApplyProcessData={ApplyProcessData} //Div is so the hashlink button can scroll down
                    title="Students Application Process"
                />
            </div>
            <Criteria />
            <Faq FaqData={FaqData} />
        </div>
    )
}

export default StudentApply
