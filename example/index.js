import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import xr_template_list from './apps/xr-template-list/index.js'

const apps = {
	[xr_template_list.name]:xr_template_list,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()