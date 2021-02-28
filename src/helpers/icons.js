import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt } from "@fortawesome/pro-duotone-svg-icons"
import { faTrash, faEdit, faMapMarkerAlt } from "@fortawesome/pro-solid-svg-icons"
import { faMinusSquare, faCog, faPlusSquare, faEnvelopeSquare, faEnvelope, faLock } from "@fortawesome/pro-regular-svg-icons"

const Icons = () => {
    library.add(
        faTrash,
        faMinusSquare,
        faSignOutAlt,
        faEdit,
        faCog,
        faPlusSquare,
        faEnvelopeSquare,
        faEnvelope,
        faMapMarkerAlt,
        faLock,
        fab
    )
}

export default Icons