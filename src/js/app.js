import * as mtrFunctions from './modules/functions.js'

mtrFunctions.isWebp()
mtrFunctions.menuInit()

import './libs/dynamic_adapt.js'

import * as mtrForms from "./modules/forms/forms.js";
mtrForms.formFieldsInit({ viewPass: false });
mtrForms.formSubmit();