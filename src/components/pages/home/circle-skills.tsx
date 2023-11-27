"use client"
import Progress from 'react-circle-progress-bar'

export default function CircleSkills() {

  const skills = [
    { name: 'Javascript', percentage: 80 },
    { name: 'TypeScript', percentage: 60 },
    { name: 'React', percentage: 60 },
    { name: 'Next.js', percentage: 50 },
  ]

  return (
    <>
        {skills.map((skill, index) => (
            <Progress
                className="max-w-[150px] md:max-w-[250px]"
                key={index}
                progress={skill.percentage}
                subtitle={skill.name}
                hideBall={true}
                transitionDuration={3}
                transitionTimingFunction={"ease"}
                gradient={[{stop: 0.0, color: '#2563EB'}, {stop: 1, color: '#86DAEE'}]}
                background={'#1F2937'}
            />

        ))

        }

    </>
  )
}