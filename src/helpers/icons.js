import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt } from "@fortawesome/pro-duotone-svg-icons"
import { faTrash, faEdit, faMapMarkedAlt } from "@fortawesome/pro-solid-svg-icons"
import { faMinusSquare, faCog, faPlusSquare, faEnvelopeSquare } from "@fortawesome/pro-regular-svg-icons"

const Icons = () => {
    library.add(
        faTrash,
        faMinusSquare,
        faSignOutAlt,
        faEdit,
        faCog,
        faPlusSquare,
        faEnvelopeSquare,
        faMapMarkedAlt,
        fab
    )
}

export default Icons