import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import AboutImg from '../../../static/assets/images/about/profile-img.jpg'

export default function() {
    return(
        <div className="content-page-wrapper">

            <div className="content-column">

                <h2>Hi, I'm Jed</h2>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat corporis blanditiis quibusdam, optio fuga accusantium natus ipsum minus tenetur reprehenderit corrupti! Qui quae provident eligendi distinctio voluptatem obcaecati? Delectus.</p>

                <p>Corporis ratione nisi tenetur porro, ipsa laboriosam ipsum eveniet, provident quisquam delectus voluptates dolorum tempora quam consequuntur, expedita obcaecati corrupti rerum nesciunt recusandae. Perspiciatis, delectus sint aspernatur quis sed neque!</p>

                <p>Suscipit sint, unde magni harum vero eligendi dolore nisi tempore nobis assumenda facilis ipsam doloremque voluptatum tenetur molestias voluptas voluptatibus incidunt esse repudiandae perferendis iure odio rem a. Dolorem, unde!</p>

                <p>Quo officiis nemo minus veniam aliquid natus, eum voluptatibus quis expedita odit hic obcaecati atque dolor, labore illo sed perspiciatis aperiam in ipsa voluptates quos inventore saepe error! Ipsum, error.</p>

                <p>Similique illo est vitae unde esse beatae asperiores dignissimos, ipsam praesentium amet eos consequatur quod? Fugiat ipsam explicabo provident at commodi natus iusto adipisci obcaecati perferendis sint. Corrupti, ipsam? Doloribus.</p>

                <div className="about-icons">
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'html5']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'css3-alt']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'git-alt']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'js']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'react']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'python']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'font-awesome-alt']} />
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'invision']} />
                </div>

            </div>

            <div
                className="image-column"
                style={{
                    backgroundImage: `url(${AboutImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

        </div>
    )
}