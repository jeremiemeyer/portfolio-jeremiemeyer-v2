import { Deployment } from '../../config/projects';
import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';

interface DeploymentListProps {
  deployment: Deployment;
}

function DeploymentList(props: DeploymentListProps): React.ReactElement {
  const { deployment } = props;

  function renderList(type: string): React.ReactNode {

    // const background = Colors[type as keyof typeof Colors];
    const link = deployment[type as keyof typeof deployment];


    return (
      <a
        className='mr-2 flex items-center px-2 py-1 text-xs font-medium text-white bg-black hover:bg-slate-900 rounded-xl h-8'
        href={link}
        // style={{ background }}
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiOutlineLink className='mr-1' size={15} />
        {type}
      </a>
    );
  }

  return (
    <div className='flex'>
      {React.Children.toArray(Object.keys(deployment).map(renderList))}
    </div>
  );
}

export default DeploymentList;
