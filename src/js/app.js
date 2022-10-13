import * as mtrFunctions from './modules/functions.js'
mtrFunctions.isWebp()
mtrFunctions.menuInit()

import './libs/dynamic_adapt.js'
import './libs/parallax-mouse.js'

import * as mtrForms from "./modules/forms/forms.js";
mtrForms.formFieldsInit({ viewPass: false });
mtrForms.formSubmit();

import * as mtrScroll from './modules/scroll/scroll.js'
mtrScroll.headerScroll()