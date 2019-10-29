import React from 'react'
import { shortenTitle } from '../../store/actions/projectFunctions'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <img src={project.cover} class="cover"></img>
                    <p class="bookTitle">{project.title}</p>
                    <p class="bookDesc">By: {project.author}</p>
                </div>
            </div>
    )
}

export default ProjectSummary