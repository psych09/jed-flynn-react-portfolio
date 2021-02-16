import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTrash, faEdit } from "@fortawesome/pro-solid-svg-icons"
import { faMinusSquare, faCog, faPlusSquare } from "@fortawesome/pro-regular-svg-icons"
import { faSignOutAlt } from "@fortawesome/pro-duotone-svg-icons"

const Icons = () => {
    library.add(faTrash, faMinusSquare, faSignOutAlt, faEdit, faCog, faPlusSquare)
}

export default Icons