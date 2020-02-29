import React from 'react';
import Container from '../components/layout/container/container'
import ProjectPreview from '../components/main/projectPreview/projectPreview'

export default props => {

    const { nodes } = props.pageContext;
    return (
        <Container>
            {
                nodes.map(node => (
                    <ProjectPreview key={node.id} node={node}/>
                ))
            }
        </Container>
    )
}