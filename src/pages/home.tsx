import ProjectCostTable from '@/components/ProjectCostTable'
import { Panel } from 'primereact/panel'
import React from 'react'

const home = () => {
  return (
    <div className='w-full h-screen p-4'>
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="row-span-3">
          <Panel header="项目信息1">

          </Panel>
        </div>
        <div className="col-span-2 row-span-3">
          <Panel header="项目信息2">
          </Panel>
        </div>
        <div className="row-span-3 col-start-4">
          <Panel header="项目信息3">

          </Panel>
        </div>
        <div className="row-start-4">
          <Panel header="项目信息">

          </Panel>
        </div>
        <div className="col-start-1 row-start-5">
          <Panel header="项目信息">

          </Panel>
        </div>
        <div className="row-span-2 col-start-2 row-start-4">
          <Panel header="项目信息">

          </Panel>
        </div>
        <div className="row-span-2 col-start-3 row-start-4">
          <Panel header="项目信息">

          </Panel>
        </div>
        <div className="row-span-2 col-start-4 row-start-4">
          <Panel header="项目信息">
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default home
