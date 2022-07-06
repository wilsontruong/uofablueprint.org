import React from 'react'

import { Banner, ProjectList } from '../components/shared'

function Project() {
    return (
        <div id="projects">
            <Banner />
            <ProjectList title="Current Projects" />
            <ProjectList title="Past Projects" />
        </div>
    )
}

export default Project
