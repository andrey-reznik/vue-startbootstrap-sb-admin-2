import Vue from 'vue'
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faTachometerAlt,
  faLaughWink,
  faSignOutAlt,
  faSearch,
  faBell,
  faEnvelope,
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
  faCog,
  faWrench,
  faFolder,
  faChartArea,
  faTable,
  faAngleLeft,
  faAngleRight,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
  faSpinner,
  faTachometerAlt,
  faLaughWink,
  faSignOutAlt,
  faSearch,
  faBell,
  faEnvelope,
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
  faCog,
  faWrench,
  faFolder,
  faChartArea,
  faTable,
  faAngleLeft,
  faAngleRight,
  faQuestion,
)
dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon)
