import Image from "next/image"

const Browse = () => {
    return <div className="flex flex-wrap">
        <div className="text-4xl font-bold absolute m-12  right-0">
           <span> Sign Out</span>
            <div className=""><Image src="https://occ-0-4857-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbwdSFv3QFDRDc0BknR3lQSOf7GFR9V54jw7TWVBwmyoYbTSbFRAi95ZEYeYPr1_7ZBXM4aGr0gv0r4HY4Ma2IEmL9bsUWE.png?r=a16" alt = "Netflix-logo" width={32} height={32} />  
         </div>
            </div>
    </div>
}

export default Browse