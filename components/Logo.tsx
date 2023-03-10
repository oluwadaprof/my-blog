import Image from "next/image"
import avatar from '../assets/fawas.jpeg'

function Logo(props: any) {
    const { renderDefault, title } = props
    return (
        <div className="flex items-center space-x-2 my-2" >
            <Image
                className=" h-12 w-12 rounded-[50%] object-cover"
                height={50}
                width={50}
                src={avatar}
                alt="logo"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo