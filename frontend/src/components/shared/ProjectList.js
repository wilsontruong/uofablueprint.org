import React from 'react'

import { ProjectCard } from './index.js'

function ProjectList() {
    return (
        <div>
            {[1, 2, 3].map((i) => (
                <ProjectCard key={i} />
            ))}
        </div>
    )
}

export default ProjectList
