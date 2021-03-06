import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/about-theme-2.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Yazan and I’m a Software engineer  & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
        I’ve long been interested in software development and design and always enjoy learning about new and exciting technologies. my experience in Python Frameworks Django, Flask. Golang, Bash and JavaScript libraries like ReactJs. I love open source software especially GNU Linux, my favorite distribution fedora silverblue. working on containerzation technologies like Docker and Kubernetes. kubeflow.</p>
        <p>Also interested in machine learning, algorithms, linear algebra. statistics</p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
